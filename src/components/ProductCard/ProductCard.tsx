import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';

interface ProductCardProps { product: Product; }

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article className="product-card" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Link to={`/collection/${product.id}`} className="product-card__image" aria-label={`View ${product.name}`}>
        <img src={product.images[0]} alt={`${product.name} placeholder`} loading="lazy" />
      </Link>
      <div className="product-card__body">
        <p className="product-card__meta">{product.available ? 'Available' : 'Unavailable'}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card__footer">
          <span>{product.price === null ? 'Price on request' : `₹${product.price}`}</span>
          <button type="button" aria-label={`Add ${product.name} to cart`}><ShoppingBag size={18} /></button>
        </div>
      </div>
    </motion.article>
  );
}
