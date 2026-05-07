import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brown text-white/90 pt-20 pb-10 px-6 relative mt-12 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto bento-card bg-brown border-white/5 p-12 mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-pink rounded-full flex items-center justify-center border border-gold">
                <span className="text-gold font-serif font-bold text-xl">A</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">ALOHA</span>
            </Link>
            <p className="text-xs leading-relaxed opacity-50 tracking-wide max-w-xs uppercase">
              Luxury tropical nail sets crafted with master precision in the heart of Miami.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl text-gold mb-6 italic">Quick Links</h4>
            <ul className="space-y-3 text-[10px] uppercase tracking-widest font-bold opacity-50">
              <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">The Brand</Link></li>
              <li><Link to="/booking" className="hover:text-gold transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-gold mb-6 italic">Salon Hours</h4>
            <ul className="space-y-3 text-[10px] uppercase tracking-widest font-bold opacity-50">
              <li>Tue - Fri: 10am - 8pm</li>
              <li>Sat: 9am - 6pm</li>
              <li>Sun-Mon: Retreat</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-gold mb-6 italic">Follow Us</h4>
            <div className="flex space-x-6 text-gold/60">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={24} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={24} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={24} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] opacity-40 uppercase tracking-[0.3em] font-medium">
          © 2024 Aloha Tips & Toes. Handcrafted Luxury.
        </p>
        <div className="flex gap-8 text-[10px] opacity-40 uppercase tracking-widest font-bold">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
        </div>
      </div>
    </footer>
  );
}
