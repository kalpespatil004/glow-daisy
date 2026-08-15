import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { businessSettings } from '../../data/businessSettings';
import { useCart } from '../../context/useCart';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Collection', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">✿</span>
          <span>{businessSettings.businessName}</span>
        </Link>

        <div className="navbar__links">
          {navItems.map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
        </div>

        <div className="navbar__actions">
          <button className="icon-button navbar__search" type="button" aria-label="Open search"><Search size={19} /></button>
          <Link className="icon-button cart-link" to="/cart" aria-label={`View cart with ${totalItems} items`}><ShoppingBag size={19} />{totalItems > 0 ? <span>{totalItems}</span> : null}</Link>
          <button className="icon-button navbar__menu" type="button" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.18 }}>
            {navItems.map((item) => <NavLink key={item.to} to={item.to} onClick={closeMenu}>{item.label}</NavLink>)}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
