import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Plus, List, Bell, User, HelpCircle, AlertCircle, Share2 } from 'lucide-react';
import { MapView } from '../components/MapView';
import { useItems } from '../hooks/useItems';

export const Home: React.FC = () => {
  const { items } = useItems();
  const [activeTab, setActiveTab] = React.useState<'lost' | 'found'>('lost');

  const filteredItems = items.filter(item => item.type === activeTab);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-black p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tighter uppercase italic">
            Reencontrar.
          </h1>
          <div className="flex gap-4">
            <button className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <button className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 space-y-8">
        {/* HERO SECTION */}
        <section className="bg-black text-white p-8 space-y-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
            Perdeu algo? <br />
            Encontramos juntos.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl font-light">
            A plataforma inteligente que cruza dados geolocalizados para reunir você ao que é importante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-white text-black px-8 py-4 font-bold uppercase hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
              <AlertCircle size={20} />
              Perdi Algo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 font-bold uppercase hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
              <Share2 size={20} />
              Achei Algo
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: MAP/LIST */}
          <div className="lg:col-span-8 space-y-6">
             {/* TABS */}
             <div className="flex border-b-2 border-zinc-200 gap-8">
               <button 
                onClick={() => setActiveTab('lost')}
                className={`pb-4 px-2 font-black uppercase text-sm border-b-4 transition-all ${activeTab === 'lost' ? 'border-black opacity-100' : 'border-transparent opacity-30 hover:opacity-50'}`}
               >
                 Perdidos no Mapa
               </button>
               <button 
                onClick={() => setActiveTab('found')}
                className={`pb-4 px-2 font-black uppercase text-sm border-b-4 transition-all ${activeTab === 'found' ? 'border-black opacity-100' : 'border-transparent opacity-30 hover:opacity-50'}`}
               >
                 Encontrados Recentemente
               </button>
             </div>

             <div className="aspect-video w-full bg-zinc-100 border-2 border-black overflow-hidden">
                <MapView 
                  markers={items.map(i => ({ position: i.location, title: i.title, type: i.type }))}
                  interactive={false}
                />
             </div>
          </div>

          {/* RIGHT: RECENT LIST */}
          <div className="lg:col-span-4 space-y-6">
             <div className="flex justify-between items-center bg-black text-white p-4">
                <span className="font-bold uppercase text-xs">Alertas Ativos</span>
                <List size={16} />
             </div>
             
             <div className="space-y-4">
                {filteredItems.length === 0 ? (
                  <div className="p-12 border-2 border-dashed border-zinc-300 text-center space-y-4">
                    <HelpCircle size={40} className="mx-auto opacity-20" />
                    <p className="text-zinc-400 text-sm font-light uppercase tracking-widest">Nenhum registro encontrado nesta região</p>
                  </div>
                ) : (
                  filteredItems.map(item => (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={item.id} 
                      className="group border-2 border-black p-4 flex gap-4 hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      <div className="w-20 h-20 bg-zinc-200 border border-black flex-shrink-0">
                        {item.imageUrl && (
                          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                        )}
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                         <div>
                            <span className="text-[10px] font-bold uppercase bg-zinc-100 text-black px-1 leading-none inline-block mb-1 group-hover:bg-white">{item.category}</span>
                            <h3 className="font-bold uppercase leading-tight group-hover:text-white">{item.title}</h3>
                         </div>
                         <div className="flex items-center gap-1 text-[10px] text-zinc-500 uppercase font-light group-hover:text-zinc-400">
                            <MapPin size={10} />
                            <span>São Paulo, SP</span>
                         </div>
                      </div>
                    </motion.div>
                  ))
                )}
             </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-zinc-100 border-t-2 border-black p-8 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-xs uppercase tracking-widest font-bold">
           <div>© 2026 Reencontrar PROJETO.</div>
           <div>Apoio: Defesa Civil & Segurança Privada.</div>
           <div className="md:text-right">Termos / Privacidade / Contato</div>
        </div>
      </footer>

      {/* FAB (Mobile Only Add Button) */}
      <button className="md:hidden fixed bottom-6 right-6 bg-black text-white p-4 shadow-2xl z-50 border-2 border-white">
        <Plus size={24} />
      </button>
    </div>
  );
};
