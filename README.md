# CS Revision: help, privacy and terms

Public website for the CS Revision iOS and iPadOS app: a landing page,
support, privacy policy and terms of use. It is a static Next.js export
deployed to GitHub Pages.

Live site: `https://grigor-dochev.github.io/ib-cs-revision-help/`

## Routes

| Route | Page | Used by |
|---|---|---|
| `/` | Landing page with app summary and App Store link | App Store marketing URL |
| `/support/` | Troubleshooting, FAQ and contact | App `SUPPORT_URL`, App Store support URL |
| `/privacy/` | Privacy policy | App `PRIVACY_POLICY_URL`, App Store privacy policy URL |
| `/terms/` | Terms of use | App `TERMS_OF_USE_URL`, App Store description |

The app's links are configured in `Configuration/Base.xcconfig` in the app
repository. Keep these paths stable.

## Renaming the app or changing contact details

Everything that names the app or the developer comes from
[`site.config.ts`](./site.config.ts): the app name, developer name, support
email, App Store link, feature names, content figures and the legal effective
and "last updated" dates. Change a value there and rebuild; no page needs
editing. The footer's non-affiliation disclaimer is generated from `appName`.

When the privacy policy or terms change in substance, update
`legal.effectiveDate`, `legal.lastUpdated` and `legal.isoDate`.

## Development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run build:pages  # static export to out/ with the /ib-cs-revision-help base path
```

To preview the Pages build locally under its base path:

```bash
mkdir -p /tmp/pages && ln -sfn "$PWD/out" /tmp/pages/ib-cs-revision-help
python3 -m http.server 4319 --directory /tmp/pages
# open http://127.0.0.1:4319/ib-cs-revision-help/
```

The site loads no external scripts, fonts, analytics or cookies. Keep it that
way: the privacy policy says so.

## Deployment

Pushes to `main` run `.github/workflows/deploy-pages.yml`, which builds with
`npm run build:pages` and publishes `out/` to GitHub Pages. Each deployment
replaces the whole site, so removed pages stop being served.
