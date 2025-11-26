# Cloudflare Workers Migration Plan

## Executive Summary

This document outlines the plan to migrate the Discord bot template from a traditional Node.js/Discord.js Gateway-based architecture to Cloudflare Workers using HTTP-only interactions. The migration will enable free hosting while maintaining core functionality through Discord's Interactions API.

---

## 1. Critical Architecture Changes

### 1.1 Current Architecture (Gateway-Based)

- **Discord.js Client** with WebSocket Gateway connection
- Persistent connection listening for events
- Real-time event handling (`ClientReady`, `InteractionCreate`, etc.)
- Stateful bot instance running continuously

### 1.2 Target Architecture (HTTP-Only)

- **Cloudflare Worker** handling HTTP requests
- Discord sends HTTP POST requests for interactions
- Stateless request/response model
- No persistent connections

### 1.3 Key Differences

| Feature    | Current (Gateway)           | Target (Workers)             |
| ---------- | --------------------------- | ---------------------------- |
| Connection | Persistent WebSocket        | HTTP requests only           |
| Events     | Real-time via Gateway       | Interaction webhooks only    |
| State      | In-memory bot state         | Stateless (use KV if needed) |
| Runtime    | Continuous Node.js process  | On-demand Worker execution   |
| Commands   | Handled via event listeners | Handled via HTTP endpoint    |

---

## 2. Cloudflare Workers Free Tier Limitations

### 2.1 Hard Limits

- **Daily Requests**: 100,000/day
- **CPU Time**: 10ms per invocation
- **Memory**: 128MB per isolate
- **Workers KV**:
  - 100,000 reads/day
  - 1,000 writes/day
  - 1GB total storage

### 2.2 Functionality Limitations

#### ❌ **NOT Supported:**

1. **Persistent WebSocket Connections**
   - Cannot maintain Gateway connection
   - Cannot listen to real-time events (message reactions, member joins, etc.)
   - Cannot use Discord.js Client for Gateway

2. **Long-Running Operations**
   - 10ms CPU limit restricts complex processing
   - Cannot stream audio/video
   - Cannot perform heavy computations

3. **Real-Time Event Listening**
   - No `messageCreate`, `guildMemberAdd`, etc.
   - Only interaction-based commands work

#### ✅ **Supported:**

1. **Slash Commands** (via Interactions API)
2. **Button Interactions** (via Interactions API)
3. **Modal Interactions** (via Interactions API)
4. **Autocomplete** (via Interactions API)
5. **Follow-up Messages** (via webhooks)

### 2.3 Workarounds

1. **For Real-Time Events**: Not possible on free tier. Users must upgrade or use hybrid architecture.
2. **For Complex Operations**: Offload to external services or break into smaller operations.
3. **For State Management**: Use Workers KV sparingly (limited writes) or external database.

---

## 3. Required Code Changes

### 3.1 Remove/Replace Components

**Remove:**

- `src/core/Bot.ts` - Discord.js Client with Gateway
- `src/index.ts` - Bot startup/login logic
- Gateway event listeners
- WebSocket connection management

**Replace With:**

- `src/worker.ts` - Cloudflare Worker entry point
- HTTP request handler for Discord interactions
- Interaction signature verification
- Stateless command execution

### 3.2 Keep/Adapt Components

**Keep (with modifications):**

- `src/core/Command.ts` - Command base class (works with interactions)
- `src/core/CommandManager.ts` - Command registry (no changes needed)
- `src/commands/*` - All command classes (minimal changes)
- `src/services/Logger.ts` - Adapt for Workers environment
- `src/services/Environment.ts` - Adapt for Workers env vars
- `src/services/DiscordApi.ts` - Keep for REST API calls

**Modify:**

- Commands receive `ChatInputCommandInteraction` from HTTP request, not Gateway event
- Remove any Gateway-specific code (client.cache, etc.)
- Replace `interaction.client` usage with direct API calls

### 3.3 New Components Needed

1. **`src/worker.ts`**
   - Cloudflare Worker entry point
   - Handles HTTP POST requests from Discord
   - Verifies interaction signatures (ed25519)
   - Routes to command handlers

2. **`src/utils/verification.ts`**
   - Discord interaction signature verification
   - Uses Web Crypto API (available in Workers)

3. **`src/utils/interaction-response.ts`**
   - Builds HTTP responses for Discord
   - Handles PING (verification) and command responses

4. **`wrangler.toml`**
   - Cloudflare Workers configuration
   - Environment definitions (dev/prod)
   - KV namespace bindings (if needed)

---

## 4. Local Development Setup

### 4.1 Docker Configuration

**`Dockerfile.dev`**:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "run", "dev:local"]
```

**`docker-compose.yml`**:

```yaml
version: '3.8'
services:
  bot:
    build:
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - .:/app
      - /app/node_modules
    env_file:
      - .env
    ports:
      - '8787:8787' # Miniflare default port
    command: npm run dev:local
```

### 4.2 Local Development Tools

**Miniflare** (Cloudflare Workers emulator):

- Runs Workers locally
- Supports KV, Durable Objects simulation
- Hot reload support
- Use `wrangler dev` or `miniflare` CLI

**Development Scripts**:

- `npm run dev:local` - Start Miniflare with hot reload
- `npm run dev:docker` - Start Docker Compose
- `npm run register` - Register commands (unchanged)

### 4.3 Environment File Exception

**`.gitignore`** modification:

- Keep `.env` in `.gitignore` (for security)
- Add `.env.example` with template
- Add `.env.local` exception for local development (if needed)

**Alternative**: Use `.env` locally but ensure it's in `.gitignore` (already is)

---

## 5. GitHub Actions CI/CD

### 5.1 Workflow Structure

**`.github/workflows/deploy.yml`**:

```yaml
name: Deploy to Cloudflare Workers

on:
  push:
    branches:
      - dev
      - prod

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: ${{ github.ref == 'refs/heads/prod' && 'prod' || 'dev' }}
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: deploy --env ${{ github.ref == 'refs/heads/prod' && 'prod' || 'dev' }}
```

### 5.2 Environment Secrets Setup

**Required GitHub Secrets** (per environment):

**Dev Environment:**

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `DISCORD_TOKEN`
- `DISCORD_CLIENT_ID`
- `DISCORD_PUBLIC_KEY` (for signature verification)
- `DEVELOPER_IDS` (optional)

**Prod Environment:**

- Same as above, with production values

### 5.3 Branch-Based Deployment

- **`dev` branch** → Deploys to `dev` environment (uses `dev` secrets)
- **`prod` branch** → Deploys to `prod` environment (uses `prod` secrets)
- Other branches → No deployment (can add test workflow)

---

## 6. Discord Configuration Changes

### 6.1 Interaction Endpoint URL

**Required Setup:**

1. Get Cloudflare Worker URL (e.g., `https://bot-name.your-subdomain.workers.dev`)
2. Configure in Discord Developer Portal:
   - **Interactions Endpoint URL**: Worker URL
   - Discord will send POST requests to this URL

### 6.2 Public Key

- Discord provides a **Public Key** for signature verification
- Store as `DISCORD_PUBLIC_KEY` in secrets
- Used to verify requests are from Discord

### 6.3 Command Registration

- **Unchanged**: Still use `src/register.ts` script
- Commands registered via REST API (not affected by Workers)
- Run `npm run register` before first deployment

---

## 7. File Structure Changes

### 7.1 New Files

```
TSTemplateBot_CFWorker/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD workflow
├── docker-compose.yml           # Docker Compose config
├── Dockerfile.dev               # Development Dockerfile
├── wrangler.toml                # Cloudflare Workers config
├── src/
│   ├── worker.ts                # Worker entry point (NEW)
│   ├── utils/
│   │   ├── verification.ts     # Signature verification (NEW)
│   │   └── interaction-response.ts  # Response builders (NEW)
│   └── [existing files...]
└── .env.example                 # Environment template (NEW)
```

### 7.2 Modified Files

```
src/
├── core/
│   └── Bot.ts                   # REMOVE (replaced by worker.ts)
├── index.ts                     # REMOVE (replaced by worker.ts)
├── register.ts                  # KEEP (unchanged)
└── services/
    ├── Logger.ts                # MODIFY (adapt for Workers)
    └── Environment.ts           # MODIFY (use Workers env vars)
```

### 7.3 Removed Dependencies

- No changes needed - Discord.js can still be used for REST API calls
- However, we won't instantiate a `Client` for Gateway

---

## 8. Implementation Phases

### Phase 1: Core Worker Setup

1. Create `wrangler.toml` with dev/prod environments
2. Create `src/worker.ts` with basic HTTP handler
3. Implement signature verification (`src/utils/verification.ts`)
4. Test PING/PONG interaction

### Phase 2: Command Integration

1. Adapt `CommandManager` for HTTP requests
2. Update command execution flow
3. Test `/ping` command end-to-end
4. Ensure all existing commands work

### Phase 3: Local Development

1. Set up Docker Compose
2. Configure Miniflare for local testing
3. Create development scripts
4. Test local workflow

### Phase 4: CI/CD Setup

1. Create GitHub Actions workflow
2. Configure environment secrets
3. Test dev deployment
4. Test prod deployment

### Phase 5: Documentation & Polish

1. Update README with new setup instructions
2. Add `.env.example` template
3. Document limitations and workarounds
4. Test complete user journey

---

## 9. Testing Strategy

### 9.1 Local Testing

- Use Miniflare to simulate Workers environment
- Test interaction signature verification
- Test all commands locally
- Verify Docker setup works

### 9.2 Cloudflare Testing

- Deploy to dev environment
- Test interactions via Discord
- Monitor CPU time and memory usage
- Verify error handling

### 9.3 Production Testing

- Deploy to prod environment
- Monitor request limits
- Test rate limiting
- Verify logging works

---

## 10. Known Limitations & Trade-offs

### 10.1 What Won't Work

- ❌ Real-time event listening (message reactions, member joins, etc.)
- ❌ Long-running operations (>10ms CPU time)
- ❌ Audio/video streaming
- ❌ Persistent in-memory state

### 10.2 What Will Work

- ✅ Slash commands
- ✅ Button interactions
- ✅ Modal interactions
- ✅ Autocomplete
- ✅ Follow-up messages
- ✅ REST API calls to Discord

### 10.3 Migration Impact

- **Low Impact**: Commands that only use interactions (most commands)
- **High Impact**: Commands relying on Gateway events (need refactoring)
- **Breaking**: Any code using `client.on()` for non-interaction events

---

## 11. Success Criteria

✅ User can clone repo and run `/ping` locally with Docker  
✅ User can deploy to Cloudflare Workers via GitHub Actions  
✅ Dev/prod environments work independently  
✅ All existing commands work via HTTP interactions  
✅ Documentation is clear and complete

---

## 12. Next Steps

1. **Review this plan** - Ensure all requirements are captured
2. **Approve architecture** - Confirm HTTP-only approach is acceptable
3. **Begin Phase 1** - Start with core Worker setup
4. **Iterate** - Test each phase before moving to next

---

## Appendix: Discord Interactions API Reference

- **Endpoint**: `POST /interactions`
- **Signature**: ed25519 with public key
- **Response Types**:
  - `PING` → `PONG` (verification)
  - `APPLICATION_COMMAND` → Command response
  - `MESSAGE_COMPONENT` → Button/modal response
- **Response Time**: Must respond within 3 seconds or use deferred response

---

**Document Version**: 1.0  
**Last Updated**: Planning Phase  
**Status**: Awaiting Approval
