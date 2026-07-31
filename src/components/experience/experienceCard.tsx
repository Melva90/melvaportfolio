"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Building2,
  MapPin,
  ArrowRight,
} from "lucide-react";

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  employment: string;
  workMode: string;
  country: string;
  technologies: string[];
  achievements: string[];
}

interface Props {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative lg:pl-24"
    >
      {/* Timeline Dot */}

      <div className="absolute left-0 top-10 hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-[#0B1220] shadow-[0_0_40px_rgba(34,211,238,.35)]">
        <div className="h-4 w-4 rounded-full bg-cyan-400" />
      </div>

      {/* Number */}

      <div className="relative left-10 top-0 hidden text-7xl font-black text-white/[0.05] lg:block">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Card */}

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-500/30">

        {/* Hover Glow */}

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Header */}

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

          <div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">

              <div className="flex items-center gap-2">
                <CalendarDays size={15} />
                {experience.duration}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={15} />
                {experience.location}
              </div>

            </div>

            <h3 className="mt-5 text-3xl font-bold">
              {experience.company}
            </h3>

            <p className="mt-2 text-lg text-slate-400">
              {experience.role}
            </p>

          </div>

          {/* Badges */}

          <div className="flex flex-wrap gap-3">

            <Badge color="emerald">
              {experience.employment}
            </Badge>

            <Badge color="amber">
              {experience.workMode}
            </Badge>

            <Badge color="cyan">
              {experience.country}
            </Badge>

          </div>
        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Achievements */}

        <div className="space-y-5">

          {experience.achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: i * 0.08,
              }}
              className="flex items-start gap-4"
            >
              <ArrowRight
                size={18}
                className="mt-1 text-cyan-400"
              />

              <p className="leading-8 text-slate-300">
                {item}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Tech Stack */}

        <div className="mt-10 flex flex-wrap gap-3">

          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Bottom Accent */}

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700 group-hover:w-full" />

      </div>
    </motion.div>
  );
}

function Badge({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "emerald" | "amber" | "cyan";
}) {
  const styles = {
    emerald:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",

    amber:
      "border-amber-500/30 bg-amber-500/10 text-amber-300",

    cyan:
      "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  };

  return (
    <span
      className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider ${styles[color]}`}
    >
      {children}
    </span>
  );
}