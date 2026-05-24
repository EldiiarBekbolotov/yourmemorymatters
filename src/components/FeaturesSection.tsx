"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3C8 3 5 6 5 9.5c0 1.5.5 2.8 1.3 3.8C5.5 14.2 5 15.3 5 16.5c0 2.5 2 4.5 4.5 4.5h5c2.5 0 4.5-2 4.5-4.5 0-1.2-.5-2.3-1.3-3.2C18.5 12.3 19 11 19 9.5 19 6 16 3 12 3z"
            fill="#181618"
          />
        </svg>
      ),
      title: "Neuroscience & Research Experience",
      description:
        "Dive deep into real-world neuroscience topics — from Alzheimer's to memory, cognition, and neuroplasticity. Collaborate with experts and develop critical thinking skills valued in top universities.",
    },
    {
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"
            fill="#181618"
          />
        </svg>
      ),
      title: "Podcasting & Media Skills",
      description:
        "Learn how to script, host, edit, and promote episodes of a growing public podcast. Gain confidence in interviewing professionals and making complex ideas accessible to global audiences.",
    },
    {
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
            fill="#181618"
          />
        </svg>
      ),
      title: "Social Impact & Advocacy",
      description:
        "Be part of a youth-led initiative that supports families, patients, and caregivers affected by memory disorders. Help break stigma around neurological conditions and inspire understanding through storytelling.",
    },
    {
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
            fill="#181618"
          />
        </svg>
      ),
      title: "Resume-Worthy Accomplishments",
      description:
        "Get published in a newsletter to 36,000 research and scientific professionals. Outstanding members earn Letters of Recommendation, leadership titles, or nomination for awards.",
    },
  ];

  return (
    <section
      id="support"
      className="bg-[#f9edff]"
      style={{ padding: "0 0 140px" }}
    >
      <div className="max-w-[1460px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Sticky Title */}
          <div className="lg:w-2/5">
            <div className="lg:sticky" style={{ top: "100px" }}>
              <AnimatedSection delay={0}>
                <div className="inline-flex items-center gap-2 bg-[#9a5999]/10 rounded-full px-4 py-2 w-fit mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#9a5999]" />
                  <span className="font-satoshi font-medium text-[#9a5999] text-sm">What You'll Gain</span>
                </div>
                <h2
                  className="font-geist font-semibold text-[#181618] leading-[1.1em]"
                  style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
                >
                  Why join Memory Matters?
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={50}>
                <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.5em] mt-6">
                  Whether you&apos;re a future neuroscientist, a passionate
                  communicator, or just someone who wants to make a difference
                  — this is your chance to join something meaningful.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <a
                  href="/join"
                  className="inline-block mt-8 bg-[#391d47] text-white font-geist font-semibold text-[17px] px-7 py-3.5 rounded-pill hover:bg-[#391d47]/80 transition-colors"
                >
                  Get Involved
                </a>
              </AnimatedSection>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="flex-1 flex flex-col gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div
                  className="bg-white rounded-2xl p-10 flex flex-col gap-4"
                  style={{ boxShadow: "0px 1px 70px 0px #f9edff" }}
                >
                  <div className="w-14 h-14 rounded-full bg-[#ffd166] flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col gap-3 mt-2">
                    <h3
                      className="font-geist font-semibold text-[#391d47] leading-[1.1em]"
                      style={{ fontSize: "clamp(20px, 1.8vw, 26px)" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="font-satoshi font-medium text-[#575757] text-[18px] leading-[1.5em] max-w-md">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
