"use client";

import AnimateIn from "./AnimateIn";
import { siteConfig } from "@/config/site";

export default function Services() {
  return (
    <section id="services" className="bg-section-alt py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold-dark">
            What We Do
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
            Services crafted for the modern home.
          </h2>
        </AnimateIn>

        {/* Service blocks */}
        <div className="mt-20 space-y-0">
          {siteConfig.services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.title}
                className="border-t border-cream-dark last:border-b"
              >
                <div
                  className={`grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-20 lg:py-20 ${
                    isEven ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Text side */}
                  <AnimateIn
                    delay={0.1}
                    direction={isEven ? "left" : "right"}
                    className={isEven ? "lg:order-1" : "lg:order-2"}
                  >
                    <div>
                      <span className="mb-4 inline-block font-serif text-7xl font-light text-cream-dark lg:text-8xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-3xl font-semibold text-charcoal sm:text-4xl">
                        {service.title}
                      </h3>
                      <p className="mt-5 text-base leading-relaxed text-warm-gray lg:text-lg">
                        {service.description}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="border border-warm-gray-light/60 px-4 py-2 text-xs font-medium uppercase tracking-wider text-warm-gray"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimateIn>

                  {/* Image placeholder side */}
                  <AnimateIn
                    delay={0.2}
                    direction={isEven ? "right" : "left"}
                    className={isEven ? "lg:order-2" : "lg:order-1"}
                  >
                    <div className="group relative aspect-[4/3] overflow-hidden bg-cream-dark">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                      <div className="flex h-full items-center justify-center p-8">
                        <div className="text-center">
                          <div className="mb-3 h-px w-12 mx-auto bg-gold/40" />
                          <p className="text-sm font-medium uppercase tracking-widest text-warm-gray/60">
                            {service.title}
                          </p>
                          <p className="mt-1 text-xs text-warm-gray/40">
                            Project photography coming soon
                          </p>
                          <div className="mt-3 h-px w-12 mx-auto bg-gold/40" />
                        </div>
                      </div>
                    </div>
                  </AnimateIn>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
