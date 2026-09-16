# Cecil Egbiri — Portfolio

Personal portfolio for Cecil Egbiri, Software Engineer and QA Engineer. Built with Next.js, React, TypeScript, MDX, and Once UI.

## Content

- Six project case studies, including XpressDrop, Job Pilot, and ECO Agent Skills.
- Four technical articles about backend reliability, API testing, AI resume workflows, and coding handoffs.
- Work experience, skills, and contact links.
- Gallery disabled until personal photos are added.

## Run locally

Use Node.js 22 LTS and run commands from the directory containing `package.json`.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npx tsc --noEmit
npm run build
npm start
```

## Edit the portfolio

- Page content: `src/resources/content.tsx`
- Theme and route settings: `src/resources/once-ui.config.ts`
- Projects: `src/app/work/projects/*.mdx`
- Blog posts: `src/app/blog/posts/*.mdx`
- Local covers: `public/images/covers/`
- Cover provenance and generation prompts: `docs/cover-illustrations.md`

## Deploy on Vercel

Import [Cyrus-11/Portfolio](https://github.com/Cyrus-11/Portfolio) as a Next.js project. The Git repository root contains `package.json`, so leave the Vercel Root Directory at its default. Use the standard `npm run build` command and Node.js 22.x.

Metadata, the sitemap, RSS, and sharing links use Vercel's production domain automatically. To use a specific canonical origin, set `NEXT_PUBLIC_SITE_URL` to its full HTTPS URL before building. See `.env.example`.

No backend credentials are needed. Password protection is disabled; `PAGE_ACCESS_PASSWORD` is only needed if protected routes are enabled later.

## Attribution and license

Based on [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) by [Once UI](https://once-ui.com).

The original template is distributed under CC BY-NC 4.0. Retain attribution and refer to [LICENSE](LICENSE) for its terms.
