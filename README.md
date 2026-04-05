# AudioZone - E-Commerce Landing Page

AudioZone is a modern React storefront concept focused on headphones and audio gear. The page includes a hero carousel, category highlights, featured products, and branded storytelling sections.

## Tech Stack

- React 19
- Create React App (react-scripts 5)
- Nuka Carousel 8
- Plain CSS for styling and animations

## Features

- Hero carousel with autoplay promotional slides
- Pricing display with sale and original prices
- "Who We Are" and "Why AudioZone" brand sections
- Popular categories grid
- Featured products with imagery, pricing, and hover effects
- Responsive layout tuned for desktop and mobile

## Project Structure

```
ecommerce-site/
	public/
		index.html
	src/
		App.jsx
		App.css
		index.js
		index.css
		...assets
	package.json
	README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

Open http://localhost:3000 in your browser.

### 3. Create a production build

```bash
npm run build
```

The optimized output is generated in the `build/` folder.

## Available Scripts

- `npm start` - Runs the app in development mode.
- `npm run build` - Builds the app for production.
- `npm test` - Runs tests in watch mode.
- `npm run eject` - Ejects CRA config (irreversible).

## Customization Guide

- Update section content in `src/App.jsx`.
- Adjust colors, typography, layout, and hover behavior in `src/App.css`.
- Replace product and section images by updating imports in `src/App.jsx` and swapping files in `src/`.

## Notes

- Some links currently point to placeholder targets (`/#`). Replace them with real routes or product URLs as needed.
- Cart UI is present as a header action, but cart functionality is not implemented yet.

## Author

Designed by Aryan Gupta.

## License

This project is for educational and portfolio use.
