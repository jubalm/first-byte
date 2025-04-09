# FirstByte Starter Kit

## Overview

FirstByte is an opinionated full-stack template project designed to rapidly kickstart modern web applications. It's easy to get started and highly intuitive when it's time to scale.

Built around:

- **Framework**: Astro 5.5.4
- **UI Library**: React 19.0
- **Styling**: TailwindCSS 4.1
- **Deployment**: Cloudflare Workers (Assets)
- **Database**: D1 Database with Drizzle ORM

### FirstByte is AI friendly!

FirstByte is equipped with github prompts that helps your AI companion understand the project, making it an excellent choice for AI-driven development. It aims to fosters a much more accurate AI interaction than just blindly "vibe coding".

## Use Cases

This stack is ideal for:

1. **Content-Driven Websites**: Build blogs, documentation sites, or marketing pages with dynamic content and fast load times.
2. **Portfolio Sites**: Showcase personal or professional work with a modern and responsive design.
3. **Web Applications**: Create scalable and interactive web apps with React components and Astro's hybrid rendering.
4. **Prototyping**: Quickly prototype ideas with a well-organized structure and pre-configured tools.
5. **Data-driven Applications**: Develop performant data-driven sites with server components or with RESTful API approach.

## File Structure

The project follows a clear and modular file structure:

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

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Wrangler CLI for Cloudflare deployment

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jubalm/first-byte.git
   cd first-byte
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

### Build

Build the project for production:

```bash
npm run build
```

### Deployment

Deploy the project using the predefined npm script:

```bash
npm run deploy
```

## Testing

Run end-to-end tests with Playwright:

```bash
npm run test
```

or with debugging tools via

```bash
npm run test:ui
```
