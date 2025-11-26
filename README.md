# Discord Bot Template - Cloudflare Workers

A clean, modular Discord bot template for **Cloudflare Workers** with TypeScript, featuring a command class pattern, scheduled tasks (cron triggers), and single source of truth architecture.

## Features

- **Cloudflare Workers**: Deploy to Cloudflare's edge network for free
- **Scheduled Tasks**: Built-in cron trigger support for scheduled messages
- **Single Source of Truth**: Add commands in one place, automatically available everywhere
- **TypeScript**: Full type safety and modern JavaScript features
- **Modular Commands**: Self-contained command classes with built-in validation
- **Environment Validation**: Comprehensive startup checks with helpful error messages
- **Auto-Generated Help**: Commands self-document with metadata
- **Contextual Logging**: Detailed logging with class and function context
- **Production Ready**: Error handling, validation, and clean architecture
- **CI/CD**: Automatic deployment via GitHub Actions

## Quick Start

### 1. Setup

```bash
git clone <your-repo>
cd TSTemplateBot_CFWorker
npm install
```

### 2. Get Discord Credentials

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create/select your application
3. Copy **Bot Token** → You'll add this as a GitHub Secret
4. Copy **Application ID** → You'll add this as a GitHub Secret
5. Copy **Public Key** → You'll add this as a GitHub Secret

### 3. Setup GitHub Secrets

Add the following secrets to your GitHub repository:

**Required Secrets:**

- `DISCORD_TOKEN` - Your Discord bot token
- `DISCORD_CLIENT_ID` - Your Discord application ID
- `DISCORD_PUBLIC_KEY` - Your Discord public key
- `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token (with Workers edit permissions)
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

**To add secrets:**

1. Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add each secret with the name and value above

### 4. Deploy to Cloudflare Workers

**Deployment is automatic via GitHub Actions:**

- **Push to `dev` branch** → Deploys to dev environment
- **Push to `prod` branch** → Deploys to prod environment

The workflow will:

1. Build the TypeScript code
2. Set Cloudflare secrets (from GitHub Secrets)
3. Deploy to Cloudflare Workers
4. Register Discord commands automatically

**Manual Deployment (if needed):**

```bash
# Development
npm run deploy:dev

# Production
npm run deploy:prod
```

**Note:** For manual deployment, you'll need to set secrets manually:

```bash
wrangler secret put DISCORD_TOKEN --env dev
wrangler secret put DISCORD_CLIENT_ID --env dev
wrangler secret put DISCORD_PUBLIC_KEY --env dev
# Repeat for --env prod
```

### 5. Configure Discord Interactions Endpoint

**After deployment, configure Discord to send interactions to your Worker:**

1. Get your Worker URL from Cloudflare dashboard (e.g., `https://your-worker-name.your-subdomain.workers.dev`)
2. Go to [Discord Developer Portal](https://discord.com/developers/applications) → Your Application → **General Information**
3. Scroll to **Interactions Endpoint URL**
4. Enter your Worker URL: `https://your-worker-name.your-subdomain.workers.dev`
5. Click **Save Changes**
6. Discord will send a PING request to verify the endpoint - your Worker will respond automatically

**Important:**

- Commands are automatically registered during deployment via GitHub Actions
- Commands may take up to 1 hour to appear in Discord after registration
- You need to configure the Interactions Endpoint URL separately for dev and prod environments in Discord Developer Portal

## Project Structure

```
src/
├── worker.ts                  # Cloudflare Worker entry point
├── core/
│   ├── Command.ts             # Abstract command base (includes helpInfo)
│   └── CommandManager.ts      # Command management
├── commands/
│   ├── index.ts               # ← Command registry (single source of truth)
│   ├── ping/
│   │   └── index.ts           # Ping command
│   ├── help/
│   │   └── index.ts           # Help command (auto-discovers all commands)
│   └── info/
│       ├── index.ts           # Info command with subcommands
│       ├── user.ts            # User subcommand
│       └── server.ts          # Server subcommand
├── services/
│   ├── Logger.ts              # Contextual logging
│   ├── DiscordApi.ts          # API helper
│   └── Environment.ts          # Config validation
├── utils/
│   ├── verification.ts        # Discord signature verification
│   └── interaction-response.ts # Response builders
└── register.ts                # Command registration
```

## Adding Commands

Commands are organized in folders. Each command has its own folder with an `index.ts` entry point.

### Simple Command (No Subcommands)

**1. Create command folder and file:**

```typescript
// src/commands/mycommand/index.ts
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Command, CommandHelpInfo } from '../../core/Command.js';

export class MyCommand extends Command {
  public readonly data = new SlashCommandBuilder()
    .setName('mycommand')
    .setDescription('My awesome command');

  // Help info is required - /help command uses this automatically
  public readonly helpInfo: CommandHelpInfo = {
    name: 'mycommand',
    description: 'Does something awesome',
    usage: '/mycommand',
    examples: ['/mycommand'],
    category: 'General',
  };

  public async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.reply('Hello World!');
  }
}
```

**2. Register in command registry:**

```typescript
// src/commands/index.ts
import { MyCommand } from './mycommand/index.js';

export const ALL_COMMANDS: Command[] = [
  // ... existing commands
  new MyCommand(), // ← Add here
];
```

### Command with Subcommands

**1. Create command folder structure:**

```
commands/
└── upload/
    ├── index.ts      # Main command (imports subcommands)
    ├── image.ts      # Image subcommand
    ├── video.ts      # Video subcommand
    └── file.ts       # File subcommand
```

**2. Create subcommand files:**

```typescript
// src/commands/upload/image.ts
import { ChatInputCommandInteraction } from 'discord.js';

export class UploadImageSubcommand {
  public async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    // Your subcommand logic here
    await interaction.reply('Image uploaded!');
  }
}
```

**3. Create main command file:**

```typescript
// src/commands/mycommand/index.ts
import {
  SlashCommandBuilder,
  CommandHelpInfo,
  ChatInputCommandInteraction,
} from '../../core/Command.js';
import { Command } from '../../core/Command.js';
import { MySubcommand } from './subcommand.js';

export class MyCommand extends Command {
  private subcommand = new MySubcommand();

  public readonly data = new SlashCommandBuilder()
    .setName('mycommand')
    .setDescription('My command with subcommands')
    .addSubcommand((subcommand) => subcommand.setName('subcommand').setDescription('A subcommand'));

  // Help info includes all subcommands
  public readonly helpInfo: CommandHelpInfo = {
    name: 'mycommand',
    description: 'My command with subcommands',
    usage: '/mycommand <subcommand>',
    examples: ['/mycommand subcommand'],
    category: 'Utility',
  };

  public async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    const subcommand = interaction.options.getSubcommand();

    switch (subcommand) {
      case 'subcommand':
        await this.subcommand.execute(interaction);
        break;
    }
  }
}
```

**That's it!** Your command is automatically:

- ✅ Registered with Discord
- ✅ Available in the bot
- ✅ **Automatically appears in `/help` command** (via `helpInfo`)
- ✅ Validated and logged

## Scheduled Tasks (Cron Triggers)

The template includes support for scheduled tasks via Cloudflare Workers cron triggers.

**Configure in `wrangler.toml`:**

```toml
[triggers]
crons = ["0 * * * *"]  # Every hour
```

**Implement in `src/worker.ts`:**

```typescript
async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
  // Your scheduled task logic here
  // Examples: Post messages, update data, generate content
}
```

**Cron Examples:**

- `"0 * * * *"` - Every hour
- `"0 */6 * * *"` - Every 6 hours
- `"0 0 * * *"` - Daily at midnight
- `"0 0 * * 0"` - Weekly on Sunday

## Built-in Commands

- `/ping` - Basic ping/pong with latency
- `/help [command]` - Auto-generated help system (discovers all commands automatically)
- `/info <user|server>` - Get information about users or servers (demonstrates subcommands)

## Scripts

| Command                | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| `npm run build`        | Compile TypeScript                                             |
| `npm run deploy`       | Deploy to default environment                                  |
| `npm run deploy:dev`   | Deploy to dev environment                                      |
| `npm run deploy:prod`  | Deploy to prod environment                                     |
| `npm run register`     | Register commands with Discord                                 |
| `npm run lint`         | Check code for linting errors                                  |
| `npm run lint:fix`     | Fix auto-fixable linting errors                                |
| `npm run format`       | Format code with Prettier (writes changes)                     |
| `npm run format:check` | Check if code is formatted (read-only, fails if not formatted) |
| `npm run type-check`   | Check TypeScript types without building                        |
| `npm run qa`           | Run all quality checks (lint, format check, type check)        |
| `npm run qa:fix`       | Auto-fix linting and formatting issues                         |
| `npm run tail:dev`     | Stream dev environment logs                                    |
| `npm run tail:prod`    | Stream prod environment logs                                   |

## Environment Variables

| Variable             | Required | Description                                     |
| -------------------- | -------- | ----------------------------------------------- |
| `DISCORD_TOKEN`      | ✅       | Bot token from Discord Developer Portal         |
| `DISCORD_CLIENT_ID`  | ✅       | Bot client ID from Discord Developer Portal     |
| `DISCORD_PUBLIC_KEY` | ✅       | Public key for signature verification           |
| `DEVELOPER_IDS`      | ❌       | Comma-separated user IDs for developer commands |
| `NODE_ENV`           | ❌       | Environment mode (defaults to `production`)     |

## GitHub Actions CI/CD

The template includes automatic deployment via GitHub Actions.

**Setup:**

1. Push to `dev` branch → Deploys to dev environment
2. Push to `prod` branch → Deploys to prod environment

**Required GitHub Secrets:**

**All Environments (dev and prod use same Cloudflare account):**

- `CLOUDFLARE_API_TOKEN` - Cloudflare API token with **Workers Edit** permissions
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID
- `DISCORD_TOKEN` - Discord bot token (can be same for both or different)
- `DISCORD_CLIENT_ID` - Discord application ID (same for both environments)
- `DISCORD_PUBLIC_KEY` - Discord public key (same for both environments)

**Important:**

- The Cloudflare API token must have **Workers Edit** permissions
- You can find your Account ID in Cloudflare dashboard → Right sidebar
- To create an API token: Cloudflare Dashboard → My Profile → API Tokens → Create Token → Use "Edit Cloudflare Workers" template

## Limitations

**Cloudflare Workers Free Tier:**

- ✅ 100,000 requests/day
- ✅ Cron triggers included
- ⚠️ 10ms CPU time per HTTP request (15 min for scheduled tasks)
- ⚠️ 128MB memory limit
- ⚠️ No persistent WebSocket connections (HTTP-only interactions)

**Note:** This template uses `nodejs_compat` compatibility flag in `wrangler.toml` to enable Node.js APIs required by discord.js. This is necessary for the bot to function properly.

**What Works:**

- ✅ Slash commands
- ✅ Button/Modal interactions
- ✅ Autocomplete
- ✅ Scheduled messages (cron)
- ✅ REST API calls

**What Doesn't Work:**

- ❌ Real-time Gateway events (message reactions, member joins, etc.)
- ❌ Long-running operations (>10ms CPU time for HTTP requests)

## Troubleshooting

**Deployment fails with error code 10013:**

This is a generic Cloudflare API error. Common causes:

1. **API Token Permissions**: Ensure your `CLOUDFLARE_API_TOKEN` has **Workers Edit** permissions
   - Go to Cloudflare Dashboard → My Profile → API Tokens
   - Create/edit token → Use "Edit Cloudflare Workers" template
   - Ensure it has permissions for: Workers Scripts (Edit), Account Settings (Read)

2. **Account ID Mismatch**: Verify `CLOUDFLARE_ACCOUNT_ID` is correct
   - Find it in Cloudflare Dashboard → Right sidebar (under your account name)
   - Should be a string of numbers/letters

3. **Worker Name Conflict**: The worker name might already exist with different settings
   - Check Cloudflare Dashboard → Workers & Pages
   - Delete existing worker if needed, or change name in `wrangler.toml`

4. **Rate Limiting**: Too many deployments in short time
   - Wait a few minutes and try again

**Commands not working:**

- Ensure Interactions Endpoint URL is set in Discord Developer Portal for the correct environment
- Check Worker logs: `npm run tail:dev` or `npm run tail:prod` (see [Viewing Logs](#viewing-logs) below)
- Verify signature verification is working
- Ensure commands are registered (they're auto-registered on deployment)

**Scheduled tasks not running:**

- Check cron syntax in `wrangler.toml`
- Verify Worker is deployed
- Check logs for errors (see [Viewing Logs](#viewing-logs) below)

**Rate limiting:**

- Cloudflare Workers use shared IPs
- Consider upgrading to paid tier for dedicated IPs
- Implement retry logic with exponential backoff

## License

MIT License - See [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
