"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#f9edff]" style={{ padding: "140px 0" }}>
      <div className="max-w-[1460px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Image */}
          <AnimatedSection delay={0} className="flex-1">
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "1" }}>
              <img
                src="https://static.wixstatic.com/media/b96cfe_97ac8ec162bc417f8e52c63c9c418437~mv2.jpg/v1/fill/w_820,h_554,al_c,q_85,enc_avif,quality_auto/b96cfe_97ac8ec162bc417f8e52c63c9c418437~mv2.jpg"
                alt="Memory Matters team members at a community event"
                className="w-full h-full object-cover"
              />
              {/* Floating stat badge */}
              <div className="absolute bottom-5 left-5 bg-[#391d47] rounded-xl px-5 py-4">
                <p className="font-geist font-semibold text-[#ffd166] text-2xl">15,000+</p>
                <p className="font-satoshi font-medium text-white/80 text-sm">Students reached</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col gap-10">
            <AnimatedSection delay={0}>
              <div className="inline-flex items-center gap-2 bg-[#9a5999]/10 rounded-full px-4 py-2 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#9a5999]" />
                <span className="font-satoshi font-medium text-[#9a5999] text-sm">About Us</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={50}>
              <h2
                className="font-geist font-semibold text-[#181618] leading-[1.1em]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                Where youth, science, and storytelling{" "}
                <span className="text-[#9a5999]">change lives.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.5em]">
                Memory Matters is a youth-led organization dedicated to making
                neuroscience understandable and meaningful. Through creative
                projects, global chapters, educational tools, and our upcoming
                Memory Matters App, we empower students and families to learn
                about memory, mental wellness, and brain health.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.5em]">
                Step into a future where students, science, and storytelling
                come together — creating a global movement of awareness,
                compassion, and education.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <div className="flex flex-wrap items-start gap-10 pt-4">
              {[
                { number: "135,000+", label: "Professionals & researchers" },
                { number: "650+", label: "Active members" },
              ].map((stat, i) => (
                <AnimatedSection key={i} delay={200 + i * 50}>
                  <div className="flex flex-col gap-2">
                    <span
                      className="font-geist font-semibold text-[#391d47] leading-[1.2em]"
                      style={{ fontSize: "clamp(26px, 2.5vw, 34px)" }}
                    >
                      {stat.number}
                    </span>
                    <p className="font-satoshi font-medium text-[#575757] text-[17px]">
                      {stat.label}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={300}>
              <div className="flex gap-4">
                <a
                  href="/crews"
                  className="bg-[#391d47] text-white font-geist font-semibold text-[17px] px-7 py-3.5 rounded-pill hover:bg-[#391d47]/80 transition-colors"
                >
                  Our Crews
                </a>
                <a
                  href="/mission"
                  className="bg-transparent border-2 border-[#391d47] text-[#391d47] font-geist font-semibold text-[17px] px-7 py-3.5 rounded-pill hover:bg-[#391d47]/5 transition-colors"
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

export default AboutSection;
