"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const SponsorsSection: React.FC = () => {
  const partners = [
    { name: "Alzheimer's Association", href: "https://www.alz.org/" },
    { name: "Lewy Body Resource Center", href: "https://lewybodyresourcecenter.org/" },
    { name: "Stanford Community", href: "https://community.stanford.edu/" },
    { name: "Neuravia", href: "https://neuravia.tech/about-us/" },
    { name: "Alzheimer's Association", href: "https://www.alz.org/" },
    { name: "Lewy Body Resource Center", href: "https://lewybodyresourcecenter.org/" },
    { name: "Stanford Community", href: "https://community.stanford.edu/" },
    { name: "Neuravia", href: "https://neuravia.tech/about-us/" },
  ];

  return (
    <section className="bg-[#391d47]" style={{ padding: "100px 0" }}>
      <div className="flex flex-col gap-14">
        {/* Title */}
        <AnimatedSection delay={0} className="text-center px-8">
          <p className="font-geist font-semibold text-white text-2xl">
            Our Partners
          </p>
        </AnimatedSection>

        {/* Ticker */}
        <div className="ticker-wrapper">
          <div
            className="ticker-track"
            style={{ gap: "120px", alignItems: "center", opacity: 0.8 }}
          >
            {partners.map((partner, i) => (
              <a
                key={i}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center hover:opacity-100 transition-opacity"
                style={{ minWidth: "180px" }}
              >
                <div className="font-geist font-semibold text-white/80 text-lg tracking-tight whitespace-nowrap hover:text-[#ffd166] transition-colors">
                  {partner.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
