import { motion } from 'motion/react';

const steps = [
  {
    num: "01.",
    title: "Brief",
    desc: "We discuss your goals, audience, references, and website needs."
  },
  {
    num: "02.",
    title: "Direction",
    desc: "I define the visual direction, content structure, and page flow."
  },
  {
    num: "03.",
    title: "Design",
    desc: "The interface is designed with clean hierarchy and modern aesthetics."
  },
  {
    num: "04.",
    title: "Build",
    desc: "The final website is developed, optimized, and prepared for launch."
  }
];

export function Process() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="mx-auto max-w-7xl px-8">
        
        <motion.div 
          id="process"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">A simple process from idea to launch.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-5 h-full"
            >
              <div className="text-sm font-mono tracking-widest text-text-muted/50">
                {step.num}
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-text-main">{step.title}</h3>
                <p className="text-text-muted leading-relaxed font-light">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
