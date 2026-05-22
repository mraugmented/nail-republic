"use client";

import AnimateIn from "./AnimateIn";
import { siteConfig } from "@/config/site";

export default function Testimonial() {
  return (
    <section className="bg-section-alt py-28 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        {/* Large quotation mark */}
        <AnimateIn>
          <span className="inline-block font-serif text-8xl leading-none text-gold/30 lg:text-9xl">
            &ldquo;
          </span>
        </AnimateIn>

        {/* Quote */}
        <AnimateIn delay={0.15}>
          <blockquote className="-mt-8 font-serif text-2xl font-medium leading-relaxed text-charcoal sm:text-3xl lg:text-4xl lg:leading-snug">
            {siteConfig.testimonial.quote}
          </blockquote>
        </AnimateIn>

        {/* Attribution */}
        <AnimateIn delay={0.25}>
          <div className="mt-10">
            <div className="mx-auto mb-4 h-px w-12 bg-gold" />
            <p className="text-sm font-semibold uppercase tracking-wider text-charcoal">
              {siteConfig.testimonial.author}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-gray">
              {siteConfig.testimonial.project} &mdash; {siteConfig.testimonial.location}
            </p>
          </div>
        </AnimateIn>
      </div>

      {/* Trust badges */}
      <div className="mx-auto mt-24 max-w-3xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {siteConfig.trustBadges.map((badge, i) => (
            <AnimateIn key={badge.label} delay={0.2 + i * 0.1}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-charcoal">
                  {badge.label}
                </p>
                <p className="mt-1 text-xs font-medium text-warm-gray">
                  {badge.sub}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
