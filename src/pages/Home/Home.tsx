import { motion } from 'framer-motion';
import { ArrowRight, Flower2, Gift, Heart, Sparkles, Wand2 } from 'lucide-react';
import heroImage from '../../assets/floral-bouquet.svg';
import { ButtonLink, ExternalButtonLink } from '../../components/Button';
import { ProductCard } from '../../components/ProductCard';
import { Section } from '../../components/Section';
import { categories, products, reviews } from '../../data/products';
import { createWhatsAppOrderUrl } from '../../utils/whatsapp';

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured);
  const benefits = [
    { icon: Flower2, title: 'Handmade', text: 'Every piece is carefully shaped by hand with soft floral detail.' },
    { icon: Sparkles, title: 'Made to Last', text: 'Keepsake flowers designed to stay beautiful beyond one day.' },
    { icon: Gift, title: 'Gift Ready', text: 'A sweet choice for birthdays, anniversaries and thoughtful moments.' },
    { icon: Wand2, title: 'Custom Made', text: 'Create something personal with colors, styles and details you love.' },
  ];

  return (
    <main>
      <section className="hero">
        <motion.div className="hero__content" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="eyebrow">Handmade with love</p>
          <h1>Handmade flowers, made to bloom forever.</h1>
          <p className="hero__copy">Cute, romantic floral gifts and accessories crafted for beautiful everyday moments, custom orders and keepsake surprises.</p>
          <div className="hero__actions">
            <ButtonLink to="/products">Explore Collection <ArrowRight size={17} /></ButtonLink>
            <ExternalButtonLink href={createWhatsAppOrderUrl({ note: 'I want to discuss a custom Glow Daisy order.' })} variant="secondary">Custom Order</ExternalButtonLink>
          </div>
        </motion.div>
        <motion.div className="hero__visual" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.08 }}>
          <img src={heroImage} alt="Soft blush and lavender handmade flower bouquet illustration for Glow Daisy" />
          <div className="hero__note"><Heart size={16} /> Replace this placeholder with real Glow Daisy flower photos anytime.</div>
        </motion.div>
      </section>

      <Section eyebrow="Collections" title="Little flowers for every beautiful moment." description="Browse soft handmade categories. These can be updated from the centralized catalog when real products are ready.">
        <div className="collection-grid">
          {categories.slice(0, 4).map((category) => <article className={`collection-card collection-card--${category.id}`} key={category.id}><span>✿</span><h3>{category.name}</h3><p>{category.description}</p></article>)}
        </div>
      </Section>

      <Section eyebrow="Featured" title="Sweet pieces to start the collection." description="Prices are still placeholders until the final Glow Daisy catalog is provided.">
        <div className="product-grid">{featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </Section>

      <Section eyebrow="Why Glow Daisy" title="Made for gifting, styling and keeping." description="A soft boutique experience designed for handmade flowers and future e-commerce growth.">
        <div className="value-grid">
          {benefits.map((item) => <article className="value-card" key={item.title}><item.icon size={22} /><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </Section>

      <section className="custom-order">
        <div><p className="eyebrow">Custom orders</p><h2>Have something special in mind?</h2><p>Let's create a flower arrangement made just for you.</p></div>
        <ExternalButtonLink href={createWhatsAppOrderUrl({ note: 'I would like a custom handmade flower order.' })}>Create a Custom Order</ExternalButtonLink>
      </section>

      <Section eyebrow="Reviews" title="Soft words from future customers." description="No fake claims are used. Replace these placeholders with verified reviews once available.">
        <div className="review-grid">{reviews.map((review) => <blockquote key={review.id}><span aria-hidden="true">✦</span><p>“{review.quote}”</p><cite>{review.customerName}</cite></blockquote>)}</div>
      </Section>

      <section className="social-strip"><p className="eyebrow">Instagram</p><h2>Follow the floral diary.</h2><p>@GlowDaisy placeholder gallery for new drops, color palettes and behind-the-scenes making.</p><div className="social-gallery" aria-label="Instagram-style floral gallery placeholders">{Array.from({ length: 6 }, (_, index) => <div key={index}><Flower2 size={26} /></div>)}</div><ButtonLink to="/contact" variant="ghost">Connect with Glow Daisy</ButtonLink></section>
    </main>
  );
}
