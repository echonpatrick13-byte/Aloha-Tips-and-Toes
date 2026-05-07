import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    time: '',
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 max-w-4xl mx-auto"
    >
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Secure Your Seat</span>
        <h1 className="text-5xl font-serif text-brown mb-6">Online Reservations</h1>
        <p className="text-brown/60 italic font-light">Choose your preferred ritual and time below.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center items-center gap-4 mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all",
              step >= s ? "bg-gold text-white" : "bg-beige text-brown/40"
            )}>
              {s}
            </div>
            {s < 3 && <div className={cn("w-12 h-0.5", step > s ? "bg-gold" : "bg-beige")} />}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-beige relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gold/10" />
        
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.form
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleNext}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif text-brown mb-8 flex items-center gap-3">
                <CalendarIcon className="text-gold" /> Select Your Ritual
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Gel-X Extension', 'Russian Manicure', 'Bridal Package', 'Spa Pedicure'].map((s) => (
                  <label key={s} className={cn(
                    "p-6 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center",
                    formData.service === s ? "border-gold bg-gold/5" : "border-beige hover:border-gold/50"
                  )}>
                    <span className="font-semibold text-brown">{s}</span>
                    <input 
                      type="radio" 
                      name="service" 
                      className="hidden" 
                      onChange={() => setFormData({...formData, service: s})} 
                      required 
                    />
                    {formData.service === s && <CheckCircle2 size={20} className="text-gold" />}
                  </label>
                ))}
              </div>
              <button type="submit" className="w-full bg-brown text-white py-4 rounded-xl uppercase tracking-widest text-xs font-bold hover:bg-gold transition-colors mt-8">
                Continue to Details
              </button>
            </motion.form>
          )}

          {step === 2 && (
            <motion.form
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleNext}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif text-brown mb-8 flex items-center gap-3">
                <Clock className="text-gold" /> Personal Information
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-brown/50 mb-2 block">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-luxury-white border border-beige p-3 rounded-lg outline-none focus:border-gold" 
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-brown/50 mb-2 block">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full bg-luxury-white border border-beige p-3 rounded-lg outline-none focus:border-gold" 
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-brown/50 mb-2 block">Preferred Date</label>
                  <input 
                    type="date" 
                    required 
                    className="w-full bg-luxury-white border border-beige p-3 rounded-lg outline-none focus:border-gold" 
                  />
                </div>
              </div>
              <div className="flex gap-4 pt-6">
                <button type="button" onClick={() => setStep(1)} className="flex-1 bg-beige text-brown py-4 rounded-xl uppercase tracking-widest text-xs font-bold">Back</button>
                <button type="submit" className="flex-[2] bg-brown text-white py-4 rounded-xl uppercase tracking-widest text-xs font-bold hover:bg-gold transition-colors">Review Booking</button>
              </div>
            </motion.form>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} className="text-gold" />
              </div>
              <h2 className="text-4xl font-serif text-brown mb-4 italic">Thank you, {formData.name.split(' ')[0]}!</h2>
              <p className="text-brown/60 mb-8 max-w-sm mx-auto">
                Your request for <strong>{formData.service}</strong> has been received. We'll send a confirmation email to shortly.
              </p>
              <button onClick={() => window.location.href = '/'} className="bg-gold text-white px-10 py-4 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-brown transition-all">
                Return Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
