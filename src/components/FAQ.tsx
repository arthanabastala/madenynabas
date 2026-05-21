import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do you only do design, or also development?",
    answer: "I do both. I design the website structure and visual interface, and then develop it using modern web technologies to ensure it's fast, responsive, and easy to maintain."
  },
  {
    question: "How long does a website project take?",
    answer: "A standard landing page or portfolio takes about 1-2 weeks. A more complex business website might take 3-4 weeks from brief to launch. Timelines depend on the project scope."
  },
  {
    question: "What do I need to prepare before starting?",
    answer: "You'll need a clear goal, a basic idea of what you want to communicate (content/copy), and any branding assets you already have (logos, colors, photos). If you don't have these, we can discuss them during the brief."
  },
  {
    question: "Can I edit the website myself later?",
    answer: "Yes. Depending on your needs, I can build the website with a content management system (CMS) so you can easily update text, images, and projects without touching any code."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 md:py-40 relative">
      <div className="mx-auto max-w-4xl px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">FAQ</h2>
        </motion.div>

        <div className="flex flex-col gap-0 border-t border-white/[0.05]">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-b border-white/[0.05] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center py-6 md:py-8 text-left focus:outline-none group"
              >
                <span className="text-xl font-medium text-text-main pr-8 group-hover:text-accent-lime transition-colors">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-text-muted transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 md:pb-8 text-text-muted leading-relaxed font-light md:text-lg max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
