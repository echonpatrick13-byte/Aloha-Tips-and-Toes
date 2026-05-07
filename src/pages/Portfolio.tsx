import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Maximize2, X } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = ['All', 'Gel Nails', 'Acrylic', 'Minimalist', 'Floral', 'Bridal', 'Luxury Sets'];

const portfolioItems = [
  { id: 1, category: 'Floral', image: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&q=80&w=800', size: 'tall' },
  { id: 2, category: 'Bridal', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800', size: 'wide' },
  { id: 3, category: 'Minimalist', image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800', size: 'square' },
  { id: 4, category: 'Luxury Sets', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800', size: 'tall' },
  { id: 5, category: 'Acrylic', image: 'https://images.unsplash.com/photo-1610992015732-2449b0c26670?auto=format&fit=crop&q=80&w=800', size: 'square' },
  { id: 6, category: 'Gel Nails', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800', size: 'tall' },
  { id: 7, category: 'Floral', image: 'https://images.unsplash.com/photo-1599387737281-893022e23d92?auto=format&fit=crop&q=80&w=800', size: 'wide' },
  { id: 8, category: 'Bridal', image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&q=80&w=800', size: 'square' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Our Visual Journey</span>
        <h1 className="text-5xl md:text-7xl font-serif text-brown mb-6">Gallery of Art</h1>
        <p className="max-w-2xl mx-auto text-brown/60 font-light italic">
          Every set is a story. Explore our recent masterpieces categorized by style and technique.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border",
              activeCategory === cat 
                ? "bg-gold border-gold text-white shadow-lg shadow-gold/20" 
                : "bg-white border-beige text-brown/50 hover:border-gold hover:text-gold"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer",
                item.size === 'tall' ? "aspect-[3/4.5]" : item.size === 'wide' ? "aspect-[16/10]" : "aspect-square"
              )}
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brown/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Maximize2 className="text-white mx-auto mb-2" size={24} />
                  <span className="text-white text-[10px] uppercase tracking-widest block font-bold">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brown/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-gold transition-colors">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
