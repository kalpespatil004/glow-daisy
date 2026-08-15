import { categories, products } from '../data/products';
import type { ProductCategoryId } from '../types';

export const getCategoryById = (categoryId: ProductCategoryId) => categories.find((category) => category.id === categoryId);

export const getCategoryName = (categoryId: ProductCategoryId) => getCategoryById(categoryId)?.name ?? 'Uncategorized';

export const getProductById = (productId: string) => products.find((product) => product.id === productId);

export const getRelatedProducts = (productId: string, categoryId: ProductCategoryId) => products
  .filter((product) => product.id !== productId && product.category === categoryId)
  .slice(0, 3);
