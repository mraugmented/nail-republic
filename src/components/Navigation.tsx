"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-wide text-charcoal">
                {siteConfig.businessNameFirst}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-warm-gray">
                {siteConfig.businessNameSecond}
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-charcoal/70 transition-colors hover:text-gold-dark"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Phone + CTA */}
            <div className="hidden items-center gap-6 lg:flex">
              <a
                href={siteConfig.phoneHref}
                className="text-sm font-medium text-charcoal/70 transition-colors hover:text-gold-dark"
              >
                {siteConfig.phoneFormatted}
              </a>
              <a
                href="#contact"
                className="border border-charcoal bg-charcoal px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-cream transition-all hover:bg-transparent hover:text-charcoal"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-[1.5px] w-6 bg-charcoal transition-all duration-300 ${
                  mobileOpen ? "translate-y-[4.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-6 bg-charcoal transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[1.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-cream/98 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="font-serif text-2xl font-medium text-charcoal"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={siteConfig.phoneHref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-4 text-lg font-medium text-gold-dark"
              >
                {siteConfig.phoneFormatted}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
