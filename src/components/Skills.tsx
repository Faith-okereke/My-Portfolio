import { motion } from 'motion/react';

const SKILLS = {
  core: ['HTML5', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next js', 'Redux', 'TanStack'],
  tools: ['Python', 'Django', 'MongoDB', 'Git', 'GitHub', 'Figma', 'Notion', 'Supabase']
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-fit">
          {SKILLS.core.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ backgroundColor: '#D84315', color: '#000000' }}
              className="bg-[#111] border border-grid p-6 flex flex-col justify-between aspect-square group cursor-crosshair transition-colors"
            >
               <div className="flex justify-between items-start">
                  <span className="text-gray-600 font-mono text-[10px] uppercase group-hover:text-black/50 transition-colors">Core</span>
                  <img src={`https://cdn.simpleicons.org/${skill.toLowerCase().replace('.js', '').replace(' ', '')}/ffffff`} className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:invert transition-all" alt={skill} />
               </div>
               <span className="text-sm md:text-base font-mono uppercase font-bold tracking-tight">{skill}</span>
            </motion.div>
          ))}
          {SKILLS.tools.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ backgroundColor: '#ffffff', color: '#000000' }}
              className="bg-[#050505] border border-grid p-6 flex flex-col justify-between aspect-square group cursor-crosshair transition-colors"
            >
               <div className="flex justify-between items-start">
                  <span className="text-gray-600 font-mono text-[10px] uppercase group-hover:text-black/50 transition-colors">Tool</span>
                  <img src={`https://cdn.simpleicons.org/${skill.toLowerCase().replace(' ', '')}/ffffff`} className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:invert transition-all" alt={skill} />
               </div>
               <span className="text-sm md:text-base font-mono uppercase font-bold tracking-tight">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
