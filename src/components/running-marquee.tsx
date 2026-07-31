"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiShadcnui,
  SiHtml5,
  SiCss,
  SiSass,
  SiGit,
  SiGithub,
  SiFigma,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "#FFFFFF" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "SCSS", icon: SiSass, color: "#CC6699" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const marquee = [...skills, ...skills];

export default function SkillsMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#05070D] py-7">

      {/* Top Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#05070D] via-[#05070D] to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#05070D] via-[#05070D] to-transparent" />

      <motion.div
        className="flex w-max gap-4"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {marquee.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
                scale: 1.04,
              }}
              transition={{
                duration: 0.2,
              }}
              className="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900/80 border border-white/5">
                <Icon
                  size={22}
                  style={{ color: skill.color }}
                  className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
              </div>

              {/* Text */}
              <div className="relative">
                <h3 className="text-sm font-semibold text-white">
                  {skill.name}
                </h3>

                <p className="text-[11px] text-slate-400">
                  Professional Experience
                </p>
              </div>

              {/* Animated Bottom Border */}
              <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}