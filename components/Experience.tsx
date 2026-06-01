"use client";

import { motion } from "framer-motion";

const traits = [
  {
    title: "Problem Solving",
    desc: "I identify root causes and build tools that directly address them — not workarounds.",
  },
  {
    title: "Business Context",
    desc: "Administrative and technical support roles gave me an operator's mindset alongside a developer's skill set.",
  },
  {
    title: "Autonomy",
    desc: "I scope, plan, and ship projects independently — from design decisions to production deployment.",
  },
  {
    title: "Communication",
    desc: "I communicate clearly with both technical and non-technical stakeholders. TEFL-certified, professional English.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-[#F7F3E8]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#888]">
            04 / Focus
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 leading-tight">
            How I Work
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start">
          {/* Left: Background card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="border-2 border-black bg-[#111] text-[#F7F3E8] p-8 shadow-[6px_6px_0_#B6FF00]">
              <span className="inline-block font-mono text-[#B6FF00] text-xs font-bold uppercase tracking-widest border border-[#B6FF00]/40 px-3 py-1 mb-5">
                Background
              </span>
              <p className="text-[#bbb] leading-relaxed mb-5">
                Before focusing full-time on development, I worked in
                administrative and technical support roles. That experience gave
                me a practical understanding of business operations, workflows,
                and real problems people face day to day.
              </p>
              <p className="text-[#bbb] leading-relaxed">
                I bring that context into every project I build — designing
                software that doesn&apos;t just work technically but actually
                fits the way businesses operate.
              </p>
            </div>
          </motion.div>

          {/* Right: Trait cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="border-2 border-black bg-white p-5 shadow-[4px_4px_0_#111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111] transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-[#B6FF00] border border-black rounded-full" />
                  <h4 className="font-black text-xs uppercase tracking-wider">
                    {trait.title}
                  </h4>
                </div>
                <p className="text-sm text-[#555] leading-relaxed">{trait.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
