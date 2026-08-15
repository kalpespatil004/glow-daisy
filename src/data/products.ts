import type { Category, Product, Review } from '../types';

export const categories: Category[] = [
  { id: 'single-flowers', name: 'Single Flowers', description: 'Minimal stems for small moments and keepsakes.' },
  { id: 'flower-clips', name: 'Flower Clips', description: 'Handmade floral accents for styling and gifting.' },
  { id: 'bouquets', name: 'Bouquets', description: 'Soft arrangements designed for memorable gifting.' },
  { id: 'arrangements', name: 'Arrangements', description: 'Display-ready handmade floral pieces.' },
  { id: 'custom-orders', name: 'Custom Orders', description: 'Personalized colors, sizes and gifting ideas.' },
];

// Mock catalog data only. Replace with real Firestore products when the backend phase begins.
export const products: Product[] = [
  {
    id: 'blush-daisy-stem',
    name: 'Blush Daisy Stem',
    description: 'Mock single handmade pipe-cleaner flower stem for testing the product experience.',
    price: 0,
    category: 'single-flowers',
    images: ['/icons.svg', '/favicon.svg'],
    available: true,
    featured: true,
    stock: 12,
    createdAt: '2026-08-15T00:00:00.000Z',
    updatedAt: '2026-08-15T00:00:00.000Z',
  },
  {
    id: 'soft-garden-clip',
    name: 'Soft Garden Clip',
    description: 'Mock floral clip placeholder for hair, bags or gift styling previews.',
    price: 0,
    category: 'flower-clips',
    images: ['/icons.svg', '/favicon.svg'],
    available: true,
    featured: true,
    stock: 8,
    createdAt: '2026-08-15T00:00:00.000Z',
    updatedAt: '2026-08-15T00:00:00.000Z',
  },
  {
    id: 'keepsake-bouquet',
    name: 'Keepsake Bouquet',
    description: 'Mock bouquet listing for a future handmade custom flower bundle.',
    price: 0,
    category: 'bouquets',
    images: ['/icons.svg', '/favicon.svg'],
    available: true,
    featured: true,
    stock: 4,
    createdAt: '2026-08-15T00:00:00.000Z',
    updatedAt: '2026-08-15T00:00:00.000Z',
  },
  {
    id: 'desk-bloom-arrangement',
    name: 'Desk Bloom Arrangement',
    description: 'Mock arrangement listing for display-ready handmade flowers.',
    price: 0,
    category: 'arrangements',
    images: ['/icons.svg', '/favicon.svg'],
    available: true,
    featured: false,
    stock: 3,
    createdAt: '2026-08-15T00:00:00.000Z',
    updatedAt: '2026-08-15T00:00:00.000Z',
  },
  {
    id: 'custom-color-palette',
    name: 'Custom Color Palette',
    description: 'Mock custom order option for discussing colors, quantity and gifting details.',
    price: null,
    category: 'custom-orders',
    images: ['/icons.svg', '/favicon.svg'],
    available: true,
    featured: false,
    createdAt: '2026-08-15T00:00:00.000Z',
    updatedAt: '2026-08-15T00:00:00.000Z',
  },
];

export const reviews: Review[] = [
  { id: 'review-1', customerName: 'Customer review', quote: 'Real customer feedback can be added here once available.' },
  { id: 'review-2', customerName: 'Gift order note', quote: 'Use this space for short, verified testimonials later.' },
];
