import { motion, AnimatePresence } from 'motion/react';
import { ArrowDownRight, MessageSquare, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 pt-20 overflow-hidden">
      <div className="z-10 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-accent"></div>
            <span className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] block">
            Frontend Engineer
            </span>
          </div>
          <h1 className="text-[12vw] md:text-[10vw] font-black tracking-tighter leading-[1.2] uppercase">
            Faith <br />
            <span className="text-accent">Okereke</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl border-t border-grid pt-10"
        >
          <p className="text-lg md:text-xl text-gray-400 font-light leading-tight mb-12">
            Computer Science undergraduate <span className="text-white font-medium"></span> building high-performance, type-safe web experiences.
          </p>

          <div className="flex flex-wrap gap-4 items-start">
            <div className="relative">
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent text-black px-10 py-5 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-white flex items-center gap-3"
              >
                Get In Touch
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-full bg-primary border border-grid z-50 overflow-hidden shadow-2xl"
                  >
                    <a
                      href="https://wa.me/2348136896184"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-black transition-colors border-b border-grid last:border-0"
                    >
                      <MessageSquare className="w-4 h-4" />
                      WhatsApp
                    </a>
                    <a
                      href="mailto:faithokereke26@gmail.com"
                      className="flex items-center gap-3 p-4 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-black transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <motion.a
              href="/cv.pdf"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-grid text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-white hover:text-black"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
