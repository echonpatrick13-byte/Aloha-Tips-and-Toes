import { useState } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Image as ImageIcon, Calendar, Settings, LogOut, Upload, Trash2, Plus, Star } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('Overview');

  const stats = [
    { label: 'Total Portfolio', value: '142', change: '+12 this month' },
    { label: 'Pending Booking', value: '8', change: 'Action required' },
    { label: 'Monthly Revenue', value: '$12,450', change: '+18% vs last month' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col p-6 space-y-8">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center text-white font-bold">A</div>
          <span className="font-serif font-bold text-brown">Aloha Admin</span>
        </div>
        
        <nav className="flex-1 space-y-1">
          {[
            { name: 'Overview', icon: <LayoutDashboard size={18} /> },
            { name: 'Media Gallery', icon: <ImageIcon size={18} /> },
            { name: 'Appointments', icon: <Calendar size={18} /> },
            { name: 'Settings', icon: <Settings size={18} /> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                activeTab === item.name 
                  ? "bg-brown text-white shadow-lg" 
                  : "text-gray-500 hover:bg-gray-100"
              )}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl transition-all"
        >
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-serif text-brown">{activeTab}</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your salon's digital presence</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-xl text-xs font-bold text-gray-600 hover:border-gold transition-all">
              <Plus size={16} /> New Product
            </button>
            <button className="flex items-center gap-2 bg-gold text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-gold/20 hover:bg-brown transition-all">
              <Upload size={16} /> Upload Media
            </button>
          </div>
        </header>

        {activeTab === 'Overview' && (
          <div className="space-y-12">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-2">{stat.label}</span>
                  <div className="text-3xl font-serif text-brown mb-2">{stat.value}</div>
                  <span className="text-xs text-green-500 font-medium">{stat.change}</span>
                </div>
              ))}
            </div>

            {/* Recent Uploads Grid */}
            <div>
              <h2 className="text-xl font-serif text-brown mb-6 flex items-center gap-2">
                <ImageIcon size={20} className="text-gold" /> Recent Uploads
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="group relative aspect-square bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
                    <img 
                      src={`https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=400&sig=${i}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-lg backdrop-blur-md">
                        <Star size={18} />
                      </button>
                      <button className="p-2 bg-red-500/80 hover:bg-red-600 text-white rounded-lg">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials Management Simulation */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-serif text-brown mb-6">Manage Testimonials</h2>
              <div className="space-y-4">
                {[
                  { name: 'Sarah J.', text: 'Absolutely love my bridal set! Thank you Leilani!', status: 'Featured' },
                  { name: 'Michael R.', text: 'Best pedicure I have ever had. The tropical vibes are real.', status: 'Standard' }
                ].map((t, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-bold text-sm text-brown">{t.name}</p>
                      <p className="text-xs text-gray-500 italic">"{t.text}"</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "text-[10px] uppercase font-bold px-2 py-1 rounded-md",
                        t.status === 'Featured' ? "bg-gold/10 text-gold" : "bg-gray-200 text-gray-400"
                      )}>{t.status}</span>
                      <button className="text-gray-400 hover:text-brown transition-colors">Edit</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'Overview' && (
          <div className="h-[400px] flex flex-col items-center justify-center text-center p-20 bg-white rounded-[40px] border border-dashed border-gray-200">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-4">
              <Plus size={32} />
            </div>
            <h3 className="text-xl font-serif text-gray-400">Section Under Construction</h3>
            <p className="text-sm text-gray-400 mt-2">The {activeTab} module is being optimized for your workflow.</p>
          </div>
        )}
      </main>
    </div>
  );
}
