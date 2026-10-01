# Tivoli Restaurant & Café — Digital Menu

A responsive, bilingual Arabic/English menu website built from the supplied product sheet.

## Contents

- `index.html` — page structure
- `styles.css` — responsive styling and motion
- `app.js` — horizontal category navigation, a horizontal product row inside each category, cart, checkout details, language switch, WhatsApp message
- `menu-data.json` — 356 menu items across 36 categories
- `assets/tivoli-logo.png` — supplied Tivoli logo
- `assets/optimized/categories/` — 36 category photos from the earlier Tivoli static site
- `assets/optimized/products/` — 344 product photos from the earlier Tivoli static site

## Deploy

Upload the contents of this folder to a static web host or the restaurant website's document root. Serve it over HTTP/HTTPS so the browser can load `menu-data.json`.

The menu has no product search field. Customers first see the horizontal category cards. Selecting a category shows only that category's products in a horizontal row; products from other categories stay hidden until a different category is selected. The layout adapts to desktop and mobile widths.

The WhatsApp order link is configured for `01280170555` (international format `201280170555`). The Instagram, Facebook, map, and contact links are also included in the page.

## Product photos

The earlier Tivoli static site contained the optimized menu photos. They are now included locally, so the menu does not depend on the old site's image server. Twelve products without a matching photo use their category photo. Original `uploads/...` paths are retained in each affected product's `originalImage` or `image` field; `OLD_MEDIA_BASE` can still be configured if those originals become available on a server.

To change products or prices, edit `menu-data.json` and keep the existing field names: `id`, `category`, `nameAr`, `nameEn`, `description`, `price`, `image`, and `imageAlt`.
