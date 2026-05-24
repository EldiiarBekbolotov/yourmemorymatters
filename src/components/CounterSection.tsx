"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const CounterSection: React.FC = () => {
  return (
    <section
      className="bg-[#f9edff] overflow-hidden"
      style={{ padding: "0 0 140px" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col items-center gap-16">
          {/* Title */}
          <AnimatedSection delay={0} className="text-center max-w-3xl">
            <h3
              className="font-geist font-semibold text-[#181618] leading-[1.2em]"
              style={{ fontSize: "clamp(28px, 3vw, 46px)" }}
            >
              Join us to spark stories, share science, and support those
              impacted by memory loss.
            </h3>
          </AnimatedSection>

          {/* Big Counter */}
          <div className="relative w-full flex items-center justify-center">
            <AnimatedSection delay={0}>
              <span
                className="font-geist font-semibold text-[#9a5999] leading-[1.1em] text-center block"
                style={{ fontSize: "clamp(70px, 13vw, 180px)" }}
              >
                135,000+
              </span>
            </AnimatedSection>
          </div>

          {/* Sub stats */}
          <AnimatedSection delay={50}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl">
              {[
                { number: "135,000+", label: "Professionals & researchers" },
                { number: "15,000+", label: "Students reached" },
                { number: "30+", label: "Countries" },
                { number: "650+", label: "Members" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <span
                    className="font-geist font-semibold text-[#391d47]"
                    style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
                  >
                    {stat.number}
                  </span>
                  <span className="font-satoshi font-medium text-[#575757] text-sm leading-[1.4em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={100}>
            <a
              href="/join"
              className="btn-hover-slide relative overflow-hidden bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] px-10 py-5 rounded-pill flex items-center gap-3 hover:bg-[#ffd166]/90 transition-colors"
            >
              <span className="btn-text-default">Get Involved</span>
              <span className="btn-text-hover">Get Involved</span>
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
