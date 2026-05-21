import { motion } from 'motion/react';

export function Editorial() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-8 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-text-main !leading-[1.1] mb-8">
            Your website shapes perception.
          </h2>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light max-w-2xl mx-auto">
            People judge your brand before they contact you. A clean website helps your business look more professional, credible, and memorable.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
