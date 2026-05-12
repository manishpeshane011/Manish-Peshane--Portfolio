/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ExtraSections } from './components/ExtraSections';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <main className="relative bg-[#020617] selection:bg-brand-violet/30 min-h-screen">
      {/* Dynamic Background Noise */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Ambient background lights */}
      <div className="fixed top-0 left-0 right-0 h-screen overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-violet/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-brand-cyan/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ExtraSections />
        <LearningJourney />
        <Contact />
      </div>
    </main>
  );
}
