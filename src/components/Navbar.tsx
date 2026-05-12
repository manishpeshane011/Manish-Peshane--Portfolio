import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass-dark rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'bg-black/80 shadow-lg border-white/10' : 'bg-transparent border-transparent shadow-none'
        }`}>
          {/* Logo */}
          <a href="#" className="text-xl font-display font-bold text-gradient">
            MP<span className="text-brand-cyan">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Socials & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 pr-4 border-r border-white/10">
              <a href={PROFILE_DATA.socials.github} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-brand-cyan transition-colors">
                <Github size={18} />
              </a>
              <a href={PROFILE_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-brand-cyan transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            <a 
              href="#contact" 
              className="bg-brand-violet hover:bg-brand-violet/80 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-brand-violet/20"
            >
              HIRE ME
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass-dark rounded-3xl p-8 md:hidden z-40 border-white/10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-slate-300 hover:text-brand-cyan"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <a href={PROFILE_DATA.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-cyan">
                    <Github size={20} />
                  </a>
                  <a href={PROFILE_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-cyan">
                    <Linkedin size={20} />
                  </a>
                </div>
                <a 
                  href="#contact" 
                  className="bg-brand-cyan text-black text-xs font-bold px-6 py-2.5 rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HIRE ME
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
