import { motion } from 'framer-motion';
import { ArrowRight, Gift, Heart, Sparkles } from 'lucide-react';
import heroImage from '../../assets/hero.png';
import { ButtonLink, ExternalButtonLink } from '../../components/Button';
import { ProductCard } from '../../components/ProductCard';
import { Section } from '../../components/Section';
import { businessSettings } from '../../data/businessSettings';
import { categories, products, reviews } from '../../data/products';
import { createWhatsAppOrderUrl } from '../../utils/whatsapp';

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <main>
      <section className="hero">
        <motion.div className="hero__content" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="eyebrow">{businessSettings.tagline}</p>
          <h1>Elegant handmade flowers that stay beautiful.</h1>
          <p className="hero__copy">A premium storefront foundation for pipe-cleaner flowers, keepsake bouquets, accessories and made-to-order floral gifts.</p>
          <div className="hero__actions">
            <ButtonLink to="/collection">Explore collection <ArrowRight size={17} /></ButtonLink>
            <ExternalButtonLink href={createWhatsAppOrderUrl({ note: 'I want to discuss a custom Glow Daisy order.' })} variant="secondary">Custom order</ExternalButtonLink>
          </div>
        </motion.div>
        <motion.div className="hero__visual" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.08 }}>
          <img src={heroImage} alt="Soft handmade flower arrangement for Glow Daisy" />
          <div className="hero__note"><Sparkles size={16} /> Replace with real product photography anytime.</div>
        </motion.div>
      </section>

      <Section eyebrow="Collections" title="Designed around every gifting moment" description="Categories live in one data file now, so real products and collections can be updated cleanly later.">
        <div className="collection-grid">
          {categories.slice(0, 4).map((category) => <article className="collection-card" key={category.id}><span>✿</span><h3>{category.name}</h3><p>{category.description}</p></article>)}
        </div>
      </Section>

      <Section eyebrow="Featured" title="Soft launch product placeholders" description="Prices intentionally remain configurable placeholders until the real catalog is ready.">
        <div className="product-grid">{featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </Section>

      <Section eyebrow="Why Glow Daisy" title="A thoughtful handmade brand experience" description="The foundation is intentionally warm, accessible and flexible for future e-commerce features.">
        <div className="value-grid">
          {[{ icon: Heart, title: 'Handmade warmth', text: 'A tactile look and copy system built for handcrafted flowers.' }, { icon: Gift, title: 'Gift-ready structure', text: 'Clear paths for collections, custom orders and future checkout.' }, { icon: Sparkles, title: 'Premium minimal UI', text: 'Generous spacing, restrained motion and soft visual details.' }].map((item) => <article className="value-card" key={item.title}><item.icon size={22} /><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </Section>

      <section className="custom-order">
        <div><p className="eyebrow">Custom orders</p><h2>Need a specific color palette or bouquet style?</h2><p>Start with WhatsApp ordering now. The same flow can later connect to checkout, orders and Firebase.</p></div>
        <ExternalButtonLink href={createWhatsAppOrderUrl({ note: 'I would like a custom handmade flower order.' })}>Message on WhatsApp</ExternalButtonLink>
      </section>

      <Section eyebrow="Reviews" title="Ready for verified customer stories" description="No fake claims are used. These placeholders can be replaced with real reviews when available.">
        <div className="review-grid">{reviews.map((review) => <blockquote key={review.id}><p>“{review.quote}”</p><cite>{review.customerName}</cite></blockquote>)}</div>
      </Section>

      <section className="social-strip"><p className="eyebrow">Instagram</p><h2>Showcase new handmade drops and behind-the-scenes work.</h2><ButtonLink to="/contact" variant="ghost">Connect with Glow Daisy</ButtonLink></section>
    </main>
  );
}
