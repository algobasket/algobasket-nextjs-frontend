# Cloudflare Deployment

## Required Settings

In your Cloudflare project **Settings → Build**, configure:

| Setting | Value |
|---------|-------|
| **Build command** | `npm run build` |
| **Deploy command** | `node scripts/ensure-cloudflare-config.js && npx @opennextjs/cloudflare build --dangerouslyUseUnsupportedNextVersion && npx @opennextjs/cloudflare deploy` |
| **Root directory** | `algobasket-nextjs-frontend` (if this is a monorepo) |

> ⚠️ **Important:** Use the full deploy command above (not `npx wrangler deploy`). The `--dangerouslyUseUnsupportedNextVersion` flag is required for Next.js 14 with OpenNext.
>
> The `ensure-cloudflare-config.js` script creates `open-next.config.ts` and `wrangler.jsonc` if missing (e.g. not yet committed). **Commit** `scripts/ensure-cloudflare-config.js` so it runs during deploy.

## Environment Variables

Add in **Build variables and secrets**:

- `API_BASE_URL` – Your production Fastify API URL (e.g. `https://api.yoursite.com`)

## Root Directory

If this is a monorepo, set **Root directory** to `algobasket-nextjs-frontend`.
