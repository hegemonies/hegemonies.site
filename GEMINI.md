# Gemini Context: Daniil Dyachenko's (hegemonies) Site

This is a personal website and blog project built with the Astro framework. It serves as a portfolio and technical blog for Daniil Dyachenko.

## Project Overview

- **Purpose:** Personal website, portfolio, and technical blog.
- **Tech Stack:** 
  - **Framework:** [Astro](https://astro.build/) (v6.x)
  - **Content:** MDX for blog posts with Astro Content Collections.
  - **Styling:** Vanilla CSS (Global styles in `src/styles/global.css`).
  - **Testing:** [Vitest](https://vitest.dev/) for unit testing.
  - **Package Manager:** [pnpm](https://pnpm.io/).
  - **Deployment:** Static site generation (`output: 'static'`) with Docker support.

## Project Structure

- `src/content/blog/`: MDX files for blog posts.
- `src/content.config.ts`: Schema definitions for content collections using the new Astro 6 `loader` system.
- `src/pages/`: Astro pages (including the main index and dynamic blog routes).
- `src/layouts/`: Reusable page layouts (e.g., `BlogPost.astro`).
- `src/components/`: UI components (Header, Footer, BaseHead, etc.).
- `src/consts.ts`: Global constants like site title and description.
- `public/`: Static assets (images, fonts, icons).
- `Dockerfile` & `Dockerfile.lite`: Docker configurations for containerization.

## Building and Running

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install project dependencies. |
| `pnpm run dev` | Start the local development server (usually at `localhost:4321`). |
| `pnpm run build` | Build the production site into the `./dist/` directory. |
| `pnpm run preview` | Preview the production build locally. |
| `pnpm run test` | Execute unit tests using Vitest. |
| `pnpm run build-docker` | Build a Docker image for the site. |
| `pnpm run run-docker` | Run the site within a Docker container. |

## Development Conventions

- **Content Creation:** Add new blog posts to `src/content/blog/` as `.mdx` files. Ensure they follow the frontmatter schema defined in `src/content/config.ts` (title, pubDate, description, etc.).
- **Global Data:** Use `src/consts.ts` for any site-wide configuration strings to maintain consistency across components.
- **Components:** Favor small, reusable Astro components in `src/components/`.
- **Testing:** Add or update tests in `src/*.test.ts` when modifying core logic or constants.
- **Styles:** Modify `src/styles/global.css` for site-wide styling. Components can also have scoped `<style>` tags.
