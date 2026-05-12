import { Container, Section, Reveal } from './Common';
import { Award, Trophy, Star } from 'lucide-react';

const certifications = [
  { name: "Full Stack Java Certified Professional", organization: "Quality Thought", date: "2025" },
  { name: "Spring Boot Microservices and Spring Cloud", organization: "Udemy", date: "2024" },
  { name: "Full Stack Web Development with React", organization: "Coursera", date: "2023" },
];

const achievements = [
  { 
  title: "Published Research Paper", 
  detail: "Successfully published an academic research paper during my B.Tech program.", 
  icon: <Trophy size={20} /> 
},

{ 
  title: "Full-Stack Development", 
  detail: "Developed multiple full-stack applications by integrating modern frontend and backend technologies.", 
  icon: <Star size={20} /> 
},
  { title: "100+ LeetCode Solved", detail: "Maintaining high proficiency in DSA and problem solving.", icon: <Award size={20} /> },
];

export const ExtraSections = () => {
  return (
    <>
      <Section id="certifications">
        <Container>
          <Reveal>
            <div className="space-y-4 mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold">Certifications & <span className="text-brand-violet">Honors</span></h2>
              <p className="text-slate-400">Formal validations of my technical expertise</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-8">
                <Award className="text-brand-cyan" /> Professional Certs
              </h3>
              {certifications.map((cert, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="premium-card !p-6 md:!p-8 group">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div>
                        <div className="text-lg font-bold group-hover:text-brand-cyan transition-colors leading-tight">{cert.name}</div>
                        <div className="text-sm text-slate-500 font-medium mt-1">{cert.organization}</div>
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 bg-white/5 px-3 py-1 rounded-full shrink-0">{cert.date}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-8">
                <Trophy className="text-brand-violet" /> Key Achievements
              </h3>
              {achievements.map((ach, i) => (
                <Reveal key={i} delay={i * 0.1 + 0.3}>
                  <div className="premium-card !p-6 md:!p-8 flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-brand-violet shrink-0">
                      {ach.icon}
                    </div>
                    <div>
                      <div className="text-lg font-bold">{ach.title}</div>
                      <div className="text-sm text-slate-400 leading-relaxed">{ach.detail}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
