"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const CTABanner: React.FC = () => {
  return (
    <section className="bg-[#f9edff]" style={{ padding: "0 0 140px" }}>
      <div className="max-w-[1460px] mx-auto px-8">
        <AnimatedSection delay={0}>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #391d47 0%, #9a5999 100%)",
              padding: "70px",
            }}
          >
            {/* Decoration */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,209,102,0.6) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none opacity-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left: Text */}
              <div className="flex-1 flex flex-col gap-5 max-w-xl">
                <AnimatedSection delay={0}>
                  <div className="inline-flex items-center gap-2 bg-[#ffd166]/20 rounded-full px-4 py-2 w-fit">
                    <span className="w-2 h-2 rounded-full bg-[#ffd166]" />
                    <span className="font-satoshi font-medium text-[#ffd166] text-sm">
                      Submissions Open Now
                    </span>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={50}>
                  <h2
                    className="font-geist font-semibold text-white leading-[1.1em]"
                    style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
                  >
                    eBooks Submissions{" "}
                    <span className="text-[#ffd166]">now open!</span>
                  </h2>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                  <p className="font-satoshi font-medium text-white/85 text-xl leading-[1.5em]">
                    Do you have a story, poem, or creative piece exploring
                    memory, identity, or dementia? Submit your work to the
                    Memory Matters Global eBook — a worldwide anthology of
                    anonymous voices changing how we understand memory and
                    humanity.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={150}>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <a
                      href="https://www.memorymatters2025.com/copy-of-opportunities"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-hover-slide relative overflow-hidden bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] px-8 py-4 rounded-pill flex items-center gap-3 hover:bg-[#ffd166]/90 transition-colors"
                    >
                      <span className="btn-text-default">Learn More</span>
                      <span className="btn-text-hover">Learn More</span>
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
                      href="https://discord.gg/s5nJMKJKMu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 text-white font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-white/20 transition-colors"
                    >
                      Join Discord
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right: Decorative stats */}
              <div className="flex-shrink-0 flex flex-col gap-4 w-64">
                {[
                  { stat: "Global", desc: "Worldwide anthology" },
                  { stat: "Anonymous", desc: "Safe & inclusive voices" },
                  { stat: "Impact", desc: "Changing how we understand memory" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 rounded-xl p-4 flex flex-col gap-1"
                  >
                    <span className="font-geist font-semibold text-[#ffd166] text-lg">
                      {item.stat}
                    </span>
                    <span className="font-satoshi font-medium text-white/75 text-sm">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTABanner;
