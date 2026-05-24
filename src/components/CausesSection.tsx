"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

interface Crew {
  title: string;
  description: string;
  href: string;
  color: string;
  emoji: string;
}

const CausesSection: React.FC = () => {
  const crews: Crew[] = [
    {
      title: "Apps Crew",
      description:
        "Build innovative digital tools to support memory care and brain health. From cognition tests to interactive resources for families — design technology that empowers the community.",
      href: "/apps-crew",
      color: "#391d47",
      emoji: "📱",
    },
    {
      title: "eBooks Crew",
      description:
        "Curate, format, and design digital eBooks centered on memory and neuroscience with the potential for going global! Shape narratives and host competitions that bring stories and science to life.",
      href: "/ebooks-crew",
      color: "#9a5999",
      emoji: "📚",
    },
    {
      title: "Podcast Crew",
      description:
        "Bring stories to life through engaging interviews and thoughtful discussions. Connect with experts, caregivers, neurologists, and patients to share real-world experiences and breakthroughs.",
      href: "/podcast-crew",
      color: "#391d47",
      emoji: "🎙️",
    },
    {
      title: "Growth Crew",
      description:
        "Drive the reach and impact of Memory Matters through outreach, strategy, and digital engagement. Build partnerships and ensure meaningful neuroscience conversations reach those who need them most.",
      href: "/growth-crew",
      color: "#9a5999",
      emoji: "🌍",
    },
    {
      title: "Marketing Crew",
      description:
        "Spread the word about Memory Matters far and wide. Craft compelling campaigns, manage social media, and create content that raises awareness and drives engagement.",
      href: "/marketing-crew",
      color: "#391d47",
      emoji: "📣",
    },
  ];

  return (
    <section
      id="crews"
      className="bg-[#f9edff] overflow-hidden"
      style={{ padding: "0 0 140px" }}
    >
      <div className="max-w-[1460px] mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <AnimatedSection delay={0}>
            <div>
              <div className="inline-flex items-center gap-2 bg-[#9a5999]/10 rounded-full px-4 py-2 w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-[#9a5999]" />
                <span className="font-satoshi font-medium text-[#9a5999] text-sm">Make Memory Matter</span>
              </div>
              <h2
                className="font-geist font-semibold text-[#181618] leading-[1.1em] max-w-lg"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                Choose your crew
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0}>
            <a
              href="/crews"
              className="hidden md:inline-block bg-[#391d47] text-white font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-[#391d47]/80 transition-colors"
            >
              View all crews
            </a>
          </AnimatedSection>
        </div>

        {/* Crews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {crews.map((crew, i) => (
            <AnimatedSection key={i} delay={i * 50}>
              <a
                href={crew.href}
                className="bg-white rounded-2xl overflow-hidden card-hover flex flex-col h-full group block"
                style={{ textDecoration: "none" }}
              >
                {/* Color header */}
                <div
                  className="h-20 flex items-center justify-start px-6"
                  style={{ background: crew.color }}
                >
                  <span className="text-4xl">{crew.emoji}</span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                  <h3
                    className="font-geist font-semibold text-[#181618] leading-[1.2em]"
                    style={{ fontSize: "clamp(18px, 1.5vw, 22px)" }}
                  >
                    {crew.title}
                  </h3>
                  <p className="font-satoshi font-medium text-[#575757] text-[16px] leading-[1.5em] flex-1">
                    {crew.description}
                  </p>

                  {/* Learn more link */}
                  <div className="mt-auto pt-4 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    <span className="font-geist font-semibold text-[#391d47] text-[17px]">
                      Learn More
                    </span>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                      <path
                        d="M1 1l6 6-6 6"
                        stroke="#391d47"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
