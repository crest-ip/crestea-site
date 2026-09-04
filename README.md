# CrestEA.se

New public website for Crest, built with Astro.

## Position

**Crest is a commercial activation partner for experts.**  
Core promise: **Från kunnande till samtal.**

The site presents one integrated offer, working name **Commercial Front**:

1. position the expert's commercially relevant knowledge,
2. create an easy-to-try entry offer,
3. build the digital sales surface,
4. create outreach and hand over expressed interest.

Expertkapital and patrikhallen.se/com are used as two complementary examples.

## Development

```sh
npm install
npm run dev
```

Production verification:

```sh
npm run build
npx astro check
npm audit --omit=dev
```

## Current verification

- Astro production build: passing
- Astro diagnostics: 0 errors, 0 warnings, 0 hints
- Runtime dependency audit: 0 known vulnerabilities
- Static output: `dist/`

## Deployment

The site deploys to GitHub Pages from `main` through `.github/workflows/deploy.yml`. The configured custom domain is `crestea.se`.

GitHub Pages: `https://crest-ip.github.io/crestea-site/`  
Custom domain after DNS cutover: `https://crestea.se/`

OpenAI Sites is not used.

## Assets

The current site uses the supplied 225 × 225 single-colour Crest symbol as a temporary web asset. The untouched EPS master is stored one level above the site under `assets/brand/logo/source/`. A standalone SVG should be derived and visually verified from that master before production publication.

## Pending production decisions

- final repository and GitHub remote,
- hosting and deployment workflow,
- final SVG logo derivatives,
- whether the initial CTA remains email-based or gets a booking/qualification flow,
- final privacy and analytics setup.
