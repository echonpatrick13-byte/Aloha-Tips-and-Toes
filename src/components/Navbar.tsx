import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 pointer-events-none">
      <div className={cn(
        "max-w-7xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-md px-8 py-4 rounded-[2.5rem] border border-beige shadow-sm transition-all duration-500 pointer-events-auto",
        scrolled ? "shadow-xl border-gold/20 -translate-y-1" : ""
      )}>
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-pink rounded-full flex items-center justify-center border border-gold group-hover:scale-110 transition-transform">
            <span className="text-gold font-serif font-bold text-xl">A</span>
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-gold hidden sm:block">Aloha Tips & Toes</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-[10px] uppercase tracking-widest font-bold transition-colors hover:text-gold',
                location.pathname === link.href ? 'text-gold' : 'text-brown/70'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-gold text-white px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-brown transition-all shadow-lg shadow-gold/20"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brown"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="mt-4 bg-white/95 backdrop-blur-lg border border-beige shadow-2xl rounded-[2.5rem] p-8 md:hidden flex flex-col space-y-6 pointer-events-auto"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs uppercase tracking-widest font-bold text-brown/70 hover:text-gold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-gold text-white px-6 py-4 rounded-full text-center text-xs uppercase tracking-widest font-bold"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
