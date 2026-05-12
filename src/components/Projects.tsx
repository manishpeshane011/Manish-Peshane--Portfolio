import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { PROFILE_DATA } from '../constants';
import { Container, Section, Reveal } from './Common';

export const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Featured <span className="text-gradient-brand">Projects</span></h2>
              <p className="text-slate-400 max-w-xl">
                A selection of my recent works involving complex architectures, microservices, and real-time systems.
              </p>
            </div>
            <a href="#" className="flex items-center gap-2 text-brand-cyan font-bold hover:underline">
              See all repositories <ExternalLink size={16} />
            </a>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 auto-rows-fr items-stretch">
          {PROFILE_DATA.projects.map((project, idx) => (
            <Reveal key={idx} delay={idx * 0.2} width="100%">
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative h-full flex flex-col"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-violet rounded-[2rem] blur opacity-0 group-hover:opacity-20 transition duration-500" />
                
                <div className="relative premium-card p-4 overflow-hidden h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-48 md:h-64 w-full rounded-xl overflow-hidden mb-8 shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Tech Chips on Image */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 pr-4">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="px-4 pb-4 space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold group-hover:text-brand-cyan transition-colors">{project.title}</h3>
                      <div className="flex items-center gap-3">
                        <a href={project.github} className="p-2 glass rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                          <Github size={20} />
                        </a>
                        <a href={project.demo} className="p-2 glass rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    <p className="text-slate-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                      <div className="flex -space-x-2">
                        {project.tech.slice(0, 5).map((_, i) => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-navy bg-brand-violet/20 flex items-center justify-center text-[8px] font-bold">
                            <Code2 size={12} />
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-slate-500 font-medium">Build with Modern Stack</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
