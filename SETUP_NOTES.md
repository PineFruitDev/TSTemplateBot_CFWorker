# Setup Notes

## Important: Interaction Handling

✅ **Fully Implemented!**

The template now includes a complete **Interaction Adapter** that allows commands to work seamlessly in Cloudflare Workers.

### Current Status

✅ **Working:**

- Signature verification
- PING/PONG handling
- Full command execution via Discord.js interactions
- Interaction adapter converts API interactions to Discord.js interaction objects
- Commands can use `interaction.reply()`, `interaction.editReply()`, `interaction.deferReply()`, etc.
- Scheduled tasks (cron) infrastructure
- Autocomplete support

### Implementation Details

The template uses **Option 2: Interaction Adapter** approach:

- `WorkersInteractionAdapter` class converts API interactions to Discord.js `ChatInputCommandInteraction`
- Commands work as-is without any modifications needed
- Uses REST API under the hood for all interaction responses
- Maintains full compatibility with Discord.js patterns

### How It Works

See `src/utils/interaction-adapter.ts` for a starting point. You'll need to:

1. Convert `APIInteraction` to `ChatInputCommandInteraction`
2. Create a minimal Client-like object for commands that need it
3. Handle follow-up messages via REST API

## Environment Variables

The `.env` file is blocked by `.gitignore` for security. To create it:

1. Copy `.env.example` to `.env` (if it exists)
2. Or create `.env` manually with required variables
3. Fill in your Discord credentials

## Cloudflare Workers Setup

1. **Install Wrangler:**

   ```bash
   npm install -g wrangler
   ```

2. **Login:**

   ```bash
   wrangler login
   ```

3. **Get Account ID:**
   - Go to Cloudflare Dashboard
   - Copy Account ID from right sidebar

4. **Set Secrets:**

   ```bash
   wrangler secret put DISCORD_TOKEN --env dev
   wrangler secret put DISCORD_CLIENT_ID --env dev
   wrangler secret put DISCORD_PUBLIC_KEY --env dev
   ```

5. **Deploy:**
   ```bash
   npm run deploy:dev
   ```

## Discord Setup

1. **Get Credentials:**
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Create/select application
   - Copy Bot Token, Client ID, and Public Key

2. **Set Interactions Endpoint:**
   - Go to your application → Interactions
   - Set Endpoint URL to your Worker URL
   - Example: `https://your-worker-name.your-subdomain.workers.dev`

3. **Register Commands:**
   ```bash
   npm run register
   ```

## Local Development Setup

**Prerequisites:**

- Node.js 20+ installed
- npm installed

**Start:**

```bash
npm run local
```

**Stop:**
Press `Ctrl+C` in the terminal

## GitHub Actions Setup

1. **Add Secrets to GitHub:**
   - Go to repository → Settings → Secrets and variables → Actions
   - Create environments: `dev` and `prod`
   - Add required secrets to each environment

2. **Required Secrets:**
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `DISCORD_TOKEN`
   - `DISCORD_CLIENT_ID`
   - `DISCORD_PUBLIC_KEY`

3. **Deploy:**
   - Push to `dev` branch → Auto-deploys to dev
   - Push to `prod` branch → Auto-deploys to prod

## Troubleshooting

**Commands not responding:**

- Check Interactions Endpoint URL is set correctly
- Verify signature verification is working
- Check Worker logs: `npm run tail`

**Scheduled tasks not running:**

- Verify cron syntax in `wrangler.toml`
- Check Worker is deployed
- Review logs for errors

**Build errors:**

- Ensure all dependencies are installed: `npm ci`
- Check TypeScript compilation: `npm run build`
- Verify Cloudflare Workers types are installed
