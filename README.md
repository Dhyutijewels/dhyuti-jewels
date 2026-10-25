# Dhyuti Jewels — Static Website

A responsive, premium jewellery brand showcase website built with plain HTML, CSS and JavaScript. No build tools, frameworks, paid themes or backend are required.

## Files

- `index.html` — page structure and SEO metadata
- `styles.css` — responsive layout, typography, colours and visual styling
- `script.js` — editable sample catalogue, category filters and WhatsApp enquiries
- `assets/` — place your own local product images here if desired

## Before publishing

1. Open `script.js`.
2. Replace `WHATSAPP_NUMBER = "919999999999"` with your real business WhatsApp number, including country code and digits only. Example format for India: `919876543210`.
3. Edit the `PRODUCTS` list to set your real product names, categories, prices, descriptions, tags and image URLs.
4. Replace sample photos with images you own or are licensed to use. For local images, add them to `assets/` and use paths such as `assets/sol-earrings.jpg`.
5. In `index.html`, update the page title, meta description and social preview text to match your final brand positioning.
6. Test on a phone and desktop. Click every enquiry button and make sure the WhatsApp message opens correctly.

## Publish free with GitHub Pages

1. Create/sign in to a GitHub account at https://github.com.
2. Create a new **public** repository, for example `dhyuti-jewels`.
3. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder to the repository root.
4. Open repository **Settings → Pages**.
5. Under build/deployment, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
6. Wait for deployment. The site will be available at a URL like `https://YOUR-USERNAME.github.io/dhyuti-jewels/`.

GitHub Pages is free for public repositories and static websites. It does not run a server-side application or process payments.

## Publish free with Netlify

1. Visit https://app.netlify.com/ and sign in.
2. In the dashboard, choose **Add new site / Deploy manually** (wording may change).
3. Drag the folder containing `index.html`, `styles.css`, and `script.js` into the deploy area, or connect your GitHub repository.
4. Netlify will provide a hosted URL. You can rename the site's subdomain in site settings if the name is available.

Free-plan features and limits may change; check the host's current terms.

## What works

- Responsive mobile and desktop layout
- Mobile navigation menu
- Product cards and category filters
- Per-product WhatsApp enquiry messages
- SEO title, meta description and Open Graph basics
- Lazy loading on product images
- Editable catalogue in one JavaScript file

## What is not included

This is a static brand showcase, not a complete ecommerce checkout. It does **not** include cart management, inventory, order database, payment gateway, customer accounts, shipping integrations or order admin. Product prices are display text only. Enquiries open WhatsApp, and the visitor and business must complete the sale separately.

## Image and font note

The starter uses remote sample photos from Unsplash and Google Fonts. For production, replace sample photos with your own licensed images. Remote assets require an internet connection; locally hosted image files can be used instead.


## Bundled images
The `assets/` folder includes the supplied Dhyuti product photos, logo image, and a cropped homepage hero banner. Images are stored locally so they deploy with the website. Replace sample product names/prices and verify each photo matches the actual product before publishing.


Brand logo: the supplied Dhyuti Jewels gold monogram and “Let Your Elegance Shine” lockup is included as `assets/dhyuti-logo.png` and used in the header and footer. The header uses a dark background for contrast.
