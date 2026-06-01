"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Coral Translator",
    description:
      "A translation-focused web application built to practice real-world front-end logic, UX, and deployment workflows.",
    tags: ["React", "JavaScript", "Vercel", "Front-end"],
    url: "https://tradutor-coral.vercel.app",
    accent: "#B6FF00",
    status: "live" as const,
  },
  {
    title: "Pratas Website",
    description:
      "A responsive website built for a jewelry/silver-related project, focused on clean presentation and accessible navigation.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    url: "https://jaypes7.github.io/pratas/",
    accent: "#7C3AED",
    status: "live" as const,
  },
  {
    title: "Natural Suplementos",
    description:
      "A digital storefront created for a supplement store, focused on product presentation, usability, and real business needs.",
    tags: ["Next.js", "Front-end", "Vercel", "UI"],
    url: "https://naturalsuplementos.vercel.app/",
    accent: "#FFB000",
    status: "live" as const,
  },
  {
    title: "ERP System",
    description:
      "An internal ERP system being implemented at Manserv to improve communication between departments, increase coordinator visibility, and provide better transparency for clients.",
    tags: ["Full Stack", "ERP", "Business Tools", "Internal Systems"],
    url: "https://refuncapp-demo.vercel.app/dashboard",
    accent: "#00D4FF",
    status: "soon" as const,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#888]">
            03 / Projects
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 leading-tight">
            Things I&apos;ve Built
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group border-2 border-black bg-[#F7F3E8] shadow-[6px_6px_0_#111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#111] transition-all flex flex-col"
            >
              {/* Accent bar */}
              <div
                className="h-2.5 border-b-2 border-black shrink-0"
                style={{ backgroundColor: project.accent }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Title + badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-black leading-tight">{project.title}</h3>
                  {project.status === "live" ? (
                    <span className="shrink-0 text-xs font-mono font-bold bg-[#B6FF00] border border-black px-2 py-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-black rounded-full" />
                      LIVE
                    </span>
                  ) : (
                    <span className="shrink-0 text-xs font-mono font-bold bg-white border border-black/40 px-2 py-0.5 text-[#888]">
                      SANDBOX SOON
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#555] leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono font-semibold border border-black/30 bg-white px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wide border-2 border-black px-4 py-2.5 bg-black text-white hover:bg-[#B6FF00] hover:text-black transition-colors w-fit"
                  >
                    View Project ↗
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wide border-2 border-black/20 px-4 py-2.5 text-[#999] cursor-not-allowed w-fit">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
