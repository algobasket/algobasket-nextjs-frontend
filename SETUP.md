# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Move Assets Folder**
   - Copy the `assets` folder from the root directory to the `public` directory
   - Your structure should be: `public/assets/...`

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Navigate to http://localhost:3000

## Important Notes

### Assets Migration
The assets folder needs to be moved to the `public` directory for Next.js to serve them correctly. All image references have been updated to use `/assets/...` paths.

### Chat Webhook
The chat webhook API route is located at `/app/api/chat-webhook/route.ts`. Currently, it has basic response logic. You may want to integrate it with your actual Dialogflow or AI service.

### Bootstrap JavaScript
Bootstrap JavaScript is loaded via CDN in the layout component. The dropdown menus and other Bootstrap interactive features will work automatically.

### Image Optimization
Next.js Image component is used for most images, but some images (like logos) use regular `<img>` tags for simplicity. You can optimize these later if needed.

## File Structure After Setup

```
├── app/
│   ├── api/
│   │   └── chat-webhook/
│   │       └── route.ts
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── open-source/
│   │   └── page.tsx
│   ├── premium/
│   │   └── page.tsx
│   ├── portfolio-overview/
│   │   └── page.tsx
│   ├── portfolio-item/
│   │   └── page.tsx
│   ├── blog-home/
│   │   └── page.tsx
│   ├── blog-post/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Chat.tsx
│   ├── Footer.tsx
│   ├── Menu.tsx
│   └── SubscribeDonate.tsx
├── public/
│   └── assets/          # Your assets folder should be here
│       ├── favicon.ico
│       ├── logo2.png
│       ├── ask-chat-logo.png
│       └── ... (all other assets)
├── styles/
│   └── globals.css
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## Troubleshooting

### Images Not Loading
- Make sure the `assets` folder is in the `public` directory
- Check that image paths start with `/assets/...`

### Bootstrap Dropdowns Not Working
- Ensure Bootstrap JavaScript is loaded (it's in the layout)
- Check browser console for any JavaScript errors

### Chat Not Working
- Check that the API route is accessible at `/api/chat-webhook`
- Verify the request format matches what the API expects

## Next Steps

1. Customize the chat webhook to integrate with your AI service
2. Add environment variables if needed (create `.env.local`)
3. Optimize images using Next.js Image component
4. Add any additional features or pages as needed

