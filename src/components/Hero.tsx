import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { PROFILE_DATA } from '../constants';
import { Container } from './Common';
import { useEffect, useState } from 'react';
import profileImage from "../assets/manish.jpg";

const TypingEffect = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : 150, 100));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-brand-cyan inline-block min-h-[1.2em]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 lg:pt-20 lg:pb-0 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-violet/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-cyan/10 blur-[120px] rounded-full" />
      
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Top Section on Mobile, Right on Desktop: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-first lg:order-last relative"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-brand-violet/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-brand-cyan/20 animate-[spin_15s_linear_infinite_reverse]" />
              
              <div className="absolute inset-4 rounded-full overflow-hidden glass glow-violet border-2 border-white/20 animate-float">
                <img 
                   src={profileImage}
                  alt="Manish Peshane" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
              </div>

              {/* Floating Tech Badges - Hidden on very small screens for cleaner UI */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 md:top-10 right-0 md:right-0 glass px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl flex items-center gap-2 border-brand-cyan/30"
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-cyan" />
                <span className="text-[10px] md:text-xs font-bold">Spring Boot</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 md:bottom-20 -left-4 md:-left-10 glass px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl flex items-center gap-2 border-brand-violet/30"
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-violet" />
                <span className="text-[10px] md:text-xs font-bold">Java Expert</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Left Content: Intro text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="space-y-6 md:space-y-8 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-brand-violet/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan">Available for hire</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] lg:leading-[0.9] tracking-tighter">
                {PROFILE_DATA.name.split(' ')[0]} <br className="hidden sm:block" />
                <span className="text-gradient">{PROFILE_DATA.name.split(' ')[1]}</span>
              </h1>

              <div className="text-lg md:text-2xl font-medium text-slate-400">
                I build <TypingEffect words={["Scalable Backends", "Secure APIs", "Full Stack Apps", "Microservices"]} />
              </div>

              <p className="text-base md:text-lg text-slate-400 max-w-lg leading-relaxed mx-auto lg:mx-0">
                {PROFILE_DATA.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="#projects" className="group px-6 md:px-8 py-3.5 md:py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-300">
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              <a
  href="/Manish_Peshane_Resume.pdf"
  download="Manish_Resume.pdf"
  className="px-6 md:px-8 py-3.5 md:py-4 glass text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
>
  <Download size={18} />
  Resume
</a>
              </div>

           <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
  
  <a
    href="https://github.com/manishpeshane011"
    target="_blank"
    rel="noreferrer"
    className="text-slate-500 hover:text-white transition-colors"
  >
    <Github size={24} />
  </a>

  <a
    href="https://www.linkedin.com/in/manish-peshane-574637289/"
    target="_blank"
    rel="noreferrer"
    className="text-slate-500 hover:text-white transition-colors"
  >
    <Linkedin size={24} />
  </a>

  <a
    href="mailto:manishpeshane011@gmail.com"
    className="text-slate-500 hover:text-white transition-colors"
  >
    <Mail size={24} />
  </a>

</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
