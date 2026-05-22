"use client";

import AnimateIn from "./AnimateIn";
import { siteConfig } from "@/config/site";

export default function Process() {
  return (
    <section id="process" className="bg-charcoal py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Our Process
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl">
            How we work.
          </h2>
        </AnimateIn>

        {/* Steps */}
        <div className="mt-20 grid gap-px bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.process.map((step, i) => (
            <AnimateIn key={step.number} delay={0.15 + i * 0.1}>
              <div className="relative bg-charcoal p-8 lg:p-10">
                {/* Number */}
                <span className="font-serif text-6xl font-light text-cream/8">
                  {step.number}
                </span>

                {/* Gold accent dot */}
                <div className="my-6 h-1.5 w-1.5 rounded-full bg-gold" />

                <h3 className="font-serif text-2xl font-semibold text-cream">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/50">
                  {step.description}
                </p>

                {/* Arrow connector on desktop */}
                {i < siteConfig.process.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                    <svg
                      className="h-4 w-4 text-gold/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 4l8 8-8 8"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
