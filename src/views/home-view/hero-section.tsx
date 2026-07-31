"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown, MessageCircle, Phone } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";

const orbitTech = [
  {
    name: "Three.js",
    className: "top-2 left-1/2 -translate-x-1/2 border-amber-500/30 text-amber-300",
    duration: 6,
  },
  {
    name: "GSAP",
    className: "right-0 top-[22%] border-amber-500/30 text-amber-300",
    duration: 5,
  },
  {
    name: "React",
    className: "right-2 bottom-[22%] border-pink-500/30 text-pink-300",
    duration: 4,
  },
  {
    name: "Tailwind",
    className: "bottom-2 left-1/2 -translate-x-1/2 border-cyan-500/30 text-cyan-300",
    duration: 5,
  },
  {
    name: "TypeScript",
    className: "left-0 bottom-[28%] border-indigo-500/30 text-indigo-300",
    duration: 6,
  },
  {
    name: "Next.js",
    className: "left-0 top-[22%] border-blue-500/30 text-blue-300",
    duration: 5,
  },
];

const pulse = (duration: number) => ({
  animate: { scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] },
  transition: { duration, repeat: Infinity },
});

type Star = { left: string; top: string; duration: number };

export default function HeroSection() {
  // Use deterministic positions so the server and client render the same stars.
  const stars: Star[] = Array.from({ length: 90 }, (_, i) => ({
    left: `${(i * 37.13) % 100}%`,
    top: `${(i * 61.79) % 100}%`,
    duration: 2 + (i % 4),
  }));

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#05070D] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#05070D] to-slate-900" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.18) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Glow Left */}
      <motion.div
        {...pulse(8)}
        className="absolute left-0 top-0 h-100 w-100 -translate-x-1/2 rounded-full bg-cyan-500 blur-[160px]"
      />

      {/* Glow Right */}
      <motion.div
        {...pulse(10)}
        className="absolute right-0 bottom-0 h-100 w-100 translate-x-1/2 rounded-full bg-indigo-600 blur-[160px]"
      />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star, i) => (
          <motion.span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white"
            style={{ left: star.left, top: star.top }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: star.duration, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative z-10 mt-15 mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 py-20 lg:flex-row lg:gap-12">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span>Available for Frontend & Full-Stack Development Roles · Dubai</span>
          </div>

          <h1 className="mt-7 text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Melva
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Frontend Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I build modern, scalable, SEO-friendly web applications using
            React, Next.js, TypeScript and Tailwind CSS with beautiful UI,
            smooth animations and excellent user experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition-all hover:scale-105"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/assets/resume/Melva Arulsamy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 transition hover:border-cyan-500 hover:bg-slate-900"
            >
              <Download size={18} />
              Get My Resume
            </Link>
          </div>

          <div className="mt-10 flex gap-4">
            <Link
              href="https://linkedin.com/in/melvaarulsamy"
              target="_blank"
              className="rounded-full border border-slate-700 p-3 transition hover:border-cyan-500 hover:text-cyan-400"
            >
              <CiLinkedin size={20} />
            </Link>
            <Link
              href="mailto:dominicmelva710@gmail.com"
              className="rounded-full border border-slate-700 p-3 transition hover:border-cyan-500 hover:text-cyan-400"
            >
              <Mail size={20} />
            </Link>
            <Link
              href="https://wa.me/971502184190"
              target="_blank"
              className="rounded-full border border-slate-700 p-3 transition hover:border-cyan-500 hover:text-cyan-400"
            >
              <MessageCircle size={20} />
            </Link>
            <Link
              href="tel:+971502184190"
              className="rounded-full border border-slate-700 p-3 transition hover:border-cyan-500 hover:text-cyan-400"
            >
              <Phone size={20} />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square w-full max-w-[400px] shrink-0 sm:max-w-[460px] lg:max-w-[520px]"
        >
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[4%] rounded-full border border-amber-500/20"
          />

          {/* Middle Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[25%] rounded-full border border-dashed border-cyan-500/15"
          />

          {/* Glow */}
          <div className="absolute inset-[35%] rounded-full bg-gradient-to-br from-indigo-600/30 via-cyan-500/20 to-transparent blur-3xl" />

          {/* Center */}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-[15%] flex flex-col items-center justify-center rounded-full border border-white/5 bg-gradient-to-br from-slate-900 via-[#0B1120] to-black shadow-[0_0_80px_rgba(34,211,238,.18)]"
          >
            <h2 className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-5xl font-black text-transparent sm:text-6xl lg:text-7xl">
              1.5+
            </h2>

            <p className="mt-2 text-lg font-semibold tracking-[0.3em] text-slate-400 sm:text-xl lg:text-2xl">
              YEARS EXP
            </p>

            <div className="mt-5 h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent sm:w-24" />

            <p className="mt-5 text-center text-sm leading-6 text-slate-500">
              Professional
              <br />
              Frontend Development
            </p>
          </motion.div>

          {/* Tech Pills */}
          {orbitTech.map((tech) => (
            <motion.div
              key={tech.name}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: tech.duration, repeat: Infinity }}
              className={`absolute rounded-2xl border bg-[#0B0F18]/90 px-4 py-2 text-sm font-semibold backdrop-blur-xl shadow-lg sm:px-6 sm:py-3 sm:text-base lg:text-lg ${tech.className}`}
            >
              {tech.name}
            </motion.div>
          ))}

          {/* Small Decorative Circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[4%]"
          >
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-amber-400 shadow-lg shadow-amber-400/60" />
            <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={34} className="text-cyan-400" />
      </motion.div>
    </section>
  );
}