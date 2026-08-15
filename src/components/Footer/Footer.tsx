import { Flower2, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessSettings } from '../../data/businessSettings';
import { createWhatsAppOrderUrl } from '../../utils/whatsapp';

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/" className="brand"><span className="brand__mark" aria-hidden="true">✿</span><span>{businessSettings.businessName}</span></Link>
        <p>{businessSettings.description}</p>
      </div>
      <div className="footer__links" aria-label="Footer navigation">
        <Link to="/products">Collection</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link><Link to="/admin">Admin</Link>
      </div>
      <div className="footer__socials">
        <a href={businessSettings.instagramUrl} aria-label="Instagram"><Flower2 size={18} /></a>
        <a href={`mailto:${businessSettings.email}`} aria-label="Email"><Mail size={18} /></a>
        <a href={createWhatsAppOrderUrl()} aria-label="WhatsApp"><MessageCircle size={18} /></a>
      </div>
    </footer>
  );
}
