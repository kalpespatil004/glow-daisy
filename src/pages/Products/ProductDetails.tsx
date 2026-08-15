import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, ButtonLink, ExternalButtonLink } from '../../components/Button';
import { EmptyState } from '../../components/EmptyState';
import { ProductCard } from '../../components/ProductCard';
import { useCart } from '../../context/useCart';
import { createWhatsAppOrderUrl } from '../../utils/whatsapp';
import { getCategoryName, getProductById, getRelatedProducts } from '../../utils/products';

const formatPrice = (price: number | null) => price === null || price === 0 ? 'Price on request' : `₹${price}`;

export default function ProductDetails() {
  const { productId } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = productId ? getProductById(productId) : undefined;

  const relatedProducts = useMemo(() => product ? getRelatedProducts(product.id, product.category) : [], [product]);

  if (!product) {
    return (
      <main className="page-shell">
        <EmptyState title="Product not found" description="This product may have been removed or the link may be incorrect." />
        <ButtonLink to="/products" variant="secondary">Back to products</ButtonLink>
      </main>
    );
  }

  const decrement = () => setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  const increment = () => setQuantity((currentQuantity) => Math.min(99, currentQuantity + 1));
  const updateQuantity = (value: string) => {
    const nextQuantity = Number(value);
    setQuantity(Number.isFinite(nextQuantity) ? Math.max(1, Math.min(99, Math.floor(nextQuantity))) : 1);
  };

  return (
    <main className="product-details-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/products">Products</Link>
        <span aria-hidden="true">/</span>
        <span>{product.name}</span>
      </nav>

      <section className="product-details">
        <div className="product-gallery" aria-label={`${product.name} images`}>
          <div className="product-gallery__main">
            <img src={product.images[0]} alt={`${product.name} large handmade flower product image`} />
          </div>
          <div className="product-gallery__thumbs">
            {product.images.map((image, index) => <img key={image} src={image} alt={`${product.name} thumbnail ${index + 1}`} loading="lazy" />)}
          </div>
        </div>

        <article className="product-info">
          <p className="eyebrow">{getCategoryName(product.category)}</p>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="product-info__meta">
            <strong>{formatPrice(product.price)}</strong>
            <span className={product.available ? 'availability availability--available' : 'availability'}>{product.available ? 'Available' : 'Unavailable'}</span>
            {typeof product.stock === 'number' ? <span>{product.stock} mock units</span> : null}
          </div>

          <div className="quantity-control" aria-label="Select quantity">
            <button type="button" onClick={decrement} aria-label="Decrease quantity"><Minus size={16} /></button>
            <label htmlFor="product-quantity">Quantity</label>
            <input id="product-quantity" type="number" min="1" max="99" value={quantity} onChange={(event) => updateQuantity(event.target.value)} />
            <button type="button" onClick={increment} aria-label="Increase quantity"><Plus size={16} /></button>
          </div>

          <div className="product-info__actions">
            <Button type="button" onClick={() => addItem(product, quantity)} disabled={!product.available}><ShoppingBag size={18} /> Add to cart</Button>
            <ExternalButtonLink href={createWhatsAppOrderUrl({ productName: product.name, quantity, note: 'I am interested in this Glow Daisy product.' })} variant="secondary">Order on WhatsApp</ExternalButtonLink>
          </div>
        </article>
      </section>

      <section className="related-products">
        <div className="section__heading">
          <p className="eyebrow">Related</p>
          <h2>More from this category</h2>
        </div>
        {relatedProducts.length > 0 ? <div className="product-grid">{relatedProducts.map((item) => <ProductCard key={item.id} product={item} onAddToCart={(productToAdd) => addItem(productToAdd)} />)}</div> : <p>No related products yet. Add more mock products to this category later.</p>}
      </section>
    </main>
  );
}
