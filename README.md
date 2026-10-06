# Paradise Nursery

Paradise Nursery is an online houseplant shop built with React and Redux Toolkit.
Browse plants by category, add them to your cart, adjust quantities, and see your total update live.

## Features
- Landing page with company name, About Us text and a "Get Started" button
- Product listing with 3 categories x 6 plants (thumbnail, name, price)
- "Add to Cart" buttons that disable once a plant is in the cart
- Navbar (Home, Plants, Cart) with a live cart item count
- Cart page with per-plant subtotal, overall total, +/- quantity, delete, Checkout ("Coming Soon") and Continue Shopping

## Run locally
```bash
npm create vite@latest paradise-nursery -- --template react
cd paradise-nursery
npm install @reduxjs/toolkit react-redux
# copy the files from src/ into your project's src/
npm run dev
```
