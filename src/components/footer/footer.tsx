"use client";

import Link from "next/link";
import {
  GitBranch,
  Mail,
  Phone,
} from "lucide-react";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070D]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">

        {/* Left */}

        <div>
          <h3 className="text-2xl font-black">
            Melva
            <span className="text-cyan-400">.</span>
          </h3>

          <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
            Frontend Developer passionate about building
            modern web applications using React,
            Next.js and TypeScript.
          </p>
        </div>

        {/* Center */}

        <div className="flex gap-8 text-sm text-slate-400">
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#hire-me">Hire Me</Link>
        </div>

        {/* Right */}

        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/melvaarulsamy"
            target="_blank"
            className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <CiLinkedin size={18} />
          </a>

          <a
            href="mailto:dominicmelva710@gmail.com"
            className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <Mail size={18} />
          </a>

          <a
            href="tel:+971502184190"
            className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <Phone size={18} />
          </a>

          <a
            href="https://github.com/Melva90"
            target="_blank"
            className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            <GitBranch size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Melva Arulsamy. All rights reserved.
      </div>
    </footer>
  );
}