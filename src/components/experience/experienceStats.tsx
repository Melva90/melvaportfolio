"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    value: 1.5,
    suffix: "+",
    title: "Years Experience",
  },
  {
    value: 15,
    suffix: "+",
    title: "Production Features",
  },
  {
    value: 25,
    suffix: "+",
    title: "Reusable Components",
  },
  {
    value: 100,
    suffix: "%",
    title: "Responsive UI",
  },
];

export default function ExperienceStats() {
  return (
    <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <motion.div
          key={item.title}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
        >
          {/* Hover Glow */}

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/10 to-indigo-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="relative">
            <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-black text-transparent">
              <CountUp
                end={item.value}
                duration={2.5}
                decimals={item.value % 1 !== 0 ? 1 : 0}
              />
              {item.suffix}
            </h2>

            <p className="mt-3 text-slate-400">
              {item.title}
            </p>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
        </motion.div>
      ))}
    </div>
  );
}