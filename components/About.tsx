"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    emoji: "🎓",
    title: "Systems Analysis & Development",
    desc: "Final-semester student at Uniube",
  },
  {
    emoji: "⛓",
    title: "Blockchain since 2020",
    desc: "Tracking the crypto & Web3 ecosystem",
  },
  {
    emoji: "🛠",
    title: "Real-world delivery",
    desc: "Storefronts, ERP tools, automation systems",
  },
];

const stats = [
  { value: "4+", label: "Projects shipped" },
  { value: "2020", label: "Blockchain interest" },
  { value: "2", label: "Languages" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-[#111111] text-[#F7F3E8]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[#B6FF00] text-xs font-bold uppercase tracking-[0.2em]">
            01 / About
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-10 leading-tight">
            The Developer
            <br />
            Behind the Code
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left: Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-[#bbb] leading-relaxed mb-5">
              I&apos;m João Pedro Soares, a Brazilian developer with hands-on
              experience building real-world projects — including digital
              storefronts, internal business tools, and automation-focused
              systems.
            </p>
            <p className="text-lg text-[#bbb] leading-relaxed mb-10">
              I&apos;ve been following the blockchain ecosystem since 2020 and
              I&apos;m looking for opportunities where I can combine software
              development, Web3, and international collaboration.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-white/10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <p className="text-3xl font-black text-[#B6FF00]">{s.value}</p>
                  <p className="text-xs font-mono text-[#888] mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlights + Languages */}
          <div className="space-y-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="border border-white/10 bg-white/5 p-5 hover:border-[#B6FF00]/50 hover:bg-white/8 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-bold text-white text-sm">{item.title}</h3>
                    <p className="text-xs text-[#888] mt-1 font-mono">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Languages card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="border-2 border-[#B6FF00] bg-[#B6FF00]/8 p-5"
            >
              <h3 className="font-black text-[#B6FF00] text-xs uppercase tracking-widest mb-4">
                Languages
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-sm">Portuguese</span>
                  <span className="text-xs font-mono text-[#888] border border-white/20 px-2 py-0.5">
                    Native
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-sm">English</span>
                  <span className="text-xs font-mono text-[#888] border border-white/20 px-2 py-0.5">
                    Professional · TOEFL
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
