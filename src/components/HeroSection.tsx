"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-[#391d47] overflow-hidden"
      style={{ paddingTop: "200px", paddingBottom: "140px" }}
    >
      {/* Background pattern shapes */}
      <div
        className="absolute pointer-events-none opacity-10"
        style={{
          width: "984px",
          height: "282px",
          top: "-150px",
          right: "-80px",
          background:
            "repeating-linear-gradient(45deg, #9a5999 0, #9a5999 1px, transparent 0, transparent 50%)",
          backgroundSize: "8px 8px",
          transform: "rotate(15deg)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute pointer-events-none opacity-10"
        style={{
          width: "984px",
          height: "282px",
          bottom: "-150px",
          left: "-80px",
          background:
            "repeating-linear-gradient(45deg, #9a5999 0, #9a5999 1px, transparent 0, transparent 50%)",
          backgroundSize: "8px 8px",
          transform: "rotate(15deg)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-[1460px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <AnimatedSection delay={0}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#ffd166]" />
                  <span className="font-satoshi font-medium text-white/90 text-sm">
                    Youth-led · Global · Neuroscience
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={50}>
                <h1
                  className="font-geist font-semibold text-white leading-[1.1em]"
                  style={{ fontSize: "clamp(42px, 6vw, 82px)" }}
                >
                  Memory{" "}
                  <span className="text-[#ffd166]">Matters</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <p className="font-satoshi font-medium text-white/90 text-xl leading-[1.5em] max-w-xl">
                  A project dedicated to raising awareness, encourage growth and
                  research, foster understanding, and provide support for
                  individuals and loved ones affected by dementia.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={150}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/join"
                  className="btn-hover-slide relative overflow-hidden bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] px-8 py-4 rounded-pill flex items-center gap-3 hover:bg-[#ffd166]/90 transition-all duration-300"
                >
                  <span className="btn-text-default">Explore</span>
                  <span className="btn-text-hover">Explore</span>
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
                  href="/mission"
                  className="bg-white/10 backdrop-blur-sm text-white font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-white/20 transition-all duration-300"
                >
                  Our Mission
                </a>
              </div>
            </AnimatedSection>

            {/* Stats row */}
            <AnimatedSection delay={200}>
              <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
                {[
                  { number: "135K+", label: "Professionals reached" },
                  { number: "30+", label: "Countries" },
                  { number: "650+", label: "Active members" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="font-geist font-semibold text-[#ffd166] text-2xl">
                      {stat.number}
                    </span>
                    <span className="font-satoshi font-medium text-white/70 text-sm">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-5 mt-10 lg:mt-0 max-w-lg w-full">
            {/* Main hero image */}
            <AnimatedSection delay={300} className="w-full">
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "1.3" }}>
                <img
                  src="https://static.wixstatic.com/media/b96cfe_a99981d5571d4f0baf00e2c35905fdb7~mv2.png/v1/fill/w_1024,h_375,al_c,q_90,enc_avif,quality_auto/b96cfe_a99981d5571d4f0baf00e2c35905fdb7~mv2.png"
                  alt="Brain and dementia awareness illustration"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(57,29,71,0.85) 100%)",
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-geist font-semibold text-white text-xl leading-[1.3em]">
                    Join our Community
                  </p>
                  <p className="font-satoshi font-medium text-white/80 text-sm mt-1">
                    Join Events + Donate to our cause!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Two small cards */}
            <AnimatedSection delay={350}>
              <div className="flex gap-4">
                <a
                  href="/join"
                  className="flex-1 bg-[#9a5999] rounded-xl p-5 flex flex-col gap-2 hover:bg-[#9a5999]/80 transition-colors cursor-pointer"
                >
                  <span className="font-geist font-semibold text-white text-lg">
                    Get Involved
                  </span>
                  <span className="font-satoshi font-medium text-white/70 text-sm">
                    Join a crew today
                  </span>
                </a>
                <a
                  href="/crews"
                  className="flex-1 bg-[#ffd166]/10 border border-[#ffd166]/30 rounded-xl p-5 flex flex-col gap-2 hover:bg-[#ffd166]/20 transition-colors cursor-pointer"
                >
                  <span className="font-geist font-semibold text-white text-lg">
                    Our Crews
                  </span>
                  <span className="font-satoshi font-medium text-white/70 text-sm">
                    Explore all teams
                  </span>
                </a>
              </div>
            </AnimatedSection>

            {/* eBooks banner */}
            <AnimatedSection delay={400}>
              <div className="bg-[#ffd166] rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#391d47] flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 14H8v-2h8v2zm0-4H8v-2h8v2zm-2-4H8V6h6v2z"
                      fill="#ffd166"
                    />
                  </svg>
                </div>
                <p className="font-geist font-semibold text-[#181618] text-[15px] leading-[1.3em] flex-1">
                  eBook Submissions now open! Share your story.
                </p>
                <a
                  href="https://www.memorymatters2025.com/copy-of-opportunities"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-[#181618] text-white font-geist font-semibold text-sm px-4 py-2 rounded-pill hover:bg-[#181618]/80 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
