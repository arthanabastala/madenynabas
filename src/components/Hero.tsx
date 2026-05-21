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
          <div className="mb-6 inline-block">
            <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase">made by nabas</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-medium leading-[1.05] tracking-tight">
            Modern websites for brands that want to look <span className="font-accent text-accent-lime text-6xl md:text-7xl lg:text-8xl mt-1 inline-block -rotate-1 opacity-90">premium.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted max-w-lg leading-relaxed font-light mt-2">
            I design landing pages, portfolio websites, business websites, and digital experiences with clean visuals and clear structure.
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end hidden md:flex"
        >
          {/* Minimalist Grid / Art Piece */}
          <div className="w-full max-w-md aspect-[4/5] relative border border-white/[0.04] bg-white/[0.01] overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-lime/[0.03] via-transparent to-transparent group-hover:from-accent-lime/[0.05] transition-colors duration-700"></div>
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>
            <div className="w-full h-full p-8 flex flex-col justify-between mix-blend-difference">
               <div className="w-full flex justify-between">
                 <div className="w-1.5 h-1.5 bg-white/20"></div>
                 <div className="w-1.5 h-1.5 bg-white/20"></div>
               </div>
               <div className="w-full flex justify-between">
                 <div className="w-1.5 h-1.5 bg-white/20"></div>
                 <div className="w-1.5 h-1.5 bg-white/20"></div>
               </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-32 bg-white/10 group-hover:h-40 transition-all duration-700 ease-out"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1px] w-32 bg-white/10 group-hover:w-40 transition-all duration-700 ease-out"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
