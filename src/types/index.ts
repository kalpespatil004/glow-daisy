export type ProductCategoryId = 'single-flowers' | 'flower-clips' | 'bouquets' | 'arrangements' | 'custom-orders';

export interface Category {
  id: ProductCategoryId;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number | null;
  category: ProductCategoryId;
  images: string[];
  available: boolean;
  featured: boolean;
  stock?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number | null;
}

export type OrderStatus = 'placed' | 'confirmed' | 'preparing' | 'shipped' | 'out-for-delivery' | 'delivered' | 'cancelled';

export interface Order {
  id: string;
  customer: Customer;
  items: OrderItem[];
  status: OrderStatus;
  subtotal: number;
  deliveryCharge: number;
  total: number;
  createdAt: string;
}

export interface Review {
  id: string;
  customerName: string;
  quote: string;
}

export type UserRole = 'super-admin' | 'admin' | 'customer';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  permissions: string[];
}

export interface BusinessSettings {
  businessName: string;
  tagline: string;
  description: string;
  email: string;
  whatsappNumber: string;
  instagramUrl: string;
  deliveryCharge: number;
}
