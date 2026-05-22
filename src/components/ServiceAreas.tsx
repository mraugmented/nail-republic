"use client";

import AnimateIn from "./AnimateIn";
import { siteConfig } from "@/config/site";

export default function ServiceAreas() {
  return (
    <section className="bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <div>
            <AnimateIn>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold-dark">
                Service Areas
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="font-serif text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
                Serving {siteConfig.regionFull}.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-warm-gray">
                From the hills of Malibu to the heart of Pasadena, {siteConfig.businessName} brings luxury craftsmanship to communities across
                {" "}{siteConfig.region} County and surrounding areas.
              </p>
            </AnimateIn>
          </div>

          {/* Right: Area tags */}
          <div className="flex items-center">
            <AnimateIn delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {siteConfig.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="border border-cream-dark bg-section-alt px-5 py-2.5 text-sm font-medium text-charcoal/80 transition-colors hover:border-gold/40 hover:text-charcoal"
                  >
                    {area}
                  </span>
                ))}
                <span className="border border-gold/30 bg-gold/5 px-5 py-2.5 text-sm font-medium text-gold-dark">
                  + Surrounding Areas
                </span>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
