import { motion } from 'motion/react';

export function Editorial() {
  return (
    <section className="py-20 md:py-24 relative">
      <div className="mx-auto max-w-4xl px-8 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight text-text-main !leading-[1.1] mb-6">
            Your website shapes how people see your brand.
          </h2>
          <p className="text-base md:text-xl text-text-muted leading-relaxed font-light max-w-2xl mx-auto mb-10">
            A clean website can make your brand feel more credible, modern, and easier to understand before people even contact you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-lime/80" />
              <span className="text-sm font-medium text-text-muted">Clearer first impression</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-lime/80" />
              <span className="text-sm font-medium text-text-muted">Better brand credibility</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-lime/80" />
              <span className="text-sm font-medium text-text-muted">Easier path to contact</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
