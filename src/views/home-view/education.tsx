"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  Calendar,
  MapPin,
  BookOpen,
  BadgeCheck,
  TrophyIcon,
} from "lucide-react";

import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-[#05070D] py-24 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070D] via-[#070A14] to-[#05070D]" />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
          backgroundSize: "48px 48px",
        }}
      />

      <MaxWidthWrapper className="relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            <GraduationCap size={16} />
            Education
          </span>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl">
            Education &
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Achievements
            </span>
          </h2>

          <p className="mt-6 text-slate-400 leading-8">
            My academic background combined with hands-on industry
            experience has helped me build modern, scalable web
            applications and continuously improve my technical skills.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Education */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-3">
                <GraduationCap className="text-cyan-400" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Bachelor of Technology
                </h3>

                <p className="text-cyan-300">
                  Computer Science & Engineering
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-5 text-slate-300">

              <div className="flex items-center gap-3">
                <BookOpen size={18} className="text-cyan-400" />
                SRM Institute of Science & Technology
              </div>

              <div className="flex items-center gap-3">
                <BadgeCheck size={18} className="text-cyan-400" />
                8.9/10 CGPA 
              </div>

              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-cyan-400" />
                2020 – 2024
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-cyan-400" />
                Chennai, Tamil Nadu
              </div>

              <div className="flex items-center gap-3">
                <TrophyIcon size={18} className="text-cyan-400" />
                First Class with Distinction
              </div>

            </div>
          </motion.div>

          {/* Achievements */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-3">
                <Trophy className="text-cyan-400" />
              </div>

              <h3 className="text-2xl font-bold">
                Achievements
              </h3>
            </div>

            <div className="mt-8 space-y-5">

              {[
                "1.5+ Years of Professional Frontend Experience",
                "Worked with a UAE-based Web3 & Cryptocurrency Company",
                "Built & Maintained Production Web Applications",
                "Published Research Paper in Machine Learning",
                "Developed Reusable UI Components & Design Systems",
                "Strong Expertise in React, Next.js & TypeScript",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />

                  <p className="text-slate-300">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </motion.div>

        </div>

        {/* Skills */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {[
            "AI",
            "Machine Learning",
            "Data Structures & Algorithms",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300"
            >
              {skill}
            </span>
          ))}
        </motion.div>

      </MaxWidthWrapper>
    </section>
  );
}