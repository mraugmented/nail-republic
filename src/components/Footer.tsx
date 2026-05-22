"use client";

import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-wide text-cream">
                {siteConfig.businessNameFirst}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-cream/40">
                {siteConfig.businessNameSecond}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/40">
              Luxury home remodeling with over {siteConfig.yearsExperience} years of craftsmanship
              serving {siteConfig.regionFull}.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold/70">
              Contact
            </p>
            <div className="space-y-2.5 text-sm text-cream/50">
              <p>
                <a
                  href={siteConfig.phoneHref}
                  className="transition-colors hover:text-cream"
                >
                  {siteConfig.phoneFormatted}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-cream"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                {siteConfig.address}
                <br />
                {siteConfig.cityState}
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold/70">
              Services
            </p>
            <div className="space-y-2.5 text-sm text-cream/50">
              {siteConfig.services.map((service) => (
                <p key={service.title}>{service.title}</p>
              ))}
            </div>
          </div>

          {/* Social & Hours */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold/70">
              Connect
            </p>
            <div className="space-y-2.5 text-sm text-cream/50">
              <p>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cream"
                >
                  Instagram
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cream"
                >
                  Facebook
                </a>
              </p>
              <p className="pt-4 text-xs text-cream/30">
                {siteConfig.hours.daysShort}
                <br />
                {siteConfig.hours.time}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/30">
            &copy; {currentYear} {siteConfig.businessNameFull}. All rights reserved.
          </p>
          <p className="text-xs text-cream/20">
            {siteConfig.contractorLicense}
          </p>
        </div>
      </div>
    </footer>
  );
}
