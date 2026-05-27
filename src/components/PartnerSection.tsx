"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const partnerBenefits = [
  {
    icon: "📡",
    title: "Reach 135,000+",
    description: "Get your organization in front of researchers, students, and advocates across 30+ countries.",
  },
  {
    icon: "🤝",
    title: "Mission Alignment",
    description: "Collaborate with a youth-led team that shares your commitment to brain health and dementia awareness.",
  },
  {
    icon: "📰",
    title: "Newsletter Features",
    description: "Be featured in Scientific Horizons — read by 100,000+ professionals across the globe.",
  },
  {
    icon: "🎙️",
    title: "Podcast Spotlights",
    description: "Join the Memory Matters Podcast for expert-led conversations that reach a global audience.",
  },
];

export default function PartnerSection() {
  return (
    <section className="bg-white" style={{ padding: "100px 0" }}>
      <div className="max-w-[1460px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <AnimatedSection delay={0}>
            <div className="flex flex-col gap-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#f9edff] rounded-full px-4 py-2 w-fit mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#9a5999]" />
                  <span className="font-satoshi font-medium text-[#391d47] text-sm tracking-wide">
                    Partnerships
                  </span>
                </div>
                <h2
                  className="font-geist font-semibold text-[#391d47] leading-[1.1em] mb-4"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
                >
                  Partner with Memory Matters
                </h2>
                <p className="font-satoshi font-medium text-[#575757] text-[17px] leading-[1.7em]">
                  Whether you&apos;re a university, research lab, nonprofit, healthcare organization, or company — we&apos;d love to collaborate. Together, we can amplify impact, share knowledge, and build a better future for brain health.
                </p>
              </div>

              {/* Benefits grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {partnerBenefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="bg-[#f9edff] rounded-[20px] p-6 flex flex-col gap-3"
                  >
                    <span className="text-2xl">{benefit.icon}</span>
                    <h4 className="font-geist font-semibold text-[#181618] text-[16px]">
                      {benefit.title}
                    </h4>
                    <p className="font-satoshi font-medium text-[#575757] text-[14px] leading-[1.6em]">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: contact CTA card */}
          <AnimatedSection delay={80}>
            <div
              className="bg-[#391d47] rounded-[28px] p-12 flex flex-col gap-8"
              style={{ boxShadow: "var(--md-elev-2)" }}
            >
              <div>
                <h3
                  className="font-geist font-semibold text-white leading-[1.2em] mb-3"
                  style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
                >
                  Let&apos;s build something meaningful together.
                </h3>
                <p className="font-satoshi font-medium text-white/70 text-[16px] leading-[1.7em]">
                  We&apos;re open to co-sponsorships, joint research initiatives, newsletter features, podcast collaborations, chapter sponsorships, and more. Reach out and let&apos;s talk.
                </p>
              </div>

              {/* Contact options */}
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:memorymatters2025@gmail.com?subject=Partnership Inquiry"
                  className="btn-hover-slide inline-flex items-center gap-3 bg-[#ffd166] text-[#181618] font-geist font-semibold text-[16px] px-8 py-4 rounded-pill w-fit"
                >
                  <span className="btn-text-default">Get in Touch</span>
                  <span className="btn-text-hover">Get in Touch</span>
                  <svg width="16" height="13" viewBox="0 0 24 20" fill="currentColor">
                    <path d="M20 0H4C2.9 0 2 .9 2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" />
                  </svg>
                </a>

                <div className="flex items-center gap-3 text-white/50">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="font-satoshi font-medium text-sm">or reach us directly</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <a
                  href="mailto:memorymatters2025@gmail.com"
                  className="inline-flex items-center gap-2 text-white/70 font-satoshi font-medium text-[15px] hover:text-white transition-colors"
                  style={{ transition: "color 150ms cubic-bezier(0.2,0,0,1)" }}
                >
                  <svg width="16" height="13" viewBox="0 0 24 20" fill="currentColor">
                    <path d="M20 0H4C2.9 0 2 .9 2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" />
                  </svg>
                  memorymatters2025@gmail.com
                </a>
              </div>

              {/* Current partners note */}
              <div className="border-t border-white/10 pt-6">
                <p className="font-satoshi font-medium text-white/50 text-[13px] leading-[1.6em]">
                  Current partners include Stanford Community, Alzheimer&apos;s Association, Lewy Body Resource Center, and Neuravia.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
