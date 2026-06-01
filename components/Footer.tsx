const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jaypes7",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joaopedrossoares1/",
  },
  {
    label: "Email",
    href: "mailto:joaope.ssoares@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F7F3E8] border-t-2 border-black py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-[#666]">
          Built by{" "}
          <span className="font-black text-black">João Pedro Soares</span>
          {" "}· {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="font-mono text-xs font-bold text-[#666] hover:text-black transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
