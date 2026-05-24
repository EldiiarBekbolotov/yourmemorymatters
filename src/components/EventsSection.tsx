"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

interface Platform {
  icon: string;
  name: string;
  description: string;
  cta: string;
  href: string;
  bg: string;
}

const EventsSection: React.FC = () => {
  const platforms: Platform[] = [
    {
      icon: "💬",
      name: "Discord",
      description:
        "This is where you will be on top of all announcements! Engage with the founders and the rest of the family! Join Discord first and foremost as you will receive all the latest information as they come!",
      cta: "Join Now!",
      href: "https://discord.gg/yZEz3Pggzs",
      bg: "#5865F2",
    },
    {
      icon: "🎧",
      name: "Podcasts",
      description:
        "Listen to our podcasts focused on dementia! We feature neurologists to discuss causes, risks, prevention, treatment protocols, and more. Community members earn rewards for helping us!",
      cta: "Listen Now!",
      href: "https://open.spotify.com/show/4GzPefyZS0BVY1XPLKpMm7",
      bg: "#1DB954",
    },
    {
      icon: "📸",
      name: "Instagram",
      description:
        "We bring dementia awareness to life through visuals, stories, and the latest discoveries in brain research. We turn complex science into creative, easy-to-understand content that educates and inspires.",
      cta: "Follow Now!",
      href: "https://www.instagram.com/memorymatters.official/",
      bg: "#E1306C",
    },
  ];

  return (
    <section
      id="community"
      className="bg-[#f9edff] overflow-hidden"
      style={{ padding: "0 0 140px" }}
    >
      <div className="max-w-[1460px] mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-14 gap-6">
          <AnimatedSection delay={0}>
            <div>
              <div className="inline-flex items-center gap-2 bg-[#9a5999]/10 rounded-full px-4 py-2 w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-[#9a5999]" />
                <span className="font-satoshi font-medium text-[#9a5999] text-sm">Our Community</span>
              </div>
              <h2
                className="font-geist font-semibold text-[#181618] leading-[1.1em]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                Join us on every platform
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0}>
            <a
              href="/join"
              className="hidden md:inline-block bg-[#391d47] text-white font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-[#391d47]/80 transition-colors whitespace-nowrap"
            >
              Get Involved
            </a>
          </AnimatedSection>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, i) => (
            <AnimatedSection key={i} delay={i * 50}>
              <div className="bg-white rounded-2xl overflow-hidden card-hover flex flex-col h-full">
                {/* Color header */}
                <div
                  className="h-24 flex items-center justify-center"
                  style={{ background: platform.bg }}
                >
                  <span className="text-5xl">{platform.icon}</span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                  <h3
                    className="font-geist font-semibold text-[#181618]"
                    style={{ fontSize: "clamp(20px, 1.8vw, 24px)" }}
                  >
                    {platform.name}
                  </h3>
                  <p className="font-satoshi font-medium text-[#575757] text-[16px] leading-[1.5em] flex-1">
                    {platform.description}
                  </p>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-center font-geist font-semibold text-white text-[17px] px-6 py-3 rounded-pill transition-colors hover:opacity-90"
                    style={{ background: platform.bg }}
                  >
                    {platform.cta}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
