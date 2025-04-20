# Copilot Custom Instructions

## General Guidelines

- TypeScript is mandatory for all new code.
- Define props explicitly for each component.
- Style components with TailwindCSS utility classes.

## File Organization

- Page components: src/pages/
- UI components: src/components/
- Reusable UI components: src/components/ui/
- Utility functions: src/lib/
- Posts content: src/posts/
- Styles: src/styles/

## Naming Conventions

- PascalCase for component files (e.g., HeroSection.tsx)
- kebab-case for route files (e.g., [slug].astro)

## Blog Markdown Frontmatter Format

- All posts in `src/posts/` must have a frontmatter, matching the schema in `src/content.config.ts`:
- If `src/content.config.ts` is modified, ask user to consider updating markdown frontmatter in `src/posts`
