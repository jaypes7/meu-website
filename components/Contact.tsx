"use client";

import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "joaope.ssoares@gmail.com",
    display: "joaope.ssoares@gmail.com",
    href: "mailto:joaope.ssoares@gmail.com",
    mono: "✉",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "/in/joaopedrossoares1",
    display: "/in/joaopedrosoares",
    href: "https://www.linkedin.com/in/joaopedrossoares1/",
    mono: "in",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/jaypes7",
    display: "github.com/jaypes7",
    href: "https://github.com/jaypes7",
    mono: "{;}",
    external: true,
  },
  {
    label: "WhatsApp",
    value: "+55 34 99162-8328",
    display: "+55 34 99162-8328",
    href: "https://wa.me/5534991628328",
    mono: "wa",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#111111] text-[#F7F3E8]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-[#B6FF00] text-xs font-bold uppercase tracking-[0.2em]">
            05 / Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4 leading-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-[#888] max-w-lg text-lg leading-relaxed">
            Open to junior front-end, full-stack, and Web3 roles. If you&apos;re
            building something interesting, I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group border border-white/12 bg-white/4 p-6 hover:border-[#B6FF00] hover:bg-white/8 transition-all block"
            >
              <div className="font-mono font-black text-[#B6FF00] text-lg mb-4">
                {link.mono}
              </div>
              <div className="font-black text-white text-xs uppercase tracking-widest mb-2">
                {link.label}
              </div>
              <div className="text-xs font-mono text-[#777] group-hover:text-[#bbb] transition-colors break-all">
                {link.display}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Direct CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="mailto:joaope.ssoares@gmail.com"
            className="font-black text-sm uppercase tracking-wide px-6 py-3.5 bg-[#B6FF00] text-black border-2 border-[#B6FF00] shadow-[4px_4px_0_#B6FF00]/40 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#B6FF00]/40 transition-all"
          >
            Send an Email ↗
          </a>
          <a
            href="https://www.linkedin.com/in/joaopedrossoares1/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black text-sm uppercase tracking-wide px-6 py-3.5 bg-transparent text-white border-2 border-white/30 hover:border-white hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            LinkedIn Profile ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
