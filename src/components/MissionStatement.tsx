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
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="#ffd166"
          />
        </svg>
      ),
      title: "Our Mission",
      content:
        "Memory Matters exists to make memory visible, human, and understood. We are a student-led platform dedicated to exploring the science, stories, and lived realities of memory-related conditions — such as Alzheimer's and Lewy Body Dementia — through education, conversation, and community. We bridge neuroscience with humanity, translating complex research into accessible insights and amplifying the voices of patients, caregivers, and researchers.",
    },
    {
      id: 1,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            fill="#ffd166"
          />
        </svg>
      ),
      title: "Our Vision",
      content:
        "We envision a world where memory-related conditions are met with understanding rather than stigma, and where science and storytelling work together to create change. Memory Matters strives to build a global ecosystem — across schools, communities, and cultures — that values cognitive health, preserves stories, and empowers the next generation to lead with curiosity, compassion, and purpose.",
    },
    {
      id: 2,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
            fill="#ffd166"
          />
        </svg>
      ),
      title: "Our Community",
      content:
        "Memory Matters spans multiple platforms. Whether you want to immerse yourself with knowledge through attending meetings or listening to podcasts — we got you! Our Discord is where announcements live. Our Spotify podcast features neurologists discussing causes, risks, prevention, and treatment. Our Instagram turns complex science into creative, easy-to-understand content that educates and inspires.",
    },
    {
      id: 3,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"
            fill="#ffd166"
          />
        </svg>
      ),
      title: "Our Commitment",
      content:
        "At its core, Memory Matters believes that understanding memory is the first step toward protecting it, honoring those affected, and building a future where no one faces cognitive illness alone. Through podcasts, eBooks, digital tools, and global collaborations, Memory Matters creates spaces where science is humanized and stories are preserved.",
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
            style={{ background: "#391d47", padding: "100px 80px" }}
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
                    Our Goal, Vision & Commitment
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={50}>
                  <p className="font-satoshi font-medium text-white/80 text-xl leading-[1.4em]">
                    Through heartfelt stories, expert interviews, and science
                    made simple, we bridge the gap between neuroscience and the
                    communities it impacts.
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
                              ? "rgba(154,89,153,0.15)"
                              : "transparent",
                        }}
                        onClick={() =>
                          setOpenItem(openItem === item.id ? -1 : item.id)
                        }
                      >
                        <div className="flex items-center gap-4 p-7">
                          <div className="flex-shrink-0 w-7 h-7">{item.icon}</div>
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
                              "max-height 0.4s cubic-bezier(0.05, 0.7, 0.1, 1)",
                          }}
                        >
                          <p className="font-satoshi font-medium text-white/80 text-[18px] leading-[1.4em] pb-7">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}

                  <AnimatedSection delay={250}>
                    <a
                      href="/mission"
                      className="inline-block mt-4 bg-[#9a5999] text-white font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-[#9a5999]/80 transition-colors"
                    >
                      Read our full mission
                    </a>
                  </AnimatedSection>
                </div>

                {/* Image */}
                <AnimatedSection delay={100} className="flex-1">
                  <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "1" }}>
                    <img
                      src="https://static.wixstatic.com/media/b96cfe_529b2c4c93064057930e644ba3c25dd0~mv2.png/v1/fill/w_952,h_556,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/b96cfe_529b2c4c93064057930e644ba3c25dd0~mv2.png"
                      alt="Memory Matters vision and community"
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
