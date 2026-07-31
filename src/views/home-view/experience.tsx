"use client";

import { motion } from "framer-motion";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ExperienceCard from "@/components/experience/experienceCard";
import ExperienceStats from "@/components/experience/experienceStats";
import { experiences } from "@/components/experience/experience-data";

type Particle = { left: string; top: string; duration: number };

export default function Experience() {
  // Use deterministic positions so particles render consistently during SSR and hydration.
  const particles: Particle[] = Array.from({ length: 50 }, (_, index) => ({
    left: `${(index * 37.7) % 100}%`,
    top: `${(index * 61.3) % 100}%`,
    duration: 2 + (index % 4),
  }));

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#05070D] py-20 text-white sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070D] via-[#070A14] to-[#05070D]" />

      {/* Grid */}
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

      {/* Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-0 top-20 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-500 blur-[160px] sm:h-[450px] sm:w-[450px] lg:h-[520px] lg:w-[520px]"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute right-0 bottom-0 h-[340px] w-[340px] translate-x-1/2 rounded-full bg-indigo-600 blur-[160px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute h-[2px] w-[2px] rounded-full bg-cyan-300"
            style={{ left: particle.left, top: particle.top }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 2, 1] }}
            transition={{ duration: particle.duration, repeat: Infinity }}
          />
        ))}
      </div>

      <MaxWidthWrapper className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>
            Career Journey
          </span>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl md:text-6xl">
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Over the last{" "}
            <span className="font-semibold text-white">1.5+ years</span>,
            I&apos;ve built scalable web applications, reusable UI systems,
            production dashboards and modern frontend experiences using
            React, Next.js and TypeScript.
          </p>
        </motion.div>

        {/* Stats */}
        <ExperienceStats />

        {/* Divider */}
        <div className="my-16 flex items-center justify-center sm:my-20 lg:my-24">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          <div className="mx-4 whitespace-nowrap rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs text-cyan-300 sm:mx-8 sm:px-6 sm:text-sm">
            Professional Journey
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-10 max-w-6xl">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute left-6 top-0 hidden w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent lg:block"
          />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${index}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center sm:mt-28 lg:mt-32"
        >
          <h3 className="text-3xl font-bold sm:text-4xl">
            Ready for my next challenge.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl px-4 leading-8 text-slate-400 sm:px-0">
            I&apos;m currently looking for opportunities where I can build
            exceptional digital experiences, collaborate with talented teams,
            and contribute to impactful products.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Work Together
          </a>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}