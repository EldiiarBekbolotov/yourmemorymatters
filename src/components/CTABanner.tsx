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
            style={{ background: "#9a5999", padding: "70px" }}
          >
            {/* Decoration */}
            <div
              className="absolute top-0 left-0 w-36 h-48 pointer-events-none opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left: Text */}
              <div className="flex-1 flex flex-col gap-5 max-w-lg">
                <AnimatedSection delay={0}>
                  <h2
                    className="font-geist font-semibold text-white leading-[1.1em]"
                    style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
                  >
                    Your donation{" "}
                    <span className="text-[#ffd166]">transforms</span> lives in
                    need
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={50}>
                  <p className="font-satoshi font-medium text-[#f9edff] text-xl leading-[1.4em]">
                    Your support provides hope, care, and essential resources to
                    those who need it most. Every contribution makes a real
                    difference.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={100}>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <a
                      href="#causes"
                      className="btn-hover-slide relative overflow-hidden bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] px-8 py-4 rounded-pill flex items-center gap-3 hover:bg-[#ffd166]/90 transition-colors"
                    >
                      <span className="btn-text-default">Donate now</span>
                      <span className="btn-text-hover">Donate now</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
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
                      href="#volunteer"
                      className="bg-[#181618] text-white font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-[#181618]/80 transition-colors"
                    >
                      Become a volunteer
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right: Illustration */}
              <div className="flex-shrink-0 w-64 lg:w-80">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=400&fit=crop"
                  alt="Hands holding a glowing heart representing charitable giving and community support"
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ aspectRatio: "1" }}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTABanner;
