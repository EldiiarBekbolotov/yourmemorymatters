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
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93V18c0-.55-.45-1-1-1s-1 .45-1 1v1.93C7.06 19.48 4.52 16.94 4.07 14H6c.55 0 1-.45 1-1s-.45-1-1-1H4.07C4.52 9.06 7.06 6.52 10 6.07V8c0 .55.45 1 1 1s1-.45 1-1V6.07C15.94 6.52 18.48 9.06 18.93 12H17c-.55 0-1 .45-1 1s.45 1 1 1h1.93c-.45 2.94-2.99 5.48-5.93 5.93z"
            fill="#181618"
          />
        </svg>
      ),
      title: "Financial contributions",
      description:
        "With your support, we can fund vital programs, expand our reach, and make a tangible difference in communities that need it most.",
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
      title: "Volunteer with us",
      description:
        "Whether it's mentoring youth, organizing events, or offering your professional expertise, every hour you give creates lasting change.",
    },
    {
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"
            fill="#181618"
          />
        </svg>
      ),
      title: "Impactful partnerships",
      description:
        "We collaborate with organizations, governments, and businesses to amplify our reach and create systemic change in underserved communities.",
    },
    {
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
            fill="#181618"
          />
        </svg>
      ),
      title: "Devote your time",
      description:
        "Volunteering with HopeWorks offers a meaningful chance to contribute to our mission, enriching lives while growing personally and professionally.",
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
                <h2
                  className="font-geist font-semibold text-[#181618] leading-[1.1em]"
                  style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
                >
                  How can you truly support our cause?
                </h2>
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
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-full bg-[#ffd166] flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-2">
                    <h3
                      className="font-geist font-semibold text-[#391d47] leading-[1.1em]"
                      style={{ fontSize: "clamp(22px, 2vw, 28px)" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="font-satoshi font-medium text-[#575757] text-[18px] leading-[1.4em] max-w-md">
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
