import { useCallback, useMemo, useState, type ReactNode } from 'react';
import type { CartItem, Product } from '../types';
import { CartContext, type CartContextValue } from './cartContextValue';
const normalizeQuantity = (quantity: number) => Math.max(1, Math.min(99, Math.floor(quantity)));

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    const safeQuantity = normalizeQuantity(quantity);
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.product.id === product.id);
      if (!existingItem) return [...currentItems, { product, quantity: safeQuantity }];

      return currentItems.map((item) => item.product.id === product.id
        ? { ...item, quantity: normalizeQuantity(item.quantity + safeQuantity) }
        : item);
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setItems((currentItems) => currentItems.map((item) => item.product.id === productId
      ? { ...item, quantity: normalizeQuantity(quantity) }
      : item));
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => ({
    items,
    totalItems: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + (item.product.price ?? 0) * item.quantity, 0),
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  }), [addItem, clearCart, items, removeItem, updateQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
