import { Minus, Plus, Trash2 } from 'lucide-react';
import { ButtonLink } from '../../components/Button';
import { EmptyState } from '../../components/EmptyState';
import { useCart } from '../../context/useCart';

const formatPrice = (price: number | null) => price === null || price === 0 ? 'Price on request' : `₹${price}`;

export default function Cart() {
  const { items, subtotal, totalItems, updateQuantity, removeItem } = useCart();

  return (
    <main className="cart-page">
      <section className="products-hero">
        <p className="eyebrow">Cart</p>
        <h1>Your selected flowers.</h1>
        <p>Cart state is frontend-only for now and will later connect to checkout and orders.</p>
      </section>

      {items.length === 0 ? (
        <EmptyState title="Your cart is empty" description="Browse the collection and add a handmade flower product to continue." actionLabel="Continue shopping" onAction={() => window.location.assign('/products')} />
      ) : (
        <section className="cart-layout">
          <div className="cart-items" aria-label="Cart items">
            {items.map((item) => (
              <article className="cart-item" key={item.product.id}>
                <img src={item.product.images[0]} alt={`${item.product.name} cart item`} loading="lazy" />
                <div>
                  <h2>{item.product.name}</h2>
                  <p>{formatPrice(item.product.price)}</p>
                  <div className="cart-item__controls">
                    <button type="button" onClick={() => updateQuantity(item.product.id, item.quantity - 1)} aria-label={`Decrease ${item.product.name} quantity`}><Minus size={15} /></button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.product.id, item.quantity + 1)} aria-label={`Increase ${item.product.name} quantity`}><Plus size={15} /></button>
                    <button type="button" onClick={() => removeItem(item.product.id)} aria-label={`Remove ${item.product.name}`}><Trash2 size={15} /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary" aria-label="Cart summary">
            <h2>Order summary</h2>
            <div><span>Items</span><strong>{totalItems}</strong></div>
            <div><span>Subtotal</span><strong>{subtotal === 0 ? 'Price on request' : `₹${subtotal}`}</strong></div>
            <p>Delivery and final pricing will be confirmed in a later checkout phase.</p>
            <ButtonLink to="/products" variant="secondary">Continue shopping</ButtonLink>
            <ButtonLink to="/checkout">Proceed to checkout</ButtonLink>
          </aside>
        </section>
      )}
    </main>
  );
}
