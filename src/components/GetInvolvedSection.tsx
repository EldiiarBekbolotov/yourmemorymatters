"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const cards = [
  {
    icon: "🏛️",
    label: "Chapters",
    title: "Start a Chapter",
    description:
      "Bring Memory Matters to your school or community. Lead events, host seminars, and grow a local movement dedicated to brain health and dementia awareness.",
    cta: "Start a Chapter",
    href: "/start-a-chapter",
    bg: "#391d47",
    dark: true,
  },
  {
    icon: "✨",
    label: "Opportunities",
    title: "Explore Opportunities",
    description:
      "Contribute to a newsletter read by 100,000+ professionals, compete in a global tech competition, or submit to our Global eBook Competition — the possibilities are wide open.",
    cta: "View Opportunities",
    href: "/opportunities",
    bg: "#f9edff",
    dark: false,
  },
  {
    icon: "🎙️",
    label: "Crews",
    title: "Join a Crew",
    description:
      "Whether you&apos;re a storyteller, tech builder, social media creator, or growth strategist — there&apos;s a crew for you. Apply to contribute your skills directly.",
    cta: "See Open Crews",
    href: "/crews",
    bg: "#9a5999",
    dark: true,
  },
];

export default function GetInvolvedSection() {
  return (
    <section className="bg-white" style={{ padding: "100px 0" }}>
      <div className="max-w-[1460px] mx-auto px-8">
        {/* Header */}
        <AnimatedSection delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f9edff] rounded-full px-4 py-2 w-fit mb-5 mx-auto">
              <span className="w-2 h-2 rounded-full bg-[#ffd166]" />
              <span className="font-satoshi font-medium text-[#391d47] text-sm tracking-wide">
                Take Action
              </span>
            </div>
            <h2
              className="font-geist font-semibold text-[#391d47] leading-[1.1em] mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
            >
              Get Involved
            </h2>
            <p className="font-satoshi font-medium text-[#575757] text-[18px] leading-[1.6em] max-w-xl mx-auto">
              There are many ways to make memory matter. Find your path and start making an impact today.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div
                className="rounded-[28px] p-10 flex flex-col gap-6 h-full card-hover"
                style={{
                  background: card.bg,
                  boxShadow: "var(--md-elev-1)",
                  minHeight: "380px",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: card.dark ? "rgba(255,255,255,0.12)" : "rgba(57,29,71,0.08)",
                  }}
                >
                  {card.icon}
                </div>

                <div className="flex flex-col gap-2">
                  <span
                    className="font-satoshi font-medium text-xs uppercase tracking-widest"
                    style={{ color: card.dark ? "rgba(255,209,102,0.9)" : "#9a5999" }}
                  >
                    {card.label}
                  </span>
                  <h3
                    className="font-geist font-semibold leading-[1.2em]"
                    style={{
                      fontSize: "clamp(20px, 1.8vw, 26px)",
                      color: card.dark ? "#ffffff" : "#181618",
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

                <p
                  className="font-satoshi font-medium text-[15px] leading-[1.7em] flex-1"
                  style={{ color: card.dark ? "rgba(255,255,255,0.75)" : "#575757" }}
                >
                  {card.description.replace(/&apos;/g, "'")}
                </p>

                <a
                  href={card.href}
                  className="inline-flex items-center gap-2 font-geist font-semibold text-[15px] mt-auto w-fit"
                  style={{
                    color: card.dark ? "#ffd166" : "#391d47",
                    transition: "gap 200ms cubic-bezier(0.2,0,0,1)",
                  }}
                >
                  {card.cta}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke={card.dark ? "#ffd166" : "#391d47"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
