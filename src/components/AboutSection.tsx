"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const AboutSection: React.FC = () => {
  const stats = [
    { number: "180", suffix: "+", label: "Volunteers joined this month" },
    { number: "25", suffix: "K", label: "People impacted this month" },
  ];

  return (
    <section id="about" className="bg-[#f9edff]" style={{ padding: "140px 0" }}>
      <div className="max-w-[1460px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Image */}
          <AnimatedSection delay={0} className="flex-1">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ aspectRatio: "1" }}
            >
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=600&fit=crop"
                alt="HopeWorks team members working together at a community outreach event"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col gap-16">
            <AnimatedSection delay={0}>
              <h2
                className="font-geist font-semibold text-[#181618] leading-[1.1em]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                Embracing challenges to drive meaningful change and a brighter
                future.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={50}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.4em]">
                At HopeWorks Foundation, our mission is clear: to create lasting
                positive impact where it matters most. Founded in 2010, we
                deliver essential education, medical aid, and humanitarian
                support to vulnerable communities across three continents.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <div className="flex items-start gap-10">
              {stats.map((stat, i) => (
                <AnimatedSection key={i} delay={i * 50}>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-end gap-1">
                      <span
                        className="font-geist font-semibold text-[#391d47] leading-[1.3em]"
                        style={{ fontSize: "clamp(28px, 3vw, 34px)" }}
                      >
                        {stat.number}
                      </span>
                      <span
                        className="font-geist font-semibold text-[#9a5999] leading-[1.3em]"
                        style={{ fontSize: "clamp(28px, 3vw, 34px)" }}
                      >
                        {stat.suffix}
                      </span>
                    </div>
                    <p className="font-satoshi font-medium text-[#575757] text-[18px] leading-[1.4em]">
                      {stat.label}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px bg-[#575757]/10 self-stretch ml-10" />
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
