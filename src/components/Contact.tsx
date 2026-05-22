"use client";

import AnimateIn from "./AnimateIn";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const projectTypes = siteConfig.services.map((s) => s.title).concat(["Other"]);

  return (
    <section id="contact" className="bg-section-alt py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold-dark">
            Get Started
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
            Schedule your consultation.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-warm-gray">
            Tell us about your project and we&apos;ll get back to you within one
            business day.
          </p>
        </AnimateIn>

        <div className="mt-16 grid gap-16 lg:grid-cols-3 lg:gap-20">
          {/* Form */}
          <AnimateIn delay={0.2} className="lg:col-span-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-cream-dark bg-white px-4 py-3.5 text-sm text-charcoal outline-none transition-colors placeholder:text-warm-gray-light focus:border-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-cream-dark bg-white px-4 py-3.5 text-sm text-charcoal outline-none transition-colors placeholder:text-warm-gray-light focus:border-gold"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-cream-dark bg-white px-4 py-3.5 text-sm text-charcoal outline-none transition-colors placeholder:text-warm-gray-light focus:border-gold"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="project-type"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal"
                  >
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    className="w-full appearance-none border border-cream-dark bg-white px-4 py-3.5 text-sm text-charcoal outline-none transition-colors focus:border-gold"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal"
                >
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="w-full resize-none border border-cream-dark bg-white px-4 py-3.5 text-sm text-charcoal outline-none transition-colors placeholder:text-warm-gray-light focus:border-gold"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal"
                >
                  Preferred Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full appearance-none border border-cream-dark bg-white px-4 py-3.5 text-sm text-charcoal outline-none transition-colors focus:border-gold"
                >
                  <option value="">When would you like to start?</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6+months">6+ months</option>
                  <option value="planning">Just planning</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-4 w-full border border-charcoal bg-charcoal px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-transparent hover:text-charcoal sm:w-auto"
              >
                Request Consultation
              </button>
            </form>
          </AnimateIn>

          {/* Sidebar */}
          <AnimateIn delay={0.3}>
            <div className="space-y-10">
              {/* Address */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  Visit Us
                </p>
                <p className="text-sm leading-relaxed text-charcoal">
                  {siteConfig.address}
                  <br />
                  {siteConfig.cityState}
                </p>
              </div>

              {/* Phone */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  Call Us
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="text-sm font-medium text-charcoal transition-colors hover:text-gold-dark"
                >
                  {siteConfig.phoneFormatted}
                </a>
              </div>

              {/* Email */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  Email Us
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm font-medium text-charcoal transition-colors hover:text-gold-dark"
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Hours */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  Hours
                </p>
                <p className="text-sm leading-relaxed text-charcoal">
                  {siteConfig.hours.days}
                  <br />
                  {siteConfig.hours.time}
                </p>
              </div>

              {/* Social */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-charcoal transition-colors hover:text-gold-dark"
                  >
                    Instagram
                  </a>
                  <span className="text-warm-gray-light">/</span>
                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-charcoal transition-colors hover:text-gold-dark"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
