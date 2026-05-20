import { motion } from 'motion/react';

const SKILLS = {
  core: [
    { name: 'HTML5', slug: 'html5' },
    { name: 'CSS', slug: 'css' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'React.js', slug: 'react' },
    { name: 'Next js', slug: 'nextdotjs' },
    { name: 'Redux', slug: 'redux' },
    { name: 'TanStack', slug: 'tanstack' }
  ],
  tools: [
    { name: 'Python', slug: 'python' },
    { name: 'Django', slug: 'django' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'Claude', slug: 'anthropic' },
    { name: 'Git', slug: 'git' },
    { name: 'GitHub', slug: 'github' },
    { name: 'Figma', slug: 'figma' },
    { name: 'Notion', slug: 'notion' },
    { name: 'Supabase', slug: 'supabase' }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 flex flex-col md:flex-row md:items-baseline justify-between">
          <div className="flex items-baseline gap-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Stack</h2>
            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest hidden md:block">02 — BENTO GRID</span>
          </div>
        </header>
 
        <div className="space-y-12">
          {/* Core Technologies */}
          <div>
            <span className="text-accent font-mono text-[10px] uppercase tracking-[0.2em] block mb-6 px-1">Core Tech —</span>
            <div className="flex flex-wrap gap-3">
              {SKILLS.core.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ backgroundColor: '#D84315', color: '#000000', borderColor: '#D84315' }}
                  className="bg-[#111] border border-grid px-5 py-3 flex items-center gap-3 group cursor-crosshair transition-colors"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.slug}/ffffff`} 
                    className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:invert transition-all" 
                    alt={skill.name} 
                  />
                  <span className="text-xs md:text-sm font-mono uppercase font-bold tracking-tight">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
 
          {/* Workflow & Tools */}
          <div>
            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em] block mb-6 px-1">Workflow & Tools —</span>
            <div className="flex flex-wrap gap-3">
              {SKILLS.tools.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff' }}
                  className="bg-[#050505] border border-grid px-5 py-3 flex items-center gap-3 group cursor-crosshair transition-colors"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.slug}/ffffff`} 
                    className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:invert transition-all" 
                    alt={skill.name} 
                  />
                  <span className="text-xs md:text-sm font-mono uppercase font-bold tracking-tight">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
