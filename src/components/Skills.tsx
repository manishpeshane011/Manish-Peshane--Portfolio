import { PROFILE_DATA } from '../constants';
import { Container, Section, Reveal } from './Common';
import { motion } from 'motion/react';

export const Skills = () => {
  return (
    <Section id="skills" className="bg-[#03081c]">
      <Container>
        <Reveal>
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">Tech <span className="text-brand-violet">Stack</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              My technical expertise spans across the entire full-stack ecosystem with a heavy focus on backend scalability and security.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr items-stretch">
          {PROFILE_DATA.skills.map((category, idx) => (
            <Reveal key={idx} delay={idx * 0.1} width="100%">
              <div className="premium-card h-full flex flex-col group">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">{category.category}</h3>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-cyan font-bold text-xs ring-1 ring-white/10">
                    {category.skills.length}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1.5 rounded-lg glass text-xs font-semibold text-slate-400 group-hover:text-white group-hover:border-brand-violet/50 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          {/* Soft Skills Card (Normalized Look) */}
          <Reveal delay={0.5} width="100%">
            <div className="premium-card h-full bg-gradient-to-br from-brand-violet/20 to-transparent border-brand-violet/30 flex flex-col group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Soft Skills</h3>
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-brand-cyan font-bold text-xs ring-1 ring-white/10">
                  4
                </div>
              </div>
              
              <div className="space-y-4 mt-auto">
                {["Production Debugging", "Team Collaboration", "Problem Solving", "Interview Confidence"].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};
