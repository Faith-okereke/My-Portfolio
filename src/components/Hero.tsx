import { motion, AnimatePresence } from 'motion/react';
import { ArrowDownRight, MessageSquare, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 pt-28 pb-16 overflow-hidden">
      <div className="z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
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
            <h1 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] xl:text-[7vw] font-black tracking-tighter leading-[1.1] uppercase">
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
              Computer Science undergraduate building high-performance, type-safe web experiences.
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
                download="Faith_Okereke_CV.pdf"
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

        {/* Right Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full"
        >
          <div className="relative group w-full max-w-[380px] aspect-[4/5] bg-primary border-4 border-grid p-3 bento-card-hover transition-all duration-500">
            {/* Corner Tech Accents */}
            <div className="absolute top-[-4px] left-[-4px] w-4 h-4 border-t-4 border-l-4 border-accent z-20"></div>
            <div className="absolute top-[-4px] right-[-4px] w-4 h-4 border-t-4 border-r-4 border-accent z-20"></div>
            <div className="absolute bottom-[-4px] left-[-4px] w-4 h-4 border-b-4 border-l-4 border-accent z-20"></div>
            <div className="absolute bottom-[-4px] right-[-4px] w-4 h-4 border-b-4 border-r-4 border-accent z-20"></div>

            <div className="relative w-full h-full overflow-hidden border border-grid bg-[#090909]">
              <img
                src="/meee.jpg"
                alt="Faith Okereke Profile"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-color opacity-70 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 pt-16">
                <p className="font-mono text-[10px] tracking-wider text-accent uppercase font-semibold">Faith Okereke</p>
                <p className="text-white text-md font-bold uppercase mt-1">Frontend Engineer</p>
              </div>
            </div>
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
