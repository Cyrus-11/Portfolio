# Agent Handoff — Cecil Egbiri Portfolio

Handoff notes for the next coding agent. Read this fully before making changes.

## Project overview

- Personal portfolio for **Cecil Egbiri** (Software Engineer / QA Engineer).
- Built on the **Magic Portfolio** template (Once UI + Next.js).
- Stack: **Next.js 16.1.6 (Turbopack)**, React, TypeScript, SCSS, MDX.
- Package: `@once-ui-system/magic-portfolio@2.3.0`.

## CRITICAL: directory layout

The Git repository and Next.js app root are both
`C:\Users\ayomi\OneDrive\Desktop\portfolio\magic-portfolio`. The parent `portfolio/`
directory is the local workspace container, not the Git repository root.

- ✅ Run all npm commands from `portfolio/magic-portfolio`.
- ❌ Running `npm install` / `npm run dev` from `portfolio/` fails (no package.json).

```powershell
cd C:\Users\ayomi\OneDrive\Desktop\portfolio\magic-portfolio
npm install
npm run dev      # http://localhost:3000
```

## Workspace root configuration

Next.js warns about two `package-lock.json` files and picks the wrong workspace root:

- `portfolio/package-lock.json` — STRAY (from an earlier failed install), safe to delete.
- `portfolio/magic-portfolio/package-lock.json` — the correct one, keep it.

Fixed by setting `turbopack.root` to the application directory in `next.config.mjs`.
The stray parent lockfile remains outside the Git repository and is not deployed.

## What has been done

All content personalization lives in **`src/resources/content.tsx`**, driven by the
user's resume (`Egbiri_Oluwayoyinsola_Cecil_ATS_Resume_Draft (1).md` in project root).

- `person` — Cecil Egbiri, Software Engineer, `Africa/Lagos`, English, email set.
- `social` — GitHub `Cyrus-11`, LinkedIn `cecil01`, Email. (Instagram/Threads removed.)
- `home` — new headline + subline; featured badge points to `/work/xpressdrop`.
- `about.intro` — senior bio (engineering + QA, NCS 2025 3rd place).
- `about.work` — 5 real roles: XpressDrop, PropTech (NDA), FinTech (NDA), Bazara Tech,
  Prunedge, each with achievements. All `images: []`.
- `about.studies` — Crescent University (BSc, 2nd Class Upper) + NCS award.
- `about.technical` — 5 skill groups with icon tags (Backend, Databases, QA, Frontend/AI,
  Delivery/DevOps).
- `newsletter.display = false`, `about.calendar.display = false`.

**`src/resources/icons.ts`** — added tech icons used by skill tags:
typescript, nodejs, express, nestjs, react, python, postgresql, mysql, redis, docker,
jest, postman, openai, swagger, cypress, sequelize, githubactions, vercel.
(Icon keys map to `react-icons/si`. Any new tag `icon` MUST have a key here or it breaks.)

## Verified state

- `npx tsc --noEmit` → passes (exit 0).
- `npm run dev` → active routes and all project/blog pages return **200**.
- `/gallery` is intentionally disabled and renders not-found.
- `npm run build` → production compilation, TypeScript, and static generation pass.
- No compile or runtime errors.

## Current state and remaining work

1. **Avatar** — replace `public/images/avatar.jpg` with the user's real photo.
2. **Work projects (done)** — Replaced the template MDX files with Job Pilot, ECO Agent
   Skills, StatusFlow AI, Fintech Banking App, Allocation System, and XpressDrop. Content
   comes from the resume; Job Pilot and StatusFlow AI are explicitly in development.
   Every project has a local cover image in `public/images/covers/`. XpressDrop uses the
   user-supplied brand pattern; Job Pilot uses the supplied dashboard screenshot.
   Other covers are generated illustrations, with prompts in `docs/cover-illustrations.md`.
   Cards and detail pages preserve original image proportions. XpressDrop links to
   `https://usexpressdrop.com`; ECO Agent Skills links to
   `https://github.com/Cyrus-11/ECO-agent-skill`; Job Pilot links to
   `https://github.com/Cyrus-11/Job_Pilot`. These show a View project action on cards and
   detail pages. The homepage XpressDrop badge opens `/work/xpressdrop`.
3. **Blog (done)** — Replaced template posts with
   `src/app/blog/posts/building-reliable-software-from-api-to-release.mdx`, an engineering
   and QA article requested by the user. Added three more articles about API tests,
   reviewing AI resume output, and coding-session handoffs. All four posts have cover
   images, including thumbnails on the homepage and earlier-post listings.
   All four articles have been expanded to roughly 1,300-1,500 words with technical
   walkthroughs, TypeScript/SQL examples, failure scenarios, and primary-source links.
   Illustrative designs are explicitly distinguished from implemented project features.
   Empty earlier/recent-post sections are hidden.
4. **Gallery (hidden)** — User requested hiding it for now. `/gallery` is disabled in
   the route config and calls `notFound()` on the server. Placeholder image files and
   image configuration remain available to replace before enabling the route again.
5. **baseURL (done)** — Reads `NEXT_PUBLIC_SITE_URL`, populated at build time from an
   explicit environment setting or Vercel's production domain. Local fallback is
   `http://localhost:3000`. See `.env.example` and `next.config.mjs`.
6. **protectedRoutes (done)** — Removed the obsolete demo project protection.
7. **Deployment** — Target repository: `https://github.com/Cyrus-11/Portfolio`.
   Vercel imports should use the repository root, where `package.json` lives.
   Local resume drafts and environment files are excluded from Git.

## Key files

- `src/resources/content.tsx` — all page text/content (person, social, home, about, etc.).
- `src/resources/once-ui.config.ts` — routes on/off, baseURL, theme/effects, protectedRoutes.
- `src/resources/icons.ts` — icon registry; add here before referencing a new icon name.
- `src/types/content.types.ts` — TypeScript shapes for all content sections.
- `src/app/work/projects/*.mdx` — project pages. `src/app/blog/posts/*.mdx` — blog posts.
- `public/images/` — avatar, gallery, project images.

## Conventions / guardrails

- Edit content in `content.tsx`; do not hardcode text in components.
- To hide a section: set its `display: false` (about sub-sections, newsletter) or toggle the
  route in `once-ui.config.ts` `routes` (`/blog`, `/gallery`, etc.).
- Every skill/project tag `icon` string must exist as a key in `icons.ts`.
- After content edits, run `npx tsc --noEmit` and `npm run dev`, then curl the routes.
- Keep `images: []` for work/skills unless real images exist in `public/images/`.
