import { motion } from 'motion/react';

const steps = [
  {
    num: "01.",
    title: "Brief",
    desc: "We define your goal, audience, and website needs."
  },
  {
    num: "02.",
    title: "Direction",
    desc: "I create the visual direction and page structure."
  },
  {
    num: "03.",
    title: "Design",
    desc: "The interface is designed with clean hierarchy and modern aesthetics."
  },
  {
    num: "04.",
    title: "Build",
    desc: "The final website is developed and prepared for launch."
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 md:py-40 relative border-t border-white/[0.02]">
      <div className="mx-auto max-w-7xl px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">How It Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-6"
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
