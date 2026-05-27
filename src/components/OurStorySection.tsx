"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function OurStorySection() {
  return (
    <section className="bg-white" style={{ padding: "100px 0" }}>
      <div className="max-w-[1460px] mx-auto px-8">
        {/* Header */}
        <AnimatedSection delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f9edff] rounded-full px-4 py-2 w-fit mb-5 mx-auto">
              <span className="w-2 h-2 rounded-full bg-[#9a5999]" />
              <span className="font-satoshi font-medium text-[#391d47] text-sm tracking-wide">
                How It All Started
              </span>
            </div>
            <h2
              className="font-geist font-semibold text-[#391d47] leading-[1.1em] mb-4"
              style={{ fontSize: "clamp(32px, 4vw, 54px)" }}
            >
              Our Story
            </h2>
            <p className="font-satoshi font-medium text-[#575757] text-[18px] leading-[1.6em] max-w-2xl mx-auto">
              Every movement starts with a moment. Ours began with a question about memory, loss, and what young people can do about it.
            </p>
          </div>
        </AnimatedSection>

        {/* Story placeholder grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              year: "2024",
              title: "The Idea",
              placeholder: true,
              color: "#f9edff",
              accent: "#391d47",
            },
            {
              year: "2025",
              title: "The Launch",
              placeholder: true,
              color: "#391d47",
              accent: "#ffd166",
              dark: true,
            },
            {
              year: "2026",
              title: "Growing Impact",
              placeholder: true,
              color: "#f9edff",
              accent: "#9a5999",
            },
          ].map((chapter, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div
                className="rounded-[28px] p-10 flex flex-col gap-5 h-full"
                style={{
                  background: chapter.color,
                  boxShadow: "var(--md-elev-1)",
                  minHeight: "320px",
                }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 w-fit"
                  style={{
                    background: chapter.dark ? "rgba(255,255,255,0.12)" : "rgba(57,29,71,0.08)",
                  }}
                >
                  <span
                    className="font-geist font-bold text-sm"
                    style={{ color: chapter.accent }}
                  >
                    {chapter.year}
                  </span>
                </div>
                <h3
                  className="font-geist font-semibold leading-[1.2em]"
                  style={{
                    fontSize: "clamp(22px, 2vw, 28px)",
                    color: chapter.dark ? "#ffffff" : "#181618",
                  }}
                >
                  {chapter.title}
                </h3>
                <div
                  className="flex-1 rounded-2xl flex items-center justify-center"
                  style={{
                    background: chapter.dark ? "rgba(255,255,255,0.06)" : "rgba(57,29,71,0.05)",
                    minHeight: "120px",
                  }}
                >
                  <div className="text-center px-6">
                    <div className="text-3xl mb-3">✍️</div>
                    <p
                      className="font-satoshi font-medium text-sm leading-[1.5em]"
                      style={{ color: chapter.dark ? "rgba(255,255,255,0.5)" : "rgba(57,29,71,0.4)" }}
                    >
                      Story content coming soon
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Image placeholder row */}
        <AnimatedSection delay={100}>
          <div
            className="rounded-[28px] overflow-hidden flex flex-col md:flex-row items-center gap-0"
            style={{ boxShadow: "var(--md-elev-1)" }}
          >
            {/* Left: image placeholder */}
            <div
              className="w-full md:w-1/2 flex items-center justify-center"
              style={{ background: "#f9edff", minHeight: "320px" }}
            >
              <div className="text-center px-12 py-16">
                <div className="text-5xl mb-4">📸</div>
                <p className="font-satoshi font-medium text-[#391d47]/40 text-sm">
                  Photos coming soon
                </p>
              </div>
            </div>
            {/* Right: content placeholder */}
            <div className="w-full md:w-1/2 bg-[#391d47] p-12 flex flex-col gap-5">
              <h3
                className="font-geist font-semibold text-white leading-[1.2em]"
                style={{ fontSize: "clamp(22px, 2vw, 32px)" }}
              >
                More of our story is on the way.
              </h3>
              <p className="font-satoshi font-medium text-white/70 text-[16px] leading-[1.7em]">
                We&apos;re gathering photos, milestones, and the full narrative of how Memory Matters went from an idea to a global community. Check back soon — or reach out if you&apos;d like to be part of writing this story with us.
              </p>
              <a
                href="mailto:memorymatters2025@gmail.com"
                className="inline-flex items-center gap-2 text-[#ffd166] font-satoshi font-medium text-[15px] hover:underline w-fit"
              >
                <svg width="14" height="11" viewBox="0 0 24 20" fill="currentColor">
                  <path d="M20 0H4C2.9 0 2 .9 2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" />
                </svg>
                memorymatters2025@gmail.com
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
