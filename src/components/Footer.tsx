import { Github, Mail, Phone, ArrowUpRight, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-32 px-6 lg:px-24 bg-primary border-t border-grid relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
        <h2 className="text-[30vw] font-black uppercase leading-none select-none tracking-tighter italic">BUILD</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-16 leading-[0.8] italic">
          Let&apos;s Build <br /> <span className="text-accent underline decoration-grid underline-offset-8">Together.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-grid pt-12">
          {/* Contact Links */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase font-bold tracking-widest text-gray-600">Connect</h4>
            <div className="flex flex-col gap-4 font-black text-2xl md:text-3xl uppercase tracking-tighter">
              <a href="mailto:faithokereke26@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors group">
                Email <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="tel:08136896184" className="flex items-center gap-3 hover:text-accent transition-colors group">
                Phone <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="https://github.com/Faith-okereke" target="_blank" className="flex items-center gap-3 hover:text-accent transition-colors group">
                GitHub <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="https://x.com/faith_okereke" target="_blank" className="flex items-center gap-3 hover:text-accent transition-colors group">
                X (Twitter) <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="md:col-start-3 self-end text-center md:text-right">
             <div className="mb-6 flex justify-center md:justify-end gap-10 text-gray-600">
                <a href="https://github.com/Faith-okereke" target="_blank" className="hover:text-accent transition-colors"><Github className="w-6 h-6" /></a>
                <a href="https://x.com/faith_okereke" target="_blank" className="hover:text-accent transition-colors"><Twitter className="w-6 h-6" /></a>
                <a href="mailto:faithokereke26@gmail.com" className="hover:text-accent transition-colors"><Mail className="w-6 h-6" /></a>
                <a href="tel:08136896184" className="hover:text-accent transition-colors"><Phone className="w-6 h-6" /></a>
             </div>
             <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-2">
               Designed by Faith Okereke
             </p>
             <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-600">
               &copy; {currentYear} ALL RIGHTS RESERVED
             </p>
          </div>
        </div>
      </div>
      
      <div className="mt-32 pt-8 flex justify-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-mono text-[10px] uppercase tracking-[1em] font-bold text-gray-800 hover:text-accent transition-colors"
            >
                Back To Top
            </button>
      </div>
    </footer>
  );
}
