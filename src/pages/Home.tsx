import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Heart } from 'lucide-react';

const featuredWorks = [
  { id: 1, title: 'Tropical Paradise', category: 'Hand-painted', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Golden Hour', category: 'Chrome', image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Bridal Lace', category: 'Wedding', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800' },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-luxury-white pt-24 pb-12 px-6"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main 12-column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Hero Section - 8 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-8 bento-card p-10 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-pink/30 to-beige/30 min-h-[400px]"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10 hidden lg:block">
              <Sparkles size={160} strokeWidth={1} />
            </div>
            <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-4 block">Est. 2018 • Miami</span>
            <h1 className="text-5xl lg:text-7xl font-serif leading-tight mb-6">
              Luxury Nail Art That<br />
              <span className="italic text-gold font-light">Speaks Your Style</span>
            </h1>
            <p className="text-lg max-w-lg mb-10 opacity-70 font-light leading-relaxed">
              Experience high-end nail artistry at Aloha Tips and Toes. From minimalist nudes to intricate luxury tropical sets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="bg-brown text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors">
                Explore Gallery
              </Link>
              <Link to="/about" className="border border-brown text-brown px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brown/5 transition-colors">
                Our Story
              </Link>
            </div>
          </motion.div>

          {/* Trending Service - 4 cols */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bento-card bento-card-hover p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-pink text-brown text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Trending</span>
                <span className="text-gold font-serif text-2xl">$75+</span>
              </div>
              <h3 className="text-2xl font-serif mb-2">Gel-X Extensions</h3>
              <p className="text-sm opacity-60 leading-relaxed font-light">
                Natural feel, infinite length possibilities with soft gel tips. Includes single color luxury finish.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-beige/30 flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-beige shadow-sm" />
                ))}
              </div>
              <span className="text-[10px] font-bold text-gold uppercase tracking-tighter">+12 booked today</span>
            </div>
          </motion.div>

          {/* Social Proof/Stats - 4 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bento-card bg-gold text-white p-8 flex items-center justify-around"
          >
            <div className="text-center">
              <div className="text-3xl font-serif font-bold">4.9/5</div>
              <div className="text-[9px] uppercase tracking-[0.2em] opacity-80 font-bold mt-1">Client Rating</div>
            </div>
            <div className="h-10 w-[1px] bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-serif font-bold">500+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] opacity-80 font-bold mt-1">Custom Sets</div>
            </div>
          </motion.div>

          {/* Featured Media Showcase - 8 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 bento-card bento-card-hover overflow-hidden group"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="p-10 flex flex-col justify-center">
                <span className="text-gold uppercase tracking-widest text-[10px] font-bold mb-4 block">New Collection</span>
                <h3 className="text-3xl font-serif text-brown mb-6">Celestial Quartz Collection</h3>
                <p className="text-brown/60 text-sm mb-8 leading-relaxed font-light">
                  Inspired by hidden gems and lunar phases. Featuring hand-placed gold leaf and holographic pigments.
                </p>
                <Link to="/portfolio" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brown group-hover:text-gold transition-colors">
                  View Collection <ArrowRight size={14} />
                </Link>
              </div>
              <div className="relative h-[300px] md:h-auto overflow-hidden">
                <img 
                  src={featuredWorks[0].image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Featured Collection"
                />
              </div>
            </div>
          </motion.div>

          {/* Testimonial Bento - 5 cols */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-5 bento-card p-10 bg-brown text-white/90 flex flex-col justify-center relative"
          >
            <div className="absolute top-6 right-8 text-gold/20">
              <Heart size={80} fill="currentColor" />
            </div>
            <p className="text-xl italic font-serif leading-relaxed mb-8 relative z-10">
              "The attention to detail at Aloha is unmatched. My bridal set was a shimmering dream that lasted my entire honeymoon!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-gold/30 p-1">
                <div className="w-full h-full rounded-full bg-gold/50" />
              </div>
              <div>
                <p className="text-sm font-bold text-gold">Sarah Jenkins</p>
                <p className="text-[10px] uppercase tracking-widest opacity-50">Verified Artist Patron</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Schedule/Booking - 7 cols */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-7 bento-card p-10 flex flex-col md:flex-row gap-10 items-center luxury-glow"
          >
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <h3 className="text-xl font-bold">Fast-Track Booking</h3>
              </div>
              <div className="space-y-3">
                {[
                  { date: 'Oct 24', time: '10:30 AM', status: 'Available' },
                  { date: 'Oct 24', time: '02:00 PM', status: 'Available' },
                  { date: 'Oct 25', time: '09:00 AM', status: 'Popular' },
                ].map((slot, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-luxury-white border border-beige/40">
                    <span className="text-xs font-semibold">{slot.date}, {slot.time}</span>
                    <span className="text-[10px] uppercase font-bold text-gold">{slot.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-end h-full">
              <p className="text-sm opacity-60 mb-6 italic leading-relaxed">
                Skip the consultation for signature sets. Instant confirmation via text.
              </p>
              <Link to="/booking" className="bg-brown text-white py-4 rounded-2xl text-center text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors block shadow-xl shadow-brown/5">
                Quick Book Ritual
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
