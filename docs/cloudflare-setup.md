# Cloudflare Pages and domain setup

This runbook makes `https://tarikermis.com` the only canonical website and sends every other purchased domain to it with a permanent, path-preserving redirect.

## Final shape

| Host | Purpose | Expected response |
| --- | --- | --- |
| `tarikermis.com` | Canonical Cloudflare Pages site | `200` |
| `www.tarikermis.com` | Alias | `301` to `.com` |
| `tarikermis.de` and `www` | Alias | `301` to `.com` |
| `tarikermis.global` and `www` | Alias | `301` to `.com` |
| `tarikermis.shop` and `www` | Alias | `301` to `.com` |
| `tarikermis.pages.dev` | Cloudflare fallback hostname | `301` to `.com` |

All redirects preserve both the path and query string. For example:

```text
https://tarikermis.de/work/?from=card
→ https://tarikermis.com/work/?from=card
```

## 1. Publish the GitHub repository

Create the public repository `tarikermis/tarikermis.com`, use `main` as the default branch, and push this source tree.

Do not add Cloudflare credentials to the repository. They belong in GitHub Actions secrets only.

## 2. Add all four domains to Cloudflare

In the Cloudflare dashboard, add these four sites separately:

```text
tarikermis.com
tarikermis.de
tarikermis.global
tarikermis.shop
```

Cloudflare assigns two authoritative nameservers to each zone. Record the pair shown for each domain; the pairs can differ.

Before changing nameservers:

1. Copy any DNS records that must survive, especially MX, SPF, DKIM, DMARC, verification TXT, and CAA records.
2. If DNSSEC is enabled at IONOS, disable it and wait for the old DS record TTL to expire before changing nameservers. Confirm with `dig DS tarikermis.com` and repeat for the other TLDs.

Cloudflare's current full-setup and DNSSEC guidance explains why this ordering matters:

- <https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/>
- <https://developers.cloudflare.com/dns/dnssec/>

## 3. Point IONOS at Cloudflare

Repeat for each domain in IONOS:

1. Open **Domains & SSL**.
2. Open the gear/action menu beside the domain and choose **Name Server**.
3. Choose **Use Custom Name Servers**.
4. Enter the exact two nameservers Cloudflare assigned to that domain.
5. Save.

IONOS notes that global propagation can take up to 48 hours: <https://www.ionos.com/help/domains/using-your-own-name-servers/using-your-own-name-servers-for-a-domain/>.

Wait until all four zones show **Active** in Cloudflare. Then re-enable DNSSEC in Cloudflare and publish the new DS information through IONOS if requested by the dashboard.

## 4. Create the Pages project from Git

This order is important: create the project with **Workers & Pages → Create application → Pages → Connect to Git** before running a Wrangler deployment. A Direct Upload project cannot later be converted to Git integration.

Connect `tarikermis/tarikermis.com` with these settings:

| Setting | Value |
| --- | --- |
| Project name | `tarikermis` |
| Production branch | `main` |
| Framework preset | Astro |
| Build command | `yarn build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node version | `22.23.1` (read from `.nvmrc`) |
| Environment variable | `YARN_VERSION=1.22.22` |

Reference: <https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/>.

After the first successful connection, turn off Cloudflare's automatic production-branch builds in **Settings → Builds & deployments → Branch control**. GitHub Actions remains the single production deployer and uses Wrangler, while the project stays linked to its source repository. Preview builds can remain enabled if desired.

## 5. Add GitHub Actions secrets

Create a scoped Cloudflare API token with **Account → Cloudflare Pages → Edit** for the account that owns the Pages project.

In GitHub, open **Settings → Secrets and variables → Actions** and add:

| Secret | Value |
| --- | --- |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |
| `CLOUDFLARE_API_TOKEN` | Scoped Pages API token |

Never use or publish the Cloudflare Global API Key. The production workflow in `.github/workflows/deploy.yml` builds the site and runs:

```bash
wrangler pages deploy dist \
  --project-name=tarikermis \
  --branch=main \
  --commit-hash="$GITHUB_SHA" \
  --commit-dirty=false
```

Until both secrets exist, the deployment workflow builds normally and then exits successfully with a setup notice instead of producing a failed release. After adding the secrets, run **Actions → Deploy to Cloudflare Pages → Run workflow** once; later pushes to `main` deploy automatically.

## 6. Attach only the canonical domain to Pages

In **Workers & Pages → tarikermis → Custom domains**, add:

```text
tarikermis.com
```

Let Pages create and validate the DNS association. Do not manually create only a CNAME in place of this step; Cloudflare requires the custom-domain association as well.

Reference: <https://developers.cloudflare.com/pages/configuration/custom-domains/>.

Do not attach `.de`, `.global`, `.shop`, or `www` as Pages custom domains. They exist only at the Cloudflare edge to redirect.

## 7. Create the redirect DNS records

All records below must be **Proxied** (orange cloud), because Cloudflare Redirect Rules run only on proxied traffic.

### `tarikermis.com` zone

Pages manages the apex record after the custom-domain step. Add only:

| Type | Name | Content | Proxy |
| --- | --- | --- | --- |
| A | `www` | `192.0.2.1` | Proxied |

### `.de`, `.global`, and `.shop` zones

Add both records in each zone:

| Type | Name | Content | Proxy |
| --- | --- | --- | --- |
| A | `@` | `192.0.2.1` | Proxied |
| A | `www` | `192.0.2.1` | Proxied |

`192.0.2.1` is a documentation-only placeholder. The proxied request terminates at Cloudflare and the redirect runs before an origin is needed.

## 8. Create four Single Redirect rules

Open **Rules → Redirect Rules → Single Redirects** in each zone. Use **Dynamic** target URLs, status `301`, and enable **Preserve query string**.

### In `tarikermis.com`

Match expression:

```text
http.host eq "www.tarikermis.com"
```

Target expression:

```text
concat("https://tarikermis.com", http.request.uri.path)
```

### In `tarikermis.de`

Match expression:

```text
http.host in {"tarikermis.de" "www.tarikermis.de"}
```

Use the same target expression. Repeat this rule in the `.global` and `.shop` zones with their respective two hostnames.

Cloudflare's redirect settings reference: <https://developers.cloudflare.com/rules/url-forwarding/single-redirects/settings/>.

The repository's `_redirects` file intentionally contains only same-site shortcut paths. Pages `_redirects` is not the right layer for canonical cross-domain redirects.

## 9. Redirect the `pages.dev` hostname

Open the account-level **Bulk Redirects** area and create a list named `tarikermis-pages-dev`. Add this item to the list:

| Setting | Value |
| --- | --- |
| Source URL | `https://tarikermis.pages.dev` |
| Target URL | `https://tarikermis.com` |
| Status | `301` |
| Preserve query string | On |
| Subpath matching | On |
| Preserve path suffix | On |
| Include subdomains | Off |

Then create a **Bulk Redirect Rule** named `tarikermis-pages-dev-to-com`, select the `tarikermis-pages-dev` list, and enable the rule. The list alone does not process traffic.

Keeping **Include subdomains** off redirects the production fallback hostname without interfering with branch preview deployments.

Reference: <https://developers.cloudflare.com/pages/how-to/redirect-to-custom-domain/>.

## 10. Verify before enabling stricter transport settings

Wait until Universal SSL shows active for every zone, then run:

```bash
dig +short NS tarikermis.com
curl -I 'https://tarikermis.com/'
curl -I 'https://www.tarikermis.com/work/?probe=1'
curl -I 'https://tarikermis.de/work/?probe=1'
curl -I 'https://tarikermis.global/work/?probe=1'
curl -I 'https://tarikermis.shop/work/?probe=1'
curl -I 'https://tarikermis.pages.dev/work/?probe=1'
```

The canonical host should return `200`. Every alias should return one `301` whose `Location` is the same path and query on `https://tarikermis.com`.

Enable **Always Use HTTPS** for all four zones. Add HSTS preload only after HTTPS and all redirects have been stable for a while; the repository currently sends a conservative HSTS header without `includeSubDomains` or `preload`.

## Later: retire the old portfolio hostname

After the new domain is live and verified, redirect `tarik.n3tz.io` to `https://tarikermis.com` with the same path/query-preserving pattern. Update any n3tz author links and vCards only after that redirect is in place.
