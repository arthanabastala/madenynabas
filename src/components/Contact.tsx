import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-32 py-20 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-8 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-center gap-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">Have a project in mind?</h2>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed font-light">
            Let’s build a website that makes your brand look more modern, credible, and memorable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center sm:w-auto mt-6">
            <a 
              href="https://www.instagram.com/madebynabas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-accent-lime text-bg-dark font-medium hover:bg-white transition-all duration-300 group"
            >
              DM on Instagram
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a 
              href="#"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-transparent border border-white/10 flex-1 sm:flex-none hover:bg-white/5 transition-all duration-300 font-medium"
            >
              Chat on WhatsApp
            </a>
            <a 
              href="mailto:hello@madebynabas.com"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-transparent border border-white/10 flex-1 sm:flex-none hover:bg-white/5 transition-all duration-300 font-medium"
            >
              Email Me
            </a>
          </div>
          <p className="mt-6 md:mt-8 text-sm text-text-muted font-light">
            Available for landing pages, portfolio websites, business websites, and redesign projects.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
