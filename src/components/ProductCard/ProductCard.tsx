import { motion } from 'framer-motion';
import { Eye, ShoppingBag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { getCategoryName } from '../../utils/products';
import { ButtonLink } from '../Button';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const formatPrice = (price: number | null) => price === null || price === 0 ? 'Price on request' : `₹${price}`;

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const categoryName = getCategoryName(product.category);

  return (
    <motion.article className="product-card" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Link to={`/products/${product.id}`} className="product-card__image" aria-label={`View ${product.name}`}>
        <img src={product.images[0]} alt={`${product.name} handmade flower product image`} loading="lazy" />
        {product.featured ? <span className="product-card__badge"><Sparkles size={14} /> Featured</span> : null}
      </Link>
      <div className="product-card__body">
        <div className="product-card__meta-row">
          <p className="product-card__meta">{categoryName}</p>
          <span className={product.available ? 'availability availability--available' : 'availability'}>{product.available ? 'Available' : 'Unavailable'}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card__footer">
          <span>{formatPrice(product.price)}</span>
          <div className="product-card__actions">
            <ButtonLink to={`/products/${product.id}`} variant="ghost"><Eye size={16} /> View</ButtonLink>
            <button type="button" aria-label={`Add ${product.name} to cart`} onClick={() => onAddToCart?.(product)} disabled={!product.available}>
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
