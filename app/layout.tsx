import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Pedro Soares — Full Stack Developer",
  description:
    "Full Stack Developer & Blockchain Enthusiast based in Brazil. Building real-world web applications with JavaScript, TypeScript, React, and Next.js. Open to junior front-end, full-stack, and Web3 opportunities.",
  keywords: [
    "João Pedro Soares",
    "Full Stack Developer",
    "Front-end Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Blockchain",
    "Web3",
    "Brazil",
    "Junior Developer",
  ],
  authors: [{ name: "João Pedro Soares" }],
  openGraph: {
    title: "João Pedro Soares — Full Stack Developer",
    description:
      "Full Stack Developer & Blockchain Enthusiast. Building real-world applications and exploring Web3 technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Pedro Soares — Full Stack Developer",
    description:
      "Full Stack Developer & Blockchain Enthusiast. Building real-world applications and exploring Web3 technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#F7F3E8] text-[#111111] antialiased">
        {children}
      </body>
    </html>
  );
}
