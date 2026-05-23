import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="mx-auto max-w-7xl px-8 flex flex-col items-center text-center">
        
        <motion.div 
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-center gap-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">Have a project in mind?</h2>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed font-light">
            Tell me what kind of website you need. I’ll help turn your idea into a clean, modern, and credible digital presence.
          </p>

          <p className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full bg-white/[0.03] border border-white/10 text-sm text-text-muted">
            <span className="w-2 h-2 rounded-full bg-accent-lime relative">
              <span className="absolute inset-0 rounded-full bg-accent-lime animate-ping opacity-75"></span>
            </span>
            DM “WEBSITE” to discuss your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center sm:w-auto mt-4">
            <a 
              href="https://www.instagram.com/madebynabas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-accent-lime text-bg-dark font-medium hover:bg-white transition-all duration-300 group"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a 
              href="mailto:hello@madebynabas.com"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-transparent border border-white/10 flex-1 sm:flex-none hover:bg-white/5 transition-all duration-300 font-medium"
            >
              Email Me
            </a>
            <a 
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("works");
                if (target) {
                  const navbarHeight = 80;
                  const extraOffset = 20;
                  const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - extraOffset;
                  window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                  });
                }
              }}
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-transparent border border-white/10 flex-1 sm:flex-none hover:bg-white/5 transition-all duration-300 font-medium"
            >
              View Projects
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
