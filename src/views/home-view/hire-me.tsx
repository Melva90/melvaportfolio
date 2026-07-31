"use client";

import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  Mail,
  Phone,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { CiLinkedin } from "react-icons/ci";

import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function HireMe() {
  return (
    <section
      id="hire-me"
      className="relative overflow-hidden bg-[#05070D] py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070D] via-[#070A14] to-[#05070D]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[170px]" />

      <MaxWidthWrapper className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:p-16"
        >
          {/* Heading */}

          <div className="text-center">
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
              Hire Me
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-6xl">
              Why{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Hire Me?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-md leading-8 text-slate-400">
              I&apos;m a Frontend Developer passionate about building modern,
              scalable and high-performance web applications using React,
              Next.js, TypeScript and Tailwind CSS. I enjoy solving
              real-world problems, creating intuitive user experiences and
              delivering production-ready applications.
            </p>
          </div>

          {/* Highlights */}

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              "1.5+ Years Professional Experience",
              "Production Experience in UAE Web3 Company",
              "Immediate Joiner",
              "Strong React • Next.js • TypeScript",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <CheckCircle2 className="text-cyan-400" size={22} />

                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          {/* Social */}

          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <a
              href="https://linkedin.com/in/melvaarulsamy"
              target="_blank"
              className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <CiLinkedin
                className="text-cyan-400 transition group-hover:scale-110"
                size={28}
              />
            </a>

            <a
              href="https://wa.me/971502184190"
              target="_blank"
              className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <MessageCircle
                className="text-cyan-400 transition group-hover:scale-110"
                size={28}
              />
            </a>

            <a
              href="mailto:dominicmelva710@gmail.com"
              className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <Mail
                className="text-cyan-400 transition group-hover:scale-110"
                size={28}
              />
            </a>

            <a
              href="tel:+971502184190"
              className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <Phone
                className="text-cyan-400 transition group-hover:scale-110"
                size={28}
              />
            </a>
          </div>

          {/* Resume */}

          <div className="mt-16 text-center">
            <a
              href="/assets/resume/Melva Arulsamy.pdf"
              download
              className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
            >
              <ArrowDownToLine size={22} />
              Download Resume
            </a>

            <p className="mt-5 text-sm text-slate-500">
              Available for Full-time • Frontend Developer • Immediate Joiner • Dubai, UAE
            </p>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}