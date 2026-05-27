"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function BookSection() {
  return (
    <section className="bg-[#391d47] relative overflow-hidden" style={{ padding: "100px 0" }}>
      {/* Background texture */}
      <div
        className="absolute pointer-events-none opacity-[0.06]"
        style={{
          width: "600px",
          height: "600px",
          top: "-100px",
          left: "-100px",
          background:
            "repeating-linear-gradient(45deg, #ffd166 0, #ffd166 1px, transparent 0, transparent 50%)",
          backgroundSize: "8px 8px",
          borderRadius: "50%",
        }}
      />

      <div className="max-w-[1460px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Book cover */}
          <AnimatedSection delay={0}>
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-[20px] blur-2xl opacity-30"
                  style={{ background: "#ffd166", transform: "scale(0.85) translateY(8%)" }}
                />
                <a
                  href="https://www.amazon.com/Defiance-Arya-Devanath/dp/B0DGSJ7CNB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <img
                    src="https://m.media-amazon.com/images/P/B0DGSJ7CNB.01.L.jpg"
                    alt="The Defiance by Arya Devanath"
                    className="relative rounded-[16px] object-cover"
                    style={{
                      width: "280px",
                      height: "400px",
                      boxShadow: "0px 8px 32px rgba(0,0,0,0.5), 0px 2px 8px rgba(0,0,0,0.4)",
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Fallback book cover if image fails */}
                  <div
                    className="rounded-[16px] flex flex-col items-center justify-center gap-4"
                    style={{
                      width: "280px",
                      height: "400px",
                      background: "linear-gradient(135deg, #9a5999, #391d47)",
                      boxShadow: "0px 8px 32px rgba(0,0,0,0.5)",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      zIndex: -1,
                    }}
                  >
                    <span className="font-geist font-bold text-white text-3xl text-center px-6 leading-tight">
                      The Defiance
                    </span>
                    <span className="font-satoshi font-medium text-white/70 text-sm">
                      Arya Devanath
                    </span>
                  </div>
                </a>

                {/* Amazon badge */}
                <div
                  className="absolute -bottom-4 -right-4 bg-[#ffd166] rounded-2xl px-4 py-2 flex items-center gap-2"
                  style={{ boxShadow: "var(--md-elev-2)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#181618">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="font-geist font-bold text-[#181618] text-sm">Available on Amazon</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={80}>
            <div className="flex flex-col gap-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 w-fit mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#ffd166]" />
                  <span className="font-satoshi font-medium text-white/80 text-sm">
                    From Our Founder
                  </span>
                </div>
                <h2
                  className="font-geist font-bold text-white leading-[1.1em] mb-2"
                  style={{ fontSize: "clamp(36px, 4vw, 60px)" }}
                >
                  The Defiance
                </h2>
                <p
                  className="font-geist font-semibold text-[#ffd166]"
                  style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
                >
                  by Arya Devanath
                </p>
              </div>

              <p className="font-satoshi font-medium text-white/80 text-[17px] leading-[1.7em]">
                Written by Memory Matters founder Arya Devanath, <em>The Defiance</em> is a powerful work that sits at the intersection of identity, memory, and resilience. Published while still in high school, the book reflects the same passion for storytelling and human experience that drives everything we do at Memory Matters.
              </p>

              <p className="font-satoshi font-medium text-white/65 text-[16px] leading-[1.7em] italic border-l-2 border-[#ffd166] pl-4">
                "The same curiosity about the human mind that inspired this book is what launched Memory Matters — a belief that our stories, and our memories, define us."
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                <a
                  href="https://www.amazon.com/Defiance-Arya-Devanath/dp/B0DGSJ7CNB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hover-slide inline-flex items-center gap-3 bg-[#ffd166] text-[#181618] font-geist font-semibold text-[16px] px-8 py-4 rounded-pill"
                >
                  <span className="btn-text-default">Buy on Amazon</span>
                  <span className="btn-text-hover">Buy on Amazon</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="#181618"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="/team"
                  className="inline-flex items-center gap-2 text-white/70 font-satoshi font-medium text-[16px] hover:text-white transition-colors px-4 py-4"
                  style={{ transition: "color 150ms cubic-bezier(0.2,0,0,1)" }}
                >
                  Meet the Founder →
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
