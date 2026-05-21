import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/60 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex h-24 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-medium tracking-tight text-text-main scale-y-95">
              made by <span className="text-accent-lime opacity-90">nabas</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-medium text-text-muted">
              <a href="#works" className="hover:text-text-main transition-colors">Works</a>
              <a href="#services" className="hover:text-text-main transition-colors">Services</a>
              <a href="#process" className="hover:text-text-main transition-colors">Process</a>
            </div>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-full bg-text-main text-bg-dark font-medium text-sm hover:bg-white transition-colors"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-text-muted hover:text-text-main"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/5 bg-bg-dark/95 backdrop-blur-xl px-6 py-8 flex flex-col gap-6"
        >
          <a href="#works" onClick={() => setIsOpen(false)} className="text-lg font-medium text-text-muted hover:text-text-main">Works</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-text-muted hover:text-text-main">Services</a>
          <a href="#process" onClick={() => setIsOpen(false)} className="text-lg font-medium text-text-muted hover:text-text-main">Process</a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="w-full py-3 mt-4 rounded-xl bg-text-main text-bg-dark font-medium text-center hover:bg-white transition-colors"
          >
            Start a Project
          </a>
        </motion.div>
      )}
    </nav>
  );
}
