import { PROFILE_DATA } from '../constants';
import { Container, Section, Reveal } from './Common';
import { motion } from 'motion/react';
import { Rocket, Sparkles } from 'lucide-react';

export const LearningJourney = () => {
  return (
    <Section id="learning">
      <Container>
        <Reveal>
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-violet/20 mb-4">
              <Rocket size={16} className="text-brand-violet" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Continuous Growth</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Learning <span className="text-gradient">Journey</span></h2>
            <p className="text-slate-400">Current roadmaps and areas of active study</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {PROFILE_DATA.learningJourney.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="group space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-300 group-hover:text-brand-cyan transition-colors">{item}</span>
                    <span className="text-slate-500">{70 + (idx * 5)}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${70 + (idx * 5)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-brand-violet to-brand-cyan relative"
                    >
                      <div className="absolute top-0 right-0 h-full w-2 bg-white/30 blur-[2px]" />
                    </motion.div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-violet/10 blur-[100px] rounded-full" />
              <div className="relative premium-card p-8 md:p-12 text-center space-y-8 border-brand-violet/20 bg-brand-violet/[0.03]">
                <div className="w-20 h-20 mx-auto rounded-full glass flex items-center justify-center text-brand-cyan glow-cyan">
                  <Sparkles size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">2026 Focus Area</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Mastering Distributed Systems and High-Level System Design to build resilient production-grade architectures.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 glass rounded-xl border-white/5">
                    <div className="text-lg font-bold text-white">Advanced</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Cloud Native</div>
                  </div>
                  <div className="p-4 glass rounded-xl border-white/5">
                    <div className="text-lg font-bold text-white">Expert</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Spring Dev</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};
