import { motion } from 'motion/react';
import { Send, MapPin, Mail, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';
import { PROFILE_DATA } from '../constants';
import { Container, Section, Reveal } from './Common';

export const Contact = () => {
  return (
    <Section id="contact" className="bg-[#03081c]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20">
          <Reveal>
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">Get In <span className="text-brand-cyan">Touch</span></h2>
                <p className="text-slate-400 max-w-md">
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-violet group-hover:scale-110 transition-transform border-white/5">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Me</div>
                    <a href={PROFILE_DATA.socials.email} className="text-lg font-bold hover:text-brand-cyan transition-colors">manishpeshane011@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform border-white/5">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Connect</div>
                    <a href={PROFILE_DATA.socials.linkedin} className="text-lg font-bold hover:text-brand-cyan transition-colors">LinkedIn Profile</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-violet group-hover:scale-110 transition-transform border-white/5">
                    <Github size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Follow</div>
                    <a href={PROFILE_DATA.socials.github} className="text-lg font-bold hover:text-brand-cyan transition-colors">GitHub Repositories</a>
                  </div>
                </div>
              </div>

              <div className="pt-12 grid grid-cols-2 gap-4">
                <div className="p-4 md:p-6 glass rounded-2xl border-white/5 text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-white mb-2">100%</div>
                  <div className="text-[8px] md:text-[10px] uppercase font-bold text-slate-500">Response Rate</div>
                </div>
                <div className="p-4 md:p-6 glass rounded-2xl border-white/5 text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-white mb-2">&lt; 24h</div>
                  <div className="text-[8px] md:text-[10px] uppercase font-bold text-slate-500">Turnaround</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="premium-card !p-6 sm:!p-10 relative mt-8 lg:mt-0">
              <div className="absolute top-0 right-10 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-brand-violet flex items-center justify-center shadow-lg shadow-brand-violet/30">
                <MessageSquare size={24} className="text-white md:hidden" />
                <MessageSquare size={32} className="text-white hidden md:block" />
              </div>
              
              <form className="space-y-6 pt-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors text-white placeholder:text-slate-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Email</label>
                    <input type="email" placeholder="Your @email.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors text-white placeholder:text-slate-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">Subject</label>
                  <input type="text" placeholder="Project Inquiry" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors text-white placeholder:text-slate-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">Message</label>
                  <textarea rows={5} placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors text-white placeholder:text-slate-600 resize-none" />
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-brand-violet to-brand-cyan text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-brand-violet/20">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Footer Branding */}
      <Container className="mt-32 pt-12 border-t border-white/5 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-display font-bold text-white">
            MANISH<span className="text-brand-cyan">.</span>
          </div>
          <div className="text-sm text-slate-500 font-medium">
            &copy; 2026 Manish Peshane. Engineered for Excellence.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Resume.pdf</a>
          </div>
        </div>
      </Container>
    </Section>
  );
};
