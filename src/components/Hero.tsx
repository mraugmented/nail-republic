"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.06)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(201,169,110,0.04)_0%,_transparent_60%)]" />

      {/* Decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-12 top-0 hidden h-32 w-px origin-top bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:block"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-gold-dark"
        >
          Est. {siteConfig.established} &mdash; {siteConfig.city}, {siteConfig.state}
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {siteConfig.businessNameFirst}
          <br />
          Remodeling
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto my-8 h-px w-24 bg-gold"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mx-auto max-w-lg text-lg font-light leading-relaxed text-warm-gray sm:text-xl"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-3 border border-charcoal bg-charcoal px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-transparent hover:text-charcoal"
          >
            View Our Work
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-charcoal/20 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal transition-all duration-300 hover:border-gold hover:text-gold-dark"
          >
            Schedule Consultation
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-warm-gray-light">
            Scroll
          </span>
          <div className="h-8 w-px bg-warm-gray-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}
