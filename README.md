# Discord Bot Template - Cloudflare Workers

A clean, modular Discord bot template for **Cloudflare Workers** with TypeScript, featuring a command class pattern, scheduled tasks (cron triggers), and single source of truth architecture.

## Features

- **Cloudflare Workers**: Deploy to Cloudflare's edge network for free
- **Scheduled Tasks**: Built-in cron trigger support for scheduled messages
- **Single Source of Truth**: Add commands in one place, automatically available everywhere
- **TypeScript**: Full type safety and modern JavaScript features
- **Modular Commands**: Self-contained command classes with built-in validation
- **Auto-Generated Help**: Commands self-document with metadata
- **CI/CD**: Automatic deployment via GitHub Actions

## Quick Start

### 1. Setup

```bash
git clone <your-repo>
cd TSTemplateBot_CFWorker
npm install
```

### 2. Configure GitHub Secrets

Add the following secrets to your GitHub repository (Settings → Secrets and variables → Actions):

- `DISCORD_TOKEN` - Bot token from Discord Developer Portal
- `DISCORD_CLIENT_ID` - Application ID from Discord Developer Portal
- `DISCORD_PUBLIC_KEY` - Public key from Discord Developer Portal
- `CLOUDFLARE_API_TOKEN` - Cloudflare API token with **Workers Edit** permissions
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

### 3. Deploy

**Automatic deployment via GitHub Actions:**

- Push to `dev` branch → Deploys to dev environment
- Push to `prod` branch → Deploys to prod environment

The workflow automatically builds, deploys, and registers commands.

### 4. Configure Discord Interactions Endpoint

**CRITICAL:** After deployment, set the Interactions Endpoint URL in Discord:

1. Get your Worker URL from Cloudflare Dashboard → Workers & Pages
2. Go to [Discord Developer Portal](https://discord.com/developers/applications) → Your Application → **General Information**
3. Set **Interactions Endpoint URL** to your Worker URL (e.g., `https://discord-bot-template-dev.your-subdomain.workers.dev`)
4. Click **Save Changes** - Discord will verify automatically

## Project Structure

```
src/
├── worker.ts                  # Cloudflare Worker entry point
├── core/
│   ├── Command.ts             # Abstract command base
│   └── CommandManager.ts       # Command management
├── commands/
│   ├── index.ts               # ← Command registry (single source of truth)
│   ├── ping/
│   │   └── index.ts           # Ping command
│   └── help/
│       └── index.ts           # Help command (auto-discovers all commands)
├── services/
│   ├── Logger.ts              # Contextual logging
│   ├── DiscordApi.ts          # API helper
│   └── Environment.ts         # Config validation
├── utils/
│   ├── verification.ts        # Discord signature verification
│   └── interaction-response.ts # Response builders
└── register.ts                # Command registration
```

## Adding Commands

### 1. Create Command Class

```typescript
// src/commands/mycommand/index.ts
import { Command, CommandHelpInfo, RawInteraction, RESTClient } from '../../core/Command.js';
import { InteractionResponse } from '../../utils/interaction-response.js';

export class MyCommand extends Command {
  public readonly data = {
    name: 'mycommand',
    description: 'My awesome command',
    type: 1, // CHAT_INPUT
  };

  public readonly helpInfo: CommandHelpInfo = {
    name: 'mycommand',
    description: 'Does something awesome',
    usage: '/mycommand',
    examples: ['/mycommand'],
    category: 'General',
  };

  public async execute(
    interaction: RawInteraction,
    env: Record<string, unknown>,
    rest: RESTClient
  ): Promise<Response> {
    return InteractionResponse.message('Hello World!');
  }
}
```

### 2. Register Command

```typescript
// src/commands/index.ts
import { MyCommand } from './mycommand/index.js';

export const ALL_COMMANDS: Command[] = [
  // ... existing commands
  new MyCommand(), // ← Add here
];
```

**That's it!** Your command is automatically:

- ✅ Registered with Discord
- ✅ Available in the bot
- ✅ Listed in help system
- ✅ Validated and logged

## Built-in Commands

- `/ping` - Basic ping/pong with latency
- `/help [command]` - Auto-generated help system

## Scripts

- `npm run build` - Compile TypeScript
- `npm run deploy:dev` - Deploy to dev environment
- `npm run deploy:prod` - Deploy to prod environment
- `npm run register` - Register commands with Discord
- `npm run tail:dev` - Stream dev environment logs
- `npm run tail:prod` - Stream prod environment logs

## Environment Variables

| Variable             | Required | Description                                     |
| -------------------- | -------- | ----------------------------------------------- |
| `DISCORD_TOKEN`      | ✅       | Bot token from Discord Developer Portal         |
| `DISCORD_CLIENT_ID`  | ✅       | Application ID from Discord Developer Portal    |
| `DISCORD_PUBLIC_KEY` | ✅       | Public key for signature verification           |
| `DEVELOPER_IDS`      | ❌       | Comma-separated user IDs for developer commands |
| `NODE_ENV`           | ❌       | Environment mode (defaults to `production`)     |

## Scheduled Tasks

Configure cron triggers in `wrangler.toml`:

```toml
[triggers]
crons = ["0 * * * *"]  # Every hour
```

Implement in `src/worker.ts`:

```typescript
async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
  // Your scheduled task logic here
}
```

## Limitations

**Cloudflare Workers Free Tier:**

- ✅ 100,000 requests/day
- ✅ Cron triggers included
- ⚠️ 10ms CPU time per HTTP request (15 min for scheduled tasks)
- ⚠️ No persistent WebSocket connections (HTTP-only interactions)

**What Works:**

- ✅ Slash commands
- ✅ Button/Modal interactions
- ✅ Autocomplete
- ✅ Scheduled messages (cron)
- ✅ REST API calls

**What Doesn't Work:**

- ❌ Real-time Gateway events (message reactions, member joins, etc.)
- ❌ Long-running operations (>10ms CPU time for HTTP requests)

## License Note
This project is licensed under **[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) + the [Commons Clause](https://commonsclause.com/)**. In plain terms:

- ✅ **Free to use as a template.** Build and deploy your own Cloudflare Workers Discord bots on top of it, private or public, monetized or not, at no cost.
- ✅ **Forking and contributing is welcome.** Fork the repo, modify the code, and open a PR. Community contributions are encouraged.
- ❌ **You cannot sell the template itself.** The Commons Clause means you may not sell a product or service whose value derives *primarily* from this template (for example, reselling it as a paid starter kit or boilerplate).

In short: build and deploy whatever bots you want *with* this template, just do not sell the template itself. See [LICENSE](LICENSE) for the full terms.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
