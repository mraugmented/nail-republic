"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";
import { siteConfig } from "@/config/site";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <AnimateIn>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold-dark">
                Our Work
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="font-serif text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
                Craftsmanship in
                <br />
                every detail.
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.2}>
            <p className="max-w-sm text-base leading-relaxed text-warm-gray">
              A selection of our recent projects across {siteConfig.regionFull}.
              Each one a testament to quality and vision.
            </p>
          </AnimateIn>
        </div>

        {/* Project grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.portfolio.map((project, i) => (
            <AnimateIn key={project.name} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                {/* Image placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-all duration-500 group-hover:bg-charcoal/40">
                    <span className="translate-y-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View Project
                    </span>
                  </div>
                  {/* Label inside placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-center">
                      <div className="mb-2 h-px w-8 mx-auto bg-gold/30" />
                      <p className="text-xs font-medium tracking-wider text-warm-gray/50">
                        {project.name}
                      </p>
                      <div className="mt-2 h-px w-8 mx-auto bg-gold/30" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5">
                  <h3 className="font-serif text-lg font-semibold text-charcoal">
                    {project.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-warm-gray">
                      {project.location}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    <span className="text-xs font-medium uppercase tracking-wider text-warm-gray">
                      {project.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
