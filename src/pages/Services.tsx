import { motion } from 'motion/react';
import { Sparkles, Gem, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { 
    title: 'Apres Gel-X Extension', 
    price: '$75+', 
    duration: '90 Min', 
    desc: 'The gold standard for natural-looking extensions. Includes detailed cuticle work and solid gel color.',
    icon: <Sparkles size={24} />
  },
  { 
    title: 'Russian Manicure', 
    price: '$65+', 
    duration: '75 Min', 
    desc: 'Deep cleaning cuticle technique for a perfectly clean and long-lasting finish. Ideal for strong natural nails.',
    icon: <Gem size={24} />
  },
  { 
    title: 'Bridal Custom Package', 
    price: '$120+', 
    duration: '150 Min', 
    desc: 'Curated consultation, strengthening treatment, and intricate wedding-day art designs.',
    icon: <Sparkles size={24} />
  },
  { 
    title: 'Tropical Spa Pedicure', 
    price: '$55+', 
    duration: '60 Min', 
    desc: 'Sea salt soak, sugar scrub manual massage, and expert polish application with tropical oils.',
    icon: <Sparkles size={24} />
  },
  { 
    title: 'Hand-Painted Custom Art', 
    price: '+$20', 
    duration: '+30 Min', 
    desc: 'Add intricate hand-painted designs to any service. Priced per two accent nails.',
    icon: <Gem size={24} />
  },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-20">
        <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">The Ritual Menu</span>
        <h1 className="text-5xl md:text-7xl font-serif text-brown mb-6">Services & Pricing</h1>
        <p className="max-w-2xl mx-auto text-brown/60 font-light italic">
          Premium care for your hands and feet, utilizing only the world's most reputable gel brands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border border-beige shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
          >
            <div className="text-gold mb-6 group-hover:scale-110 transition-transform inline-block">
              {service.icon}
            </div>
            <h3 className="text-2xl font-serif text-brown mb-4">{service.title}</h3>
            <p className="text-sm text-brown/60 mb-6 leading-relaxed">{service.desc}</p>
            <div className="flex items-center justify-between pt-6 border-t border-beige">
              <span className="text-2xl font-serif text-gold">{service.price}</span>
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-brown/40">
                <Clock size={12} /> {service.duration}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-beige/40 rounded-[40px] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-serif text-brown mb-6">First Time at Aloha?</h2>
          <p className="text-brown/60 mb-8 leading-relaxed">
            We recommend our <strong>New Client Consultation</strong> which includes a baseline health check for your natural nails and a style profile creation.
          </p>
          <Link to="/booking" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gold hover:text-brown transition-colors">
            Learn More About Our Process <ArrowRight size={16} />
          </Link>
        </div>
        <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1600232943169-3fe41d6f4d99?auto=format&fit=crop&q=80&w=800" 
            alt="Process" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </motion.div>
  );
}
