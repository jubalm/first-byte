# Technical Guidelines

## Project Build

- **Framework**: Astro 5.5.4
- **UI Library**: React 19.0
- **Styling**: TailwindCSS 4.1
- **Deployment**: Cloudflare Pages via Wrangler

## File Organization

```
src/
├── pages/          # Page components
├── components/     # UI components
│   └── ui/         # Reusable UI elements
├── layouts/        # Layout components (e.g., base.astro, blog.astro)
├── lib/            # Utility functions
├── posts/          # Dynamic posts or blog content
├── styles/         # Global and component-specific styles
public/             # Static assets like images, icons, and other files
```

## File Naming Conventions

- Use PascalCase for component files (e.g., `HeroSection.tsx`).
- Use kebab-case for route files (e.g., `[slug].astro`).

## Testing

- Use Playwright for end-to-end testing.
- Place test files in the `tests/` directory.

## Environment Variables

- Define environment types in `src/env.d.ts`.

## Coding Practice

When creating or modifying components:

```tsx
import { cn } from "@/lib/utils";
import { useRef } from "react";

type ComponentProps = {
  prop1: string;
  prop2: string;
};

export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Use refs for DOM references
  const elementRef = useRef(null);

  return (
    {/* use cn utility to merge classNames */}
    <div ref={elementRef} className={cn("base-styles", "conditional-styles")}>
      {/* Component content */}
    </div>
  );
}
```

### Use explicit props types definition

- Define prop types explicitly and use standard JavaScript function syntax for components instead of `React.FC`:

```tsx
// Explicitly typed props
type ExampleProps = {
  title: string;
  children: React.ReactNode;
};

export function Example({ title, children }: ExampleProps) {
  return (
    <div>
      {title}
      {children}
    </div>
  );
}
```
