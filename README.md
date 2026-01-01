# Algobasket - Next.js Version

This is the Next.js conversion of the Algobasket PHP website. The site has been fully converted to use Next.js 14 with React components, TypeScript, and the App Router.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript support
- ✅ Bootstrap 5 integration
- ✅ Bootstrap Icons
- ✅ Responsive design
- ✅ Chat functionality with API route
- ✅ All pages converted from PHP to Next.js

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Move your assets folder:
   - Copy the `assets` folder from the root to the `public` directory
   - The assets should be accessible at `/assets/...` in the browser

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── open-source/       # Open source page
│   └── ...                # Other pages
├── components/            # React components
│   ├── Chat.tsx           # Chat component
│   ├── Footer.tsx         # Footer component
│   ├── Menu.tsx           # Navigation menu
│   └── SubscribeDonate.tsx
├── public/                # Static assets
│   └── assets/            # Images and other assets
├── styles/                # Global styles
│   └── globals.css        # Global CSS with Bootstrap overrides
└── package.json           # Dependencies
```

## Pages

All pages from the original PHP site have been converted:

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/faq` - FAQ page
- `/open-source` - Open source products
- `/premium` - Premium products
- `/portfolio-overview` - Portfolio overview
- `/portfolio-item` - Portfolio item detail
- `/blog-home` - Blog home
- `/blog-post` - Blog post

## API Routes

- `/api/chat-webhook` - Chat webhook endpoint (POST)

## Building for Production

```bash
npm run build
npm start
```

## Notes

- The chat webhook API route (`/api/chat-webhook/route.ts`) currently has basic response logic. You may want to integrate it with your actual Dialogflow or AI service.
- All images should be placed in the `public/assets` directory
- Bootstrap JavaScript is loaded via CDN in the layout
- The site uses Bootstrap 5.2.3 for styling

## Migration Notes

- PHP includes have been converted to React components
- All PHP pages are now Next.js pages in the `app` directory
- The chat webhook has been converted to a Next.js API route
- Image paths have been updated to use Next.js Image component
- All links use Next.js Link component for client-side navigation

