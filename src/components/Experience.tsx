import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';

const EXPERIENCES = [
  {
    company: "IFNOTGODTECH",
    role: "Frontend Web Developer",
    period: "11/2024 - Present",
    bullets: [
      "Engineered core 'Airport Taxis' and 'Stays' booking engines using Next.js, implementing advanced search, filter, and caching strategies to deliver a seamless user reservation flow.",
      "Built a standalone companion Dashboard application to centralize user data, engineering a 'Bookings Overview' that syncs real-time reservation history from the main web platform.",
      "Designed and deployed a secure admin portal (Itestify) featuring real-time Donation Tracking, user analytics dashboards, and an automated content management system.",
      "Resolved complex TypeScript state management issues across multiple applications, ensuring data consistency and reducing frontend response times by 15%."
    ]
  },
  {
    company: "FREELANCE",
    role: "Frontend Engineer",
    period: "2023 - Present",
    bullets: [
      "Delivered multiple high-performance web applications for diverse clients, focusing on responsive design, SEO optimization, and scalable architecture.",
      "Spearheaded the development of custom UI libraries and reusable components, accelerating project delivery timelines by 20%.",
      "Collaborated closely with designers and stakeholders to translate complex requirements into intuitive, user-centric digital experiences.",
      "Integrated various third-party APIs and services, including payment gateways, CMS platforms, and analytics tools."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 lg:px-24 bg-white/5 border-y border-accent/10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 flex items-baseline justify-between border-b border-grid pb-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Experience</h2>
          <span className="font-mono text-[10px] text-gray-500 hidden md:block">01 — WORK HISTORY</span>
        </header>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-12 border-l-2 border-accent py-2 group">
              <div className="absolute w-4 h-4 bg-accent -left-[9px] top-4 rotate-45 group-hover:scale-125 transition-transform" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-accent uppercase tracking-tight">
                    {exp.company}
                  </h3>
                  <p className="font-mono text-xs text-gray-400 mt-1 uppercase font-bold tracking-widest">
                    {exp.role}
                  </p>
                </div>
                <span className="font-mono text-[10px] bg-[#111] border border-grid px-4 py-2 uppercase font-bold text-gray-400">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-4 max-w-4xl">
                {exp.bullets.map((bullet, bIdx) => (
                  <motion.li
                    key={bIdx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: bIdx * 0.1 }}
                    className="text-sm md:text-base text-gray-400 font-light leading-relaxed italic border-l border-grid pl-6 group-hover:border-accent transition-colors"
                  >
                    // {bullet}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
