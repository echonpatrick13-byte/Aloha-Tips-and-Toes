import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-20">
        <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Get In Touch</span>
        <h1 className="text-5xl md:text-7xl font-serif text-brown mb-6">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-brown/60 font-light italic">
          Questions about our services or need a specialized bridal quote? Reach out to our concierge team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-beige shadow-sm">
              <Phone className="text-gold mb-4" />
              <h3 className="font-bold text-brown uppercase tracking-widest text-xs mb-2">Phone</h3>
              <p className="text-brown/70">(555) 123-4567</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-beige shadow-sm">
              <Mail className="text-gold mb-4" />
              <h3 className="font-bold text-brown uppercase tracking-widest text-xs mb-2">Email</h3>
              <p className="text-brown/70">hello@alohatips.com</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-beige shadow-sm">
            <MapPin className="text-gold mb-4" />
            <h3 className="font-bold text-brown uppercase tracking-widest text-xs mb-2">Location</h3>
            <p className="text-brown/70 mb-4">123 Tropical Lane, Suite 101, Miami, FL 33101</p>
            <div className="aspect-[21/9] rounded-xl bg-beige overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="flex-1 bg-white p-4 rounded-2xl border border-beige flex items-center justify-center gap-3 text-brown uppercase tracking-widest text-[10px] font-bold hover:bg-pink/20 transition-all">
              <Instagram size={18} /> Instagram
            </a>
            <a href="#" className="flex-1 bg-white p-4 rounded-2xl border border-beige flex items-center justify-center gap-3 text-brown uppercase tracking-widest text-[10px] font-bold hover:bg-pink/20 transition-all">
              <Facebook size={18} /> Facebook
            </a>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-beige shadow-2xl">
          <h2 className="text-3xl font-serif text-brown mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-brown/50">Your Name</label>
                <input className="w-full bg-luxury-white border border-beige p-3 rounded-lg outline-none focus:border-gold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-brown/50">Email Address</label>
                <input className="w-full bg-luxury-white border border-beige p-3 rounded-lg outline-none focus:border-gold" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-brown/50">Subject</label>
              <select className="w-full bg-luxury-white border border-beige p-3 rounded-lg outline-none focus:border-gold">
                <option>General Inquiry</option>
                <option>Bridal Quote</option>
                <option>Custom Art Request</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-brown/50">Message</label>
              <textarea rows={5} className="w-full bg-luxury-white border border-beige p-3 rounded-lg outline-none focus:border-gold"></textarea>
            </div>
            <button className="w-full bg-gold text-white py-4 rounded-xl uppercase tracking-widest text-xs font-bold hover:bg-brown transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-brown text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-40 luxury-glow">
        <MessageSquare />
      </button>
    </motion.div>
  );
}
