"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const SponsorsSection: React.FC = () => {
  const sponsors = [
    { name: "GlobalAid Foundation", width: 140 },
    { name: "United Relief Corp", width: 160 },
    { name: "WorldCare Alliance", width: 150 },
    { name: "HumanFirst Trust", width: 145 },
    { name: "BrightFuture Fund", width: 155 },
    { name: "CommunityBridge", width: 148 },
    { name: "PeaceWorks Global", width: 152 },
    { name: "HopeNet Partners", width: 142 },
  ];

  // Duplicate for seamless loop
  const allSponsors = [...sponsors, ...sponsors];

  return (
    <section className="bg-[#391d47]" style={{ padding: "100px 0" }}>
      <div className="flex flex-col gap-14">
        {/* Title */}
        <AnimatedSection delay={0} className="text-center px-8">
          <p className="font-satoshi font-medium text-white text-[18px] leading-[1.4em]">
            Our supporters worldwide
          </p>
        </AnimatedSection>

        {/* Ticker */}
        <div className="ticker-wrapper">
          <div
            className="ticker-track"
            style={{ gap: "160px", alignItems: "center", opacity: 0.6 }}
          >
            {allSponsors.map((sponsor, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: `${sponsor.width}px`, height: "38px" }}
              >
                <div className="font-geist font-semibold text-white/70 text-lg tracking-tight whitespace-nowrap">
                  {sponsor.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
