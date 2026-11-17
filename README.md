# Paul Pottinger Ltd: Next.js rebuild

Rebuild of the WordPress site at https://paulpottingerltd.co.uk for deployment on Vercel.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## How it is put together

- `app/page.tsx` is the home page (hero, intro, Project Showcase, testimonials, footer).
- `components/ProjectShowcase.tsx` is the image wall. Hovering a tile fades in the overlay with the title and a "Read More" button. On desktop that button opens the lightbox (`components/Lightbox.tsx`, Esc / click outside / × to close). On mobile it links to the project page.
- `app/home/[slug]/page.tsx` renders the eight project pages at the same URLs as the old site (`/home/extensions/` etc.).
- `app/privacy-policy/page.tsx` is the privacy policy.
- `content/projects.json` holds the tile image, lightbox content and page content for the 8 projects. `content/privacy.html` is the privacy policy text.
- `public/wp-content/...` keeps the original image paths, so old image URLs keep working.
- `public/css/site.css` is the original theme stylesheet; `home.css` / `inner.css` are the original per-page inline styles. They are kept verbatim so the result matches the live site pixel for pixel. Tidying them into modular CSS is a good follow-up.

## Parity checks

`reference/` has full-page screenshots of the live site (desktop 1440px, mobile 390px, hover state, lightbox) taken before the rebuild.
