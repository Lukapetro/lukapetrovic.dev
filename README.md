# lukapetrovic.dev

My personal portfolio

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **ORM**: [Prisma](https://prisma.io/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `data/*` - MDX data that is used for projects and changelog.
- `layouts/*` - The different page layouts each MDX category uses.
- `utils/*` - A collection of helpful utilities or code for external services.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering post views.
- `pages/projects` - [Personal projects](http://localhost:3000/projects).
- `pages/*` - All other static pages.
- `prisma/*` - My Prisma schema, which uses a AWS PostgreSQL Database.
- `public/*` - Static assets including fonts and images.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally

```bash
$ git clone https://github.com/Lukapetro/lukapetro.io
$ cd lukapetro.io
$ yarn
$ yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/Lukapetro/lukapetro.io/blob/main/.env.example).

## Cloning / Forking

Please review the [license](https://github.com/Lukapetro/lukapetro.io/blob/main/LICENSE.txt).
