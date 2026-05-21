import { motion } from 'motion/react';

const services = [
  {
    num: "01",
    title: "Landing Page",
    desc: "One clean page to explain, impress, and convert."
  },
  {
    num: "02",
    title: "Business Website",
    desc: "A professional website for modern small businesses."
  },
  {
    num: "03",
    title: "Portfolio Website",
    desc: "A personal website to present your work with clarity."
  },
  {
    num: "04",
    title: "Website Redesign",
    desc: "Turn outdated websites into modern digital experiences."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 md:py-40 relative border-t border-white/[0.02]">
      <div className="mx-auto max-w-7xl px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">What I Do</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 md:p-12 rounded-[2rem] bg-card-dark border border-white/[0.04] hover:bg-white/[0.02] transition-colors duration-500 flex flex-col gap-8"
            >
              <span className="text-xs font-mono tracking-widest text-text-muted">{service.num}</span>
              <div>
                <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
                <p className="text-text-muted leading-relaxed font-light">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
