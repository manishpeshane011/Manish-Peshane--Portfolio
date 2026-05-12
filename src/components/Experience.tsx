import { PROFILE_DATA } from '../constants';
import { Container, Section, Reveal } from './Common';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  return (
    <Section id="experience" className="bg-[#03081c]">
      <Container>
        <Reveal>
          <div className="space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">Experience <span className="text-brand-cyan">Timeline</span></h2>
            <div className="w-20 h-1.5 bg-brand-violet rounded-full" />
          </div>
        </Reveal>

        <div className="relative border-l-2 border-white/5 pl-6 md:pl-12 space-y-12 md:space-y-16">
          {PROFILE_DATA.experience.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 0.2}>
              <div className="relative group">
                {/* Dot */}
                <div className="absolute -left-[33px] md:-left-[57px] top-0 w-4 md:w-6 h-4 md:h-6 rounded-full border-2 md:border-4 border-[#03081c] bg-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:scale-125 transition-transform" />
                
                <div className="premium-card max-w-4xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">{exp.company}</h3>
                      <div className="flex items-center gap-2 text-brand-violet font-semibold text-sm">
                        <Briefcase size={14} />
                        {exp.role}
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/5 text-xs font-bold text-slate-400">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.description.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-4 text-slate-400 leading-relaxed">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 pt-8 border-t border-white/5 mt-8">
                    {["Java", "Spring Boot", "Microservices", "REST APIs"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-3 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};


