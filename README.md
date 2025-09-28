# KidsSport - Kids Bikes & Scooters E-commerce Website

A modern, responsive e-commerce website built with Next.js 13+ (App Router) for selling kids' bicycles and scooters.

## Features

- **Home Page**: Hero section with featured products and category showcase
- **Categories Page**: Filterable product listings with sorting options
- **Product Details Page**: Detailed product information with related products
- **Shopping Cart**: Add/remove items with quantity management
- **About Page**: Company information and team details
- **Contact Page**: Contact form and business information
- **Responsive Design**: Mobile-first design with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context (Cart)
- **Images**: Next.js Image component with Picsum Photos

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── about/page.tsx
│   ├── cart/page.tsx
│   ├── categories/page.tsx
│   ├── contact/page.tsx
│   └── product/[id]/page.tsx
├── components/
│   ├── CartContext.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── theme.tsx
├── data/
│   └── products.ts
└── public/
    └── icons/
        └── logo.svg
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Product Categories

- **Bicycles**: Mountain bikes, BMX bikes, princess bikes, adventure bikes
- **Scooters**: 3-wheel scooters, electric scooters, kick scooters, pro scooters

## Key Features

- **Product Filtering**: Filter by category (Bicycles/Scooters)
- **Product Sorting**: Sort by name, price (low to high, high to low)
- **Shopping Cart**: Add/remove items, quantity management
- **Responsive Design**: Works on all device sizes
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and semantic HTML elements

## Color Theme

The website uses a consistent color palette:
- Primary: Blue (#2563eb)
- Secondary: Gray (#f3f4f6)
- Accent: Pink (#ec4899)
- Dark: Gray (#111827)
- Light: White (#ffffff)

## Pages

1. **Home** (`/`) - Hero section, featured products, categories
2. **Categories** (`/categories`) - Product listings with filters
3. **Product Details** (`/product/[id]`) - Individual product information
4. **Cart** (`/cart`) - Shopping cart with checkout
5. **About** (`/about`) - Company information and team
6. **Contact** (`/contact`) - Contact form and business details

## Development

Built following Next.js 13+ App Router best practices with:
- TypeScript for type safety
- Tailwind CSS for styling
- React Context for state management
- Responsive design principles
- SEO optimization
- Accessibility features
