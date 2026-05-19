import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
   {
    title: "Coach Vision",
    description: "Artificial Intelligence As A Service that VolleyMind — a Python + AI app that watches volleyball videos, tracks your body movements using MediaPipe Pose, calculates joint angles (elbows, knees, hips), and sends that data to Claude to give you personalised coaching feedback on your technique. ",
    tech: ["TypeScript", "MediaPipe Pose", "Python", "Gemini Flash 3"],
    github: "https://github.com/Faith-okereke/Coach-Vision",
    link: "https://coach-vision-sandy.vercel.app/"
  },
  {
    title: "School Board",
    description: "A multi-view web application (student and admin) featuring an interactive events board, user authentication, and secure profile management.",
    tech: ["React", "Django", "MongoDB", "Redux"],
    github: "https://github.com/Faith-okereke/School-Board-Frontend",
    link: "https://school-board-frontend.vercel.app/"
  },
  {
    title: "Easy Life Exchange Landing Page",
    description: "A responsive Landing page with rate calculator for  crypto",
    tech: ["Typescript", "Tailwind CSS", "Vite"],
    github: "https://github.com/Faith-okereke/easylife-exchange",
    link: "https://easylife-exchange.vercel.app/"
  },
  {
    title: "English-Igbo Dictionary",
    description: "A responsive, web-based dictionary application for English-to-Igbo and Igbo-to-English translation with a curated translation dataset.",
    tech: ["Python", "Flask", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Faith-okereke/English-Igbo-Dictionary",
    link: "https://english-igbo-dictionary.netlify.app/"
  },
 
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 flex items-baseline justify-between border-b border-grid pb-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Projects</h2>
          <span className="font-mono text-[10px] text-gray-500 hidden md:block">03 — SHOWCASE</span>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-[#0a0a0a] border border-grid p-8 flex flex-col justify-between group h-[500px] bento-card-hover"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                   <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest">Project 0{idx + 1}</span>
                   <div className="flex gap-4">
                    <a href={project.github} target="_blank" className="text-gray-600 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} className="text-gray-600 hover:text-white transition-colors" target="_blank">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-grid">
                {project.tech.map((t) => (
                  <span key={t} className="text-[9px] font-mono border border-grid px-2 py-1 uppercase text-gray-600 group-hover:border-accent/30 group-hover:text-accent/60 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <a 
              href="https://github.com/Faith-okereke" 
              target="_blank"
              className="inline-flex items-center gap-4 text-xl font-bold uppercase border-b-2 border-accent pb-2 hover:text-accent transition-all group"
            >
                View More on GitHub
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
    )
}
