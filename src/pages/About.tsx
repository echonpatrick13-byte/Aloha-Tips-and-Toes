import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800" 
              alt="The Artist" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pink rounded-full -z-0 blur-[60px] opacity-50" />
          <div className="absolute top-10 -left-10 w-32 h-32 border-2 border-gold rounded-full opacity-30" />
        </div>
        
        <div>
          <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">The Brand Story</span>
          <h1 className="text-5xl md:text-6xl font-serif text-brown mb-8">Aloha: A State <br /> of Mind & Art</h1>
          <p className="text-brown/70 leading-relaxed mb-6">
            Founded in 2018 by master artist Leilani Kai, Aloha Tips & Toes began as a small boutique studio in the heart of Miami. Our mission was simple: to bring the meticulous precision of Japanese nail art together with the vibrant, relaxed energy of the tropics.
          </p>
          <p className="text-brown/70 leading-relaxed mb-8">
            We believe that self-care is a ritual, not a chore. Every client who walks through our doors is treated to a personalized experience that prioritizes nail health, artistic expression, and holistic relaxation.
          </p>
          <div className="grid grid-cols-2 gap-8 text-center bg-white p-8 rounded-2xl shadow-sm border border-beige">
            <div>
              <span className="block text-3xl font-serif text-gold mb-1">15+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Years Experience</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-gold mb-1">5k+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Custom Sets</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brown text-white rounded-[40px] p-12 md:p-24 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">"Crafting beauty is a dialogue between the artist and the soul."</h2>
        <p className="max-w-2xl mx-auto opacity-70 font-light mb-12 italic">
          Leilani Kai, Founder & Lead Artist
        </p>
        <div className="w-px h-20 bg-gold/30 mx-auto" />
      </div>
    </motion.div>
  );
}
