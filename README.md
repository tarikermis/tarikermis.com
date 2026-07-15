# tarikermis.com

[![CI](https://github.com/tarikermis/tarikermis.com/actions/workflows/ci.yml/badge.svg)](https://github.com/tarikermis/tarikermis.com/actions/workflows/ci.yml)

The personal site and selected work of [Tarik Ermis](https://tarikermis.com)—software architect, AI engineer, and founder of [n3tz](https://n3tz.ai).

![Social preview for tarikermis.com](public/og-image.png)

## What is here

- A warm, bilingual portfolio in English and German
- Selected AI, product, commerce, and platform work
- Downloadable vCard and a locally generated contact QR code
- Self-hosted fonts, no analytics, no cookies, and no third-party runtime requests
- Canonical metadata, structured data, sitemap, `robots.txt`, `llms.txt`, and social cards
- Cloudflare security headers and path redirects
- Automated checks plus native Cloudflare Workers Builds deployment from Git

The site is original work built from scratch with Astro. It does not include the code or template history of the previous portfolio.

## Local development

Use Node 22 and Yarn Classic.

```bash
yarn install --frozen-lockfile
yarn dev
```

Build and validate the static output:

```bash
yarn build
yarn run check
```

Preview it through the Cloudflare Workers runtime:

```bash
yarn cf:dev
```

## Editing content

Most copy, project entries, links, and profile details live in [`src/data/content.ts`](src/data/content.ts). Shared visual styles live in [`src/styles/global.css`](src/styles/global.css).

The generated site contains these public routes:

```text
/                 English home
/de/              German home
/legal/           English legal notice and privacy
/de/impressum/    German legal notice and privacy
/contact.vcf      Downloadable contact card
```

## Deployment

Production is a Cloudflare Worker named `tarikermis` with Astro's static output deployed as Workers Static Assets. Cloudflare Workers Builds watches `main`, runs `yarn build`, and deploys with Wrangler. Non-production branches create preview versions without promoting them.

The exact setup for Workers Builds, IONOS nameservers, the canonical `.com`, and the three redirect domains is in [`docs/cloudflare-setup.md`](docs/cloudflare-setup.md).

## License

The source code is available under the [MIT License](LICENSE). Tarik's portrait, personal information, writing, and brand identity are excluded; see the license notice for details. The bundled Poppins font files retain their [SIL Open Font License](public/assets/fonts/OFL.txt).
