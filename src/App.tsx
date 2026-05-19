/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import GridBackground from './components/GridBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-primary selection:bg-accent selection:text-primary overflow-x-hidden">
      <CustomCursor />
      <GridBackground />
      
      <div className="relative z-10 w-full max-w-[2000px] mx-auto">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
