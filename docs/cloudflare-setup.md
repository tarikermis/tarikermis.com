# Cloudflare Workers and domain setup

This repository deploys to the Cloudflare Worker `tarikermis` using Workers Static Assets. It is intentionally **not** a Cloudflare Pages project.

The canonical website is `https://tarikermis.com`. Every other purchased hostname should return a path- and query-preserving `301` to that host.

## Final shape

| Host | Purpose | Expected response |
| --- | --- | --- |
| `tarikermis.com` | Canonical Worker custom domain | `200` |
| `www.tarikermis.com` | Alias | `301` to `.com` |
| `tarikermis.de` and `www` | Alias | `301` to `.com` |
| `tarikermis.global` and `www` | Alias | `301` to `.com` |
| `tarikermis.shop` and `www` | Alias | `301` to `.com` |
| `tarikermis.tarik-079.workers.dev` | Cloudflare fallback hostname | `301` to `.com` |

All redirects preserve the path and query string:

```text
https://tarikermis.de/work/?from=card
→ https://tarikermis.com/work/?from=card
```

## Worker and Git configuration

The Worker is connected directly to `tarikermis/tarikermis.com` through Cloudflare Workers Builds. GitHub Actions performs independent quality checks, while Cloudflare is the only deployer.

Use these build trigger settings:

| Setting | Production | Preview branches |
| --- | --- | --- |
| Branches | `main` | all except `main` |
| Root directory | `/` | `/` |
| Build command | `yarn build` | `yarn build` |
| Deploy command | `yarn wrangler deploy` | `yarn wrangler versions upload` |
| Build caching | enabled | enabled |

The Worker name must match the `name` in `wrangler.jsonc`. The repository pins Node and Yarn, so Workers Builds detects Node `22.23.1` and Yarn `1.22.22` automatically.

The relevant source-controlled configuration is:

```jsonc
{
  "name": "tarikermis",
  "compatibility_date": "2026-07-01",
  "workers_dev": true,
  "assets": {
    "directory": "./dist",
    "html_handling": "auto-trailing-slash",
    "not_found_handling": "404-page"
  },
  "routes": [
    {
      "pattern": "tarikermis.com",
      "custom_domain": true
    }
  ]
}
```

No Worker entry script is required: this is a fully prerendered Astro site. `_headers` and `_redirects` are copied into `dist` and handled natively by Workers Static Assets.

Official references:

- <https://developers.cloudflare.com/workers/ci-cd/builds/>
- <https://developers.cloudflare.com/workers/static-assets/>
- <https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/>

## Local commands

```bash
yarn install --frozen-lockfile
yarn run check
yarn cf:dev
```

A credentialed manual production deployment is available when needed:

```bash
yarn deploy
```

Normal production deployments should come from pushes to `main`, not from a second GitHub Actions deployment workflow.

## Move the domains from IONOS to Cloudflare DNS

Add each domain as a separate Cloudflare zone:

```text
tarikermis.com
tarikermis.de
tarikermis.global
tarikermis.shop
```

Before changing nameservers:

1. Preserve any required MX, SPF, DKIM, DMARC, verification TXT, and CAA records.
2. If DNSSEC is enabled at IONOS, disable it and wait for the old DS record TTL to expire.
3. Enter the exact two Cloudflare nameservers assigned to each domain in IONOS under **Name Server → Use Custom Name Servers**.
4. Wait until each zone reports **Active** in Cloudflare.
5. Re-enable DNSSEC through Cloudflare after delegation is stable.

References:

- <https://www.ionos.com/help/domains/using-your-own-name-servers/using-your-own-name-servers-for-a-domain/>
- <https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/>
- <https://developers.cloudflare.com/dns/dnssec/>

## Canonical Worker custom domain

`wrangler.jsonc` declares `tarikermis.com` as a Worker custom domain. A successful production deployment creates the required Cloudflare DNS association and certificate.

Do not manually point the apex to `workers.dev`. Verify the association under **Worker → Settings → Domains & Routes**.

Reference: <https://developers.cloudflare.com/workers/configuration/routing/custom-domains/>.

## Redirect-only DNS records

Every redirect-only record must be **Proxied** so Cloudflare Redirect Rules receive the request.

### `tarikermis.com` zone

The Worker owns the apex. Add only:

| Type | Name | Content | Proxy |
| --- | --- | --- | --- |
| A | `www` | `192.0.2.1` | Proxied |

### `.de`, `.global`, and `.shop` zones

Add both records in each active zone:

| Type | Name | Content | Proxy |
| --- | --- | --- | --- |
| A | `@` | `192.0.2.1` | Proxied |
| A | `www` | `192.0.2.1` | Proxied |

`192.0.2.1` is a documentation-only placeholder. Proxied requests terminate at Cloudflare and redirect before an origin is contacted.

## Four Single Redirect rules

Create one rule under **Rules → Redirect Rules → Single Redirects** in each zone. Use a Dynamic target, status `301`, and enable **Preserve query string**.

### In `tarikermis.com`

```text
Match:
http.host eq "www.tarikermis.com"

Target:
concat("https://tarikermis.com", http.request.uri.path)
```

### In `tarikermis.de`

```text
Match:
http.host in {"tarikermis.de" "www.tarikermis.de"}

Target:
concat("https://tarikermis.com", http.request.uri.path)
```

Repeat the second rule for `.global` and `.shop` with their respective hostnames.

Reference: <https://developers.cloudflare.com/rules/url-forwarding/single-redirects/settings/>.

## Redirect the production `workers.dev` hostname

Create an account-level Bulk Redirect list named `tarikermis-workers-dev` with this item:

| Setting | Value |
| --- | --- |
| Source URL | `https://tarikermis.tarik-079.workers.dev` |
| Target URL | `https://tarikermis.com` |
| Status | `301` |
| Preserve query string | On |
| Subpath matching | On |
| Preserve path suffix | On |
| Include subdomains | Off |

Then create and enable a Bulk Redirect Rule that references the list. Keeping **Include subdomains** off leaves version preview URLs available.

## Verification

```bash
curl -I 'https://tarikermis.com/'
curl -I 'https://www.tarikermis.com/work/?probe=1'
curl -I 'https://tarikermis.de/work/?probe=1'
curl -I 'https://tarikermis.global/work/?probe=1'
curl -I 'https://tarikermis.shop/work/?probe=1'
curl -I 'https://tarikermis.tarik-079.workers.dev/work/?probe=1'
```

The canonical host should return `200`. Every alias should return one `301` whose `Location` preserves the exact path and query on `https://tarikermis.com`.

After the new domain is stable, redirect `tarik.n3tz.io` to `https://tarikermis.com` with the same path/query-preserving pattern.
