"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[#f9edff]" style={{ padding: "140px 0" }}>
      <div className="max-w-[1460px] mx-auto px-8">
        <div className="flex flex-col items-center gap-12 text-center max-w-4xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 bg-[#9a5999]/10 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#9a5999]" />
              <span className="font-satoshi font-medium text-[#9a5999] text-sm">Our Impact</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={50}>
            <h2
              className="font-geist font-semibold text-[#181618] leading-[1.1em]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Making memory visible, human, and understood.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.5em]">
              Through podcasts, eBooks, digital tools, and global collaborations,
              Memory Matters creates spaces where science is humanized and stories
              are preserved. We believe understanding memory is not just a
              scientific pursuit — it&apos;s a way of honoring identity, dignity,
              and connection.
            </p>
          </AnimatedSection>

          {/* Big quote */}
          <AnimatedSection delay={150}>
            <blockquote
              className="font-geist font-semibold text-[#391d47] leading-[1.2em]"
              style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
            >
              &ldquo;At its core, Memory Matters believes that understanding memory
              is the first step toward protecting it, honoring those affected,
              and building a future where no one faces cognitive illness alone.&rdquo;
            </blockquote>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/mission"
                className="bg-[#391d47] text-white font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-[#391d47]/80 transition-colors"
              >
                Read Our Mission
              </a>
              <a
                href="/join"
                className="bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-[#ffd166]/90 transition-colors"
              >
                Join the Movement
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
