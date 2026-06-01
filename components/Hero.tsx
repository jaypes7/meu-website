"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-24 px-4 sm:px-6 hero-grid overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 border-2 border-black bg-white px-3.5 py-2 mb-8 text-xs font-mono font-bold uppercase tracking-wider shadow-[3px_3px_0_#111]"
            >
              <span className="w-2 h-2 bg-[#B6FF00] border border-black rounded-full animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.88] tracking-tight mb-7"
            >
              João
              <br />
              <span className="text-outlined">Pedro</span>
              <br />
              <span className="bg-[#B6FF00] px-2 -ml-1 inline-block mt-1">
                Soares
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-sm sm:text-base font-mono font-semibold mb-5 border-l-4 border-[#B6FF00] pl-4 text-[#333]"
            >
              Full Stack Developer · Front-end JavaScript · Blockchain Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-base sm:text-lg text-[#555] max-w-lg mb-10 leading-relaxed"
            >
              Final-semester Systems Analysis and Development student at Uniube,
              building real-world applications and exploring blockchain
              technologies. I focus on practical software that solves real
              business problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="font-black px-6 py-3 bg-[#B6FF00] border-2 border-black shadow-[4px_4px_0_#111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111] transition-all text-sm uppercase tracking-wide"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="font-black px-6 py-3 bg-white border-2 border-black shadow-[4px_4px_0_#111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111] transition-all text-sm uppercase tracking-wide"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/jaypes7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-black px-6 py-3 bg-black text-[#F7F3E8] border-2 border-black shadow-[4px_4px_0_#B6FF00] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#B6FF00] transition-all text-sm uppercase tracking-wide"
              >
                GitHub ↗
              </a>
            </motion.div>
          </div>

          {/* Right: Code card (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="hidden lg:block"
          >
            <div className="border-2 border-black bg-white shadow-[8px_8px_0_#111] w-64 xl:w-72">
              {/* Title bar */}
              <div className="bg-[#111] border-b-2 border-black px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-white/40 text-xs font-mono ml-1">
                  dev.ts
                </span>
              </div>
              {/* Code */}
              <div className="p-5 font-mono text-sm leading-relaxed">
                <p className="text-[#999] text-xs mb-3">// current status</p>
                <p>
                  <span className="text-[#7C3AED] font-bold">const</span>{" "}
                  <span className="font-semibold">dev</span> ={" "}
                  <span>{"{"}</span>
                </p>
                <div className="pl-4 space-y-1 my-1">
                  <p>
                    <span className="text-[#555]">name:</span>{" "}
                    <span className="text-[#059669]">&quot;João&quot;</span>,
                  </p>
                  <p>
                    <span className="text-[#555]">role:</span>{" "}
                    <span className="text-[#059669]">&quot;full-stack&quot;</span>,
                  </p>
                  <p>
                    <span className="text-[#555]">focus:</span>{" "}
                    <span className="text-[#059669]">&quot;web3&quot;</span>,
                  </p>
                  <p>
                    <span className="text-[#555]">open:</span>{" "}
                    <span className="text-[#B6FF00] font-bold bg-[#111] px-1">
                      true
                    </span>
                  </p>
                </div>
                <p>{"}"}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-[#888]"
        >
          <span>scroll</span>
          <div className="w-px h-8 bg-[#888] animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
