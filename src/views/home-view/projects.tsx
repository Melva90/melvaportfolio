"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/max-width-wrapper";

type Particle = {
  left: string;
  top: string;
  duration: number;
};

const particles: Particle[] = Array.from({ length: 45 }, (_, index) => ({
  left: `${(index * 41.3) % 100}%`,
  top: `${(index * 57.6) % 100}%`,
  duration: 2 + (index % 5),
}));

const projects = [
  {
    title: "NewsCrypto Platform",
    category: "Production Project",
    description:
      "Built scalable React & Next.js applications for a UAE Web3 company with reusable UI components, authentication, SEO optimization, dashboards and API integrations.",

    image:
      "/assets/Newscrypto.jpg",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "React Hook",
      "Wordpress Editor",
    ],

    github: "https://github.com/Melva90/Agency-landing-page",
    live: "https://thenewscrypto.com",
  },

  {
    title: "Agency Landing Page",

    category: "Client Project",

    description:
      "Responsive Agency Landing Page with modern UI, package listings, enquiry forms, animations and optimized user experience. Clean User Dashboard Design and integration.",

    image: "/assets/web3.jpg",

    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Typescript",
      "Framer Motion",
    ],

    github: "https://github.com/Melva90/Agency-landing-page",
    live: "https://ncglobalmedia.com",
  },

  {
    title: "My Portfolio Website",

    category: "Personal",

    description:
      "Modern developer portfolio built with Next.js, reusable components, animations and premium UI following best practices, optimized for performance, and my Professional Skills.",

    image: "/assets/portfolio.jpg",

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Motion",
    ],

    github: "https://github.com/Melva90/My-Portfolio-Website",
    live: "https://melvaportfolio.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#05070D] py-24 text-white"
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
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-0 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500 blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[450px] w-[450px] translate-x-1/2 rounded-full bg-indigo-600 blur-[180px]"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute h-[2px] w-[2px] rounded-full bg-cyan-300"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
            }}
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
            <Sparkles size={16} />
            Featured Work
          </span>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl md:text-6xl">
            Selected{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A collection of production applications, client work and personal
            projects built using modern frontend technologies with focus on
            performance, scalability and user experience.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Image */}

              <div className="relative h-56 overflow-hidden">
                <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-110"
                priority={index === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-black/20 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
                  {project.category}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="mt-8 flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:bg-white/10"
                  >
                    <Code2 size={18} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:scale-105"
                  >
                    Live Demo
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-28 text-center"
        >
          <h3 className="text-3xl font-bold">
            More projects are on GitHub
          </h3>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Explore additional frontend experiments, reusable UI components,
            personal projects and open-source contributions.
          </p>

          <a
            href="https://github.com/Melva90"
            target="_blank"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition-all hover:scale-105"
          >
            <Code2 size={20} />
            Visit GitHub
          </a>
        </motion.div>
      </MaxWidthWrapper>
    </section>
);
}