"use client";
import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";

interface AccordionItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: string;
}

const MissionSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number>(0);

  const accordionItems: AccordionItem[] = [
    {
      id: 0,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"
            fill="#ffd166"
          />
        </svg>
      ),

      title: "Education and training program",
      content:
        "Our Education and Training Program equips individuals with the knowledge, skills, and opportunities they need to thrive. From literacy classes to vocational training, we invest in human potential at every level.",
    },
    {
      id: 1,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="#ffd166"
          />
        </svg>
      ),

      title: "Promoting wellness and security",
      content:
        "We provide healthcare access, mental health support, and community safety programs to ensure every person can live with dignity, security, and the physical wellbeing they deserve.",
    },
    {
      id: 2,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"
            fill="#ffd166"
          />
        </svg>
      ),

      title: "Responding swiftly to disasters",
      content:
        "When crises strike, HopeWorks mobilizes rapidly to deliver emergency relief — food, clean water, shelter, and medical care — to affected populations within 48 hours of a disaster declaration.",
    },
    {
      id: 3,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
            fill="#ffd166"
          />
        </svg>
      ),

      title: "Building a brighter tomorrow",
      content:
        "Through long-term development programs, we work alongside communities to build sustainable infrastructure, foster economic independence, and create the conditions for lasting prosperity.",
    },
  ];

  return (
    <section
      id="mission"
      className="bg-[#f9edff]"
      style={{ padding: "0 0 140px" }}
    >
      <div className="max-w-[1460px] mx-auto px-8">
        <AnimatedSection delay={0}>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ background: "#391d47", padding: "140px 80px" }}
          >
            {/* Background decorations */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: "1376px",
                height: "393px",
                top: "-146px",
                left: "-338px",
                opacity: 0.06,
                background:
                  "repeating-linear-gradient(45deg, #9a5999 0, #9a5999 1px, transparent 0, transparent 50%)",
                backgroundSize: "8px 8px",
              }}
            />

            <div className="relative z-10 flex flex-col gap-16">
              {/* Top: Title */}
              <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
                <AnimatedSection delay={0}>
                  <h2
                    className="font-geist font-semibold text-white leading-[1.1em]"
                    style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
                  >
                    The mission of our organization
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={50}>
                  <p className="font-satoshi font-medium text-white/80 text-xl leading-[1.4em]">
                    Explore our diverse range of programs and initiatives aimed
                    at fostering positive change worldwide.
                  </p>
                </AnimatedSection>
              </div>

              {/* Bottom: Accordion + Image */}
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Accordion */}
                <div className="flex-1 flex flex-col gap-3">
                  {accordionItems.map((item) => (
                    <AnimatedSection key={item.id} delay={item.id * 50}>
                      <div
                        className="rounded-2xl overflow-hidden cursor-pointer"
                        style={{
                          background:
                            openItem === item.id
                              ? "rgba(154,89,153,0.12)"
                              : "transparent",
                        }}
                        onClick={() =>
                          setOpenItem(openItem === item.id ? -1 : item.id)
                        }
                      >
                        <div className="flex items-center gap-4 p-7">
                          <div className="flex-shrink-0 w-7 h-7">
                            {item.icon}
                          </div>
                          <h3
                            className="flex-1 font-geist font-semibold text-white leading-[1.2em]"
                            style={{ fontSize: "clamp(18px, 1.5vw, 20px)" }}
                          >
                            {item.title}
                          </h3>
                          <svg
                            width="15"
                            height="9"
                            viewBox="0 0 15 9"
                            fill="none"
                            className="flex-shrink-0 transition-transform duration-300"
                            style={{
                              transform:
                                openItem === item.id
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                            }}
                          >
                            <path
                              d="M1 1l6.5 6.5L14 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div
                          className="accordion-content px-7"
                          style={{
                            maxHeight: openItem === item.id ? "200px" : "0",
                            overflow: "hidden",
                            transition:
                              "max-height 0.4s cubic-bezier(0.44, 0, 0.56, 1)",
                          }}
                        >
                          <p className="font-satoshi font-medium text-white/80 text-[18px] leading-[1.4em] pb-7">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}

                  <AnimatedSection delay={200}>
                    <a
                      href="#volunteer"
                      className="inline-block mt-4 bg-[#9a5999] text-white font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-[#9a5999]/80 transition-colors"
                    >
                      Join our mission
                    </a>
                  </AnimatedSection>
                </div>

                {/* Image */}
                <AnimatedSection delay={100} className="flex-1">
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{ aspectRatio: "1" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=600&fit=crop"
                      alt="Community members gathered together at a HopeWorks Foundation program event"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MissionSection;
