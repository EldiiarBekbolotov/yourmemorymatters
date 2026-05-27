"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    outlet: "Stanford University",
    label: "Community Partner",
    description: "Partnering with Stanford's neuroscience community to bridge student research and public education.",
    icon: "🎓",
    href: "#",
  },
  {
    outlet: "Alzheimer's Association",
    label: "Featured Partner",
    description: "Recognized by the Alzheimer's Association for our youth-led awareness and outreach initiatives.",
    icon: "🧠",
    href: "#",
  },
  {
    outlet: "Lewy Body Resource Center",
    label: "Advocacy Partner",
    description: "Amplifying caregiver support resources and Lewy Body dementia awareness nationwide.",
    icon: "💜",
    href: "#",
  },
  {
    outlet: "Neuravia",
    label: "Research Partner",
    description: "Collaborating on neuroscience communications and research dissemination for a global audience.",
    icon: "🔬",
    href: "#",
  },
];

export default function FeaturedInSection() {
  return (
    <section className="bg-[#f9edff]" style={{ padding: "100px 0" }}>
      <div className="max-w-[1460px] mx-auto px-8">
        {/* Header */}
        <AnimatedSection delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#391d47]/8 rounded-full px-4 py-2 w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-[#ffd166]" />
                <span className="font-satoshi font-medium text-[#391d47] text-sm tracking-wide">
                  Recognition & Reach
                </span>
              </div>
              <h2
                className="font-geist font-semibold text-[#391d47] leading-[1.1em]"
                style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
              >
                As Featured & Recognized
              </h2>
            </div>
            <p className="font-satoshi font-medium text-[#575757] text-[16px] leading-[1.6em] max-w-sm">
              From university partnerships to national advocacy organizations, Memory Matters is making waves across the field.
            </p>
          </div>
        </AnimatedSection>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div
                className="bg-white rounded-[28px] p-7 flex flex-col gap-4 h-full card-hover"
                style={{ boxShadow: "var(--md-elev-1)" }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#f9edff] flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-satoshi font-medium text-[#9a5999] text-xs uppercase tracking-widest">
                    {item.label}
                  </span>
                  <h3 className="font-geist font-semibold text-[#181618] text-[17px] leading-[1.3em]">
                    {item.outlet}
                  </h3>
                </div>
                <p className="font-satoshi font-medium text-[#575757] text-[14px] leading-[1.6em] flex-1">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom divider text */}
        <AnimatedSection delay={100}>
          <p className="font-satoshi font-medium text-[#575757]/60 text-sm text-center mt-12">
            Memory Matters is actively expanding — more features and partnerships coming soon.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
