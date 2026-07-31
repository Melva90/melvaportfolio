"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Hire Me", href: "#hire-me" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-5 pt-5">
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "border border-cyan-500/20 bg-[#05070D]/85 shadow-2xl backdrop-blur-xl"
              : "border border-white/10 bg-white/5 backdrop-blur-xl"
          } rounded-full`}
        >
          <div className="flex h-16 items-center justify-between px-6">
            {/* Logo */}

            <Link
              href="#home"
              className="text-xl font-black tracking-wide"
            >
              <span className="text-white">Melva</span>
              <span className="text-cyan-400">.</span>
            </Link>

            {/* Desktop */}

            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}

            <Link
              href="#hire-me"
              className="hidden rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-black transition hover:scale-105 lg:block"
            >
              Hire Me
            </Link>

            {/* Mobile */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>

          {mobileOpen && (
            <div className="border-t border-white/10 px-6 py-5 lg:hidden">
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-slate-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}