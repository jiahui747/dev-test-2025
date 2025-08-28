This is a [Next.js](https://nextjs.org) project with libraries:

- React [ReactJs](https://react.dev)
- Motion [MotionJs](https://motion.dev/)
- Gsap [Gsap](https://gsap.com/)
- Tailwind [Tailwind](https://tailwindcss.com/)

## Getting Started

First, git clone this repo and run the code

```bash
# clone the repo
git clone https://github.com/DDB-New-Zealand/dev-test-2025.git

# go into pokegalaxy folder
cd pokegalaxy

# install dependencies
npm ci

# run the project
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design decisions

- The barebone design is generated with OpenAI (This includes background, logo)
- The application uses a list -> details approach using `dynamic route`
- The details page is designed in two parts
  - The first part is loaded in the server side for performance and SEO
  - The second part is loaded in client side, because the image needs to be processed. (White background removed)
  - The image is from a public server but fething the image directly is blocked by CORS. This is handled by fetching the image
    with Nextjs API and then sent to the frontend to avoid CORS block.
- Some CSS such as neon, window etc are added directly to `global.css` mainly cause the styles look too ugly if added to tailwind
