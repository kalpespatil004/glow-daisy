import type { Category, Product, Review } from '../types';

export const categories: Category[] = [
  { id: 'single-flowers', name: 'Single Flowers', description: 'Minimal stems for small moments and keepsakes.' },
  { id: 'flower-clips', name: 'Flower Clips', description: 'Handmade floral accents for styling and gifting.' },
  { id: 'bouquets', name: 'Bouquets', description: 'Soft arrangements designed for memorable gifting.' },
  { id: 'arrangements', name: 'Arrangements', description: 'Display-ready handmade floral pieces.' },
  { id: 'custom-orders', name: 'Custom Orders', description: 'Personalized colors, sizes and gifting ideas.' },
];

export const products: Product[] = [
  {
    id: 'blush-daisy-stem',
    name: 'Blush Daisy Stem',
    description: 'Placeholder product copy for a handmade pipe-cleaner flower stem.',
    price: null,
    category: 'single-flowers',
    images: ['/icons.svg'],
    available: true,
    featured: true,
    createdAt: '2026-08-15T00:00:00.000Z',
    updatedAt: '2026-08-15T00:00:00.000Z',
  },
  {
    id: 'soft-garden-clip',
    name: 'Soft Garden Clip',
    description: 'Placeholder product copy for a handmade floral hair or bag clip.',
    price: null,
    category: 'flower-clips',
    images: ['/icons.svg'],
    available: true,
    featured: true,
    createdAt: '2026-08-15T00:00:00.000Z',
    updatedAt: '2026-08-15T00:00:00.000Z',
  },
  {
    id: 'keepsake-bouquet',
    name: 'Keepsake Bouquet',
    description: 'Placeholder product copy for a custom handmade flower bouquet.',
    price: null,
    category: 'bouquets',
    images: ['/icons.svg'],
    available: true,
    featured: true,
    createdAt: '2026-08-15T00:00:00.000Z',
    updatedAt: '2026-08-15T00:00:00.000Z',
  },
];

export const reviews: Review[] = [
  { id: 'review-1', customerName: 'Customer review', quote: 'Real customer feedback can be added here once available.' },
  { id: 'review-2', customerName: 'Gift order note', quote: 'Use this space for short, verified testimonials later.' },
];
