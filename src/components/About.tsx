"use client";

import AnimateIn from "./AnimateIn";
import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section id="about" className="bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section label */}
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold-dark">
            Our Story
          </p>
        </AnimateIn>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Heading */}
          <div>
            <AnimateIn delay={0.1}>
              <h2 className="font-serif text-4xl font-semibold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
                {siteConfig.about.heading}
              </h2>
            </AnimateIn>
          </div>

          {/* Right: Body text */}
          <div className="flex flex-col justify-center">
            <AnimateIn delay={0.2}>
              <p className="text-lg leading-relaxed text-warm-gray">
                {siteConfig.about.paragraph1}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <p className="mt-6 text-lg leading-relaxed text-warm-gray">
                {siteConfig.about.paragraph2}
              </p>
            </AnimateIn>

            {/* Signature-style element */}
            <AnimateIn delay={0.4}>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-gold" />
                <p className="text-sm font-medium uppercase tracking-widest text-charcoal">
                  {siteConfig.businessNameFull}
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 gap-px bg-cream-dark sm:grid-cols-3">
          {siteConfig.stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={0.2 + i * 0.1}>
              <div className="bg-white p-10 text-center sm:p-12">
                <p className="font-serif text-5xl font-semibold text-charcoal lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-warm-gray">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
