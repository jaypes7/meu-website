"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Front-end",
    accent: "#B6FF00",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML & CSS", "Tailwind CSS"],
  },
  {
    category: "Back-end",
    accent: "#7C3AED",
    skills: ["Node.js", "C#", "REST APIs", "API Integration"],
  },
  {
    category: "Web3 & Blockchain",
    accent: "#00D4FF",
    skills: ["Blockchain Fundamentals", "Crypto Ecosystem", "Web3 Concepts", "DeFi Basics"],
  },
  {
    category: "Tools & Workflow",
    accent: "#FFB000",
    skills: ["Git & GitHub", "Vercel", "Deployment", "Agile Basics"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-[#F7F3E8]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#888]">
            02 / Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 leading-tight">
            What I Work With
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
              className="border-2 border-black bg-white shadow-[6px_6px_0_#111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#111] transition-all"
            >
              {/* Category header */}
              <div
                className="px-4 py-3 border-b-2 border-black"
                style={{ backgroundColor: group.accent }}
              >
                <h3 className="font-black text-black text-xs uppercase tracking-widest">
                  {group.category}
                </h3>
              </div>
              {/* Skills list */}
              <div className="p-4 space-y-1.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 py-1.5 px-3 border border-black/12 bg-[#F7F3E8] font-mono text-xs font-semibold hover:bg-black hover:text-white hover:border-black transition-colors cursor-default select-none"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: group.accent, border: "1px solid #111" }}
                    />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
