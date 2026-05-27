"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const crews = [
  {
    emoji: "📱",
    name: "Apps Crew",
    tag: "Tech · AI · Innovation",
    description:
      "Build AI-powered tools for early dementia detection. Compete in a global innovation competition for up to $100K in prizes. For designers, developers, and problem-solvers.",
    applyHref: "https://forms.gle/z5ES3mQfjktE6gib7",
    learnHref: "/apps-crew",
    color: "#391d47",
    spots: "Open",
  },
  {
    emoji: "📚",
    name: "eBooks Crew",
    tag: "Writing · Storytelling · Design",
    description:
      "Create digital educational resources on dementia and Alzheimer's. Shape global eBook anthology entries and transform complex science into compelling stories.",
    applyHref: "https://forms.gle/TZ32zv6wDWiedcJA6",
    learnHref: "/ebooks-crew",
    color: "#9a5999",
    spots: "Open",
  },
  {
    emoji: "🎙️",
    name: "Podcast Crew",
    tag: "Audio · Media · Interviews",
    description:
      "Co-host episodes, conduct interviews with researchers and advocates, and produce audio content that brings memory science to life for a global audience.",
    applyHref: "https://forms.gle/XWR7VydT2ADLpCZf9",
    learnHref: "/podcast-crew",
    color: "#391d47",
    spots: "Open",
  },
  {
    emoji: "🌍",
    name: "Growth Crew",
    tag: "Community · Outreach · Strategy",
    description:
      "Drive the expansion of Memory Matters. Lead community initiatives, grow local chapter programs, and connect us with students, educators, and advocates worldwide.",
    applyHref: "https://forms.gle/rS4ZyJ1gNMdpc9Td7",
    learnHref: "/growth-crew",
    color: "#9a5999",
    spots: "Open",
  },
  {
    emoji: "📣",
    name: "Marketing Crew",
    tag: "Social Media · Branding · Content",
    description:
      "Shape how the world sees Memory Matters. Create campaigns, manage social channels, build our brand voice, and amplify our mission across platforms.",
    applyHref: "https://forms.gle/Jit66UzwJEba2oS19",
    learnHref: "/marketing-crew",
    color: "#391d47",
    spots: "Open",
  },
];

export default function OpenCrewsSection() {
  return (
    <section className="bg-[#391d47]" style={{ padding: "100px 0 120px" }}>
      <div className="max-w-[1460px] mx-auto px-8">
        {/* Header */}
        <AnimatedSection delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="font-satoshi font-medium text-white/80 text-sm tracking-wide">
                  All Positions Open
                </span>
              </div>
              <h2
                className="font-geist font-semibold text-white leading-[1.1em]"
                style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
              >
                Open Crews
              </h2>
            </div>
            <p className="font-satoshi font-medium text-white/60 text-[16px] leading-[1.5em] max-w-sm">
              Pick a crew that matches your skills and passion. Every position is open — apply directly and start contributing.
            </p>
          </div>
        </AnimatedSection>

        {/* Crew grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {crews.slice(0, 3).map((crew, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className="bg-white/10 rounded-[28px] p-8 flex flex-col gap-5 h-full border border-white/8 hover:bg-white/15 transition-colors" style={{ transition: "background-color 150ms cubic-bezier(0.2,0,0,1)" }}>
                {/* Crew header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                      {crew.emoji}
                    </div>
                    <div>
                      <span className="font-satoshi font-medium text-[#ffd166] text-xs uppercase tracking-wider block mb-0.5">
                        {crew.tag}
                      </span>
                      <h3 className="font-geist font-semibold text-white text-[18px]">
                        {crew.name}
                      </h3>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 font-satoshi font-medium text-xs px-2.5 py-1 rounded-full flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {crew.spots}
                  </span>
                </div>

                <p className="font-satoshi font-medium text-white/70 text-[14px] leading-[1.6em] flex-1">
                  {crew.description}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-1">
                  <a
                    href={crew.applyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#ffd166] text-[#181618] font-geist font-semibold text-[13px] px-5 py-2.5 rounded-pill hover:bg-[#ffd166]/90 transition-colors flex-shrink-0"
                    style={{ transition: "background-color 150ms cubic-bezier(0.2,0,0,1)" }}
                  >
                    Apply Now
                  </a>
                  <a
                    href={crew.learnHref}
                    className="font-satoshi font-medium text-white/60 text-[13px] hover:text-white transition-colors"
                    style={{ transition: "color 150ms cubic-bezier(0.2,0,0,1)" }}
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {crews.slice(3).map((crew, i) => (
            <AnimatedSection key={i} delay={(i + 3) * 60}>
              <div className="bg-white/10 rounded-[28px] p-8 flex flex-col gap-5 h-full border border-white/8 hover:bg-white/15 transition-colors" style={{ transition: "background-color 150ms cubic-bezier(0.2,0,0,1)" }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                      {crew.emoji}
                    </div>
                    <div>
                      <span className="font-satoshi font-medium text-[#ffd166] text-xs uppercase tracking-wider block mb-0.5">
                        {crew.tag}
                      </span>
                      <h3 className="font-geist font-semibold text-white text-[18px]">
                        {crew.name}
                      </h3>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 font-satoshi font-medium text-xs px-2.5 py-1 rounded-full flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {crew.spots}
                  </span>
                </div>
                <p className="font-satoshi font-medium text-white/70 text-[14px] leading-[1.6em] flex-1">
                  {crew.description}
                </p>
                <div className="flex items-center gap-4 mt-1">
                  <a
                    href={crew.applyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#ffd166] text-[#181618] font-geist font-semibold text-[13px] px-5 py-2.5 rounded-pill hover:bg-[#ffd166]/90 transition-colors flex-shrink-0"
                    style={{ transition: "background-color 150ms cubic-bezier(0.2,0,0,1)" }}
                  >
                    Apply Now
                  </a>
                  <a
                    href={crew.learnHref}
                    className="font-satoshi font-medium text-white/60 text-[13px] hover:text-white transition-colors"
                    style={{ transition: "color 150ms cubic-bezier(0.2,0,0,1)" }}
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
