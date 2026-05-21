import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden flex items-center">
      <div className="mx-auto max-w-7xl px-8 w-full relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex py-1.5 px-4 rounded-full border border-white/[0.06] bg-white/[0.02] w-fit mb-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase">made by nabas</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight">
            Modern websites for brands that want to look <span className="font-accent text-accent-lime text-6xl md:text-7xl lg:text-8xl mt-1 inline-block -rotate-1 opacity-90">premium.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted max-w-lg leading-relaxed font-light mt-2">
            I design landing pages, portfolio websites, and digital experiences with clean visuals and strategic structure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-8">
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-accent-lime text-bg-dark font-medium hover:bg-white transition-all duration-300 group"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#works" 
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-transparent border border-white/10 text-text-main font-medium hover:bg-white/5 transition-all duration-300"

            >
              View Works
            </a>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end"
        >
          {/* Mockup Container */}
          <div className="w-full max-w-lg rounded-2xl border border-white/[0.06] bg-card-dark shadow-2xl overflow-hidden shadow-black/80 transition-transform duration-700">
            {/* Browser Header */}
            <div className="h-12 border-b border-white/[0.04] flex items-center px-5 gap-3 bg-white/[0.01]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="mx-auto px-4 py-1.5 rounded-md bg-transparent border border-white/[0.04] text-[10px] uppercase tracking-widest text-text-muted flex-1 max-w-[200px] text-center truncate">
                premium-brand.com
              </div>
            </div>
            {/* Browser Content Stub */}
            <div className="p-10 pb-16 flex flex-col gap-6">
              <div className="w-3/4 h-8 bg-white/10 rounded-md" />
              <div className="w-full h-3 bg-white/5 rounded-sm" />
              <div className="w-5/6 h-3 bg-white/5 rounded-sm" />
              <div className="w-1/3 h-10 bg-white/10 rounded-full mt-6" />
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="h-28 bg-white/[0.03] rounded-xl border border-white/[0.04]" />
                <div className="h-28 bg-white/[0.03] rounded-xl border border-white/[0.04]" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
