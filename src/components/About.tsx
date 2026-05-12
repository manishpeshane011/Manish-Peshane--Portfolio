import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../constants';
import { Container, Section, Reveal } from './Common';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <Section id="about" className="overflow-hidden">
      {/* Increased container width */}
      <Container className="max-w-7xl w-full">
        
        {/* Better responsive grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-stretch w-full">
          
          {/* Left Content Column */}
          <Reveal className="w-full flex">
            <div className="space-y-8 w-full flex flex-col justify-center">
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  About <span className="text-brand-cyan">Me</span>
                </h2>

                <div className="w-24 h-1.5 bg-brand-violet rounded-full" />
              </div>

              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
                {PROFILE_DATA.about}
              </p>

              {/* Specializations */}
              <div className="grid sm:grid-cols-2 gap-4">
                {PROFILE_DATA.specializations.map((spec, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 glass p-4 rounded-2xl border border-white/5 hover:border-brand-cyan/20 hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-brand-cyan shrink-0"
                    />

                    <span className="text-sm md:text-base font-medium text-slate-200">
                      {spec}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Stats Column */}
          <Reveal delay={0.2} className="w-full h-full">
            
            <div className="relative group w-full h-full">
              
              {/* Premium Glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-brand-violet/20 via-brand-cyan/10 to-brand-violet/20 blur-3xl opacity-60 group-hover:opacity-100 transition-all duration-700" />

              {/* Main Card */}
              <div className="relative premium-card w-full h-full rounded-3xl p-5 sm:p-6 lg:p-8 overflow-hidden border border-white/10 backdrop-blur-xl">
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full h-full">
                  
                  {PROFILE_DATA.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="glass rounded-3xl border border-white/5 min-h-[180px] flex flex-col items-center justify-center text-center p-6 md:p-8 hover:border-brand-cyan/20 hover:bg-white/[0.04] transition-all duration-300"
                    >
                      <div className="text-4xl md:text-5xl font-bold text-white">
                        {stat.value}
                      </div>

                      <div className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}

                  {/* Certification Card */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className="sm:col-span-2 glass rounded-3xl border border-white/5 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-brand-cyan/20 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    
                    <div className="space-y-2 text-center sm:text-left">
                      
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Latest Certification
                      </h3>

                      <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                        Oracle Certified Java Professional
                      </p>
                    </div>

                    {/* OCP Badge */}
                    <div className="relative shrink-0">
                      
                      <div className="absolute inset-0 bg-brand-cyan/20 blur-xl rounded-full" />

                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 flex items-center justify-center">
                        
                        <span className="text-brand-cyan font-bold text-sm md:text-base tracking-wide">
                          OCP
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};