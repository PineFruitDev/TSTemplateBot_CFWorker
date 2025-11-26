# Environment Configuration Guide

This template supports three environments: **Local**, **Dev**, and **Prod**.

## Environment Overview

| Environment | Trigger               | Secrets Location          | Deployment                |
| ----------- | --------------------- | ------------------------- | ------------------------- |
| **Local**   | `npm run local`       | `.env.local` file         | Wrangler (Miniflare)      |
| **Dev**     | Push to `dev` branch  | GitHub Secrets (dev env)  | Cloudflare Workers (dev)  |
| **Prod**    | Push to `prod` branch | GitHub Secrets (prod env) | Cloudflare Workers (prod) |

---

## Local Environment

**Setup:**

1. Copy `example.local.md` to `.env.local`
2. Fill in your Discord credentials
3. Run: `npm run local`

**Configuration:**

- Uses `.env.local` file (not committed to git)
- Runs with Wrangler (Miniflare emulator)
- Hot-reload support
- Perfect for testing before deploying

**Required Variables:**

```env
DISCORD_TOKEN=your_bot_token
DISCORD_CLIENT_ID=your_client_id
DISCORD_PUBLIC_KEY=your_public_key
```

---

## Dev Environment

**Setup:**

1. Go to GitHub → Repository → Settings → Secrets and variables → Actions
2. Create environment: `dev`
3. Add secrets to `dev` environment:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `DISCORD_TOKEN`
   - `DISCORD_CLIENT_ID`
   - `DISCORD_PUBLIC_KEY`
4. Push to `dev` branch → Auto-deploys

**Configuration:**

- Secrets stored in GitHub Secrets (dev environment)
- Auto-deployed via GitHub Actions
- Deploys to Cloudflare Workers `dev` environment
- Worker name: `discord-bot-template-dev`

---

## Prod Environment

**Setup:**

1. Go to GitHub → Repository → Settings → Secrets and variables → Actions
2. Create environment: `prod`
3. Add secrets to `prod` environment:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `DISCORD_TOKEN`
   - `DISCORD_CLIENT_ID`
   - `DISCORD_PUBLIC_KEY`
4. Push to `prod` branch → Auto-deploys

**Configuration:**

- Secrets stored in GitHub Secrets (prod environment)
- Auto-deployed via GitHub Actions
- Deploys to Cloudflare Workers `prod` environment
- Worker name: `discord-bot-template-prod`

---

## Secrets Management

### Important: Cloudflare Workers Secrets

**Secrets MUST be stored in Cloudflare Workers** for runtime access. However:

✅ **You can keep values in GitHub Secrets** - The GitHub Actions workflow automatically sets them in Cloudflare during deployment.

**How it works:**

1. Store secrets in GitHub Secrets (per environment)
2. GitHub Actions workflow reads from GitHub Secrets
3. Workflow sets secrets in Cloudflare Workers using `wrangler secret put`
4. Worker accesses secrets at runtime from Cloudflare

**Manual Secret Setup (if needed):**

```bash
# Dev environment
wrangler secret put DISCORD_TOKEN --env dev
wrangler secret put DISCORD_CLIENT_ID --env dev
wrangler secret put DISCORD_PUBLIC_KEY --env dev

# Prod environment
wrangler secret put DISCORD_TOKEN --env prod
wrangler secret put DISCORD_CLIENT_ID --env prod
wrangler secret put DISCORD_PUBLIC_KEY --env prod
```

---

## Required GitHub Secrets

For each environment (`dev` and `prod`), add these secrets:

| Secret                  | Description            | Where to Get                                          |
| ----------------------- | ---------------------- | ----------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  | Cloudflare API token   | Cloudflare Dashboard → My Profile → API Tokens        |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID  | Cloudflare Dashboard → Right sidebar                  |
| `DISCORD_TOKEN`         | Discord bot token      | Discord Developer Portal → Your Application → Bot     |
| `DISCORD_CLIENT_ID`     | Discord application ID | Discord Developer Portal → Your Application → General |
| `DISCORD_PUBLIC_KEY`    | Discord public key     | Discord Developer Portal → Your Application → General |

---

## Workflow

### Local Development

```bash
# 1. Setup .env.local
cp example.local.md .env.local
# Edit .env.local with your credentials

# 2. Start local development
npm run local

# 3. Register commands (if needed)
npm run register
```

### Dev Deployment

```bash
# 1. Make changes
git add .
git commit -m "Your changes"

# 2. Push to dev branch
git push origin dev

# 3. GitHub Actions automatically:
#    - Sets secrets in Cloudflare
#    - Deploys to dev environment
#    - Registers commands
```

### Prod Deployment

```bash
# 1. Make changes
git add .
git commit -m "Your changes"

# 2. Push to prod branch
git push origin prod

# 3. GitHub Actions automatically:
#    - Sets secrets in Cloudflare
#    - Deploys to prod environment
#    - Registers commands
```

---

## Troubleshooting

**Local environment not starting:**

- Ensure `.env.local` exists (copy from `example.local.md`)
- Verify all required variables are set
- Check Wrangler is installed: `npm install`
- Ensure port 8787 is available

**Dev/Prod deployment failing:**

- Check GitHub Secrets are set correctly
- Verify Cloudflare API token has correct permissions
- Check GitHub Actions logs for errors

**Secrets not working:**

- Secrets must be set in Cloudflare Workers (not just GitHub)
- GitHub Actions workflow sets them automatically
- Can also set manually using `wrangler secret put`

---

## Best Practices

1. **Never commit secrets** - Use `.env` files locally, GitHub Secrets for CI/CD
2. **Use different tokens** - Use different Discord bots for dev/prod
3. **Test locally first** - Always test changes locally before deploying
4. **Monitor deployments** - Check GitHub Actions logs after pushing
5. **Keep secrets updated** - Update GitHub Secrets if you rotate tokens
