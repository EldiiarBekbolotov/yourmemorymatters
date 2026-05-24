"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

export default function CrewsPage() {
  const crews = [
    {
      emoji: "📱",
      title: "Apps Crew",
      description:
        "Our Apps Crew builds innovative digital tools to support memory care and brain health. From user-friendly apps that test cognition to interactive resources for families, they design technology that empowers and connects the Memory Matters community. They are a highly selected team, mentored by esteemed tech advisors.",
      href: "/apps-crew",
      color: "#391d47",
    },
    {
      emoji: "📚",
      title: "eBooks Crew",
      description:
        "Memory Matters eBooks Crew is a creative team that curates, formats, and designs digital eBooks centered on memory and neuroscience with the potential for going global! Members help shape the layout, organize content, develop themes, and host competitions that bring stories and science to life, aimed to make a global impact.",
      href: "/ebooks-crew",
      color: "#9a5999",
    },
    {
      emoji: "🎙️",
      title: "Podcast Crew",
      description:
        "The Podcast Crew brings stories to life through engaging interviews and thoughtful discussions. They connect with experts, caregivers, neurologists, and patients to share real-world experiences and breakthroughs, making complex neuroscience relatable and inspiring for all listeners.",
      href: "/podcast-crew",
      color: "#391d47",
    },
    {
      emoji: "🌍",
      title: "Growth Crew",
      description:
        "The Growth Crew drives the reach and impact of Memory Matters. They focus on outreach, strategy, and digital engagement to connect students, caregivers, researchers, and healthcare professionals. Through partnerships, campaigns, and community-building, they ensure meaningful stories and neuroscience conversations reach the people who need them most.",
      href: "/growth-crew",
      color: "#9a5999",
    },
    {
      emoji: "📣",
      title: "Marketing Crew",
      description:
        "The Marketing Crew spreads the word about Memory Matters far and wide. They craft compelling campaigns, manage social media, and create content that raises awareness, fosters community, and drives engagement to support our mission of understanding and combating memory disorders.",
      href: "/marketing-crew",
      color: "#391d47",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9edff]">
      <Navbar />

      {/* Hero */}
      <section
        className="bg-[#391d47] relative overflow-hidden"
        style={{ paddingTop: "180px", paddingBottom: "100px" }}
      >
        <div
          className="absolute pointer-events-none opacity-10"
          style={{
            width: "984px",
            height: "282px",
            top: "-100px",
            right: "-80px",
            background:
              "repeating-linear-gradient(45deg, #9a5999 0, #9a5999 1px, transparent 0, transparent 50%)",
            backgroundSize: "8px 8px",
            transform: "rotate(15deg)",
          }}
        />
        <div className="max-w-[1460px] mx-auto px-8 relative z-10">
          <AnimatedSection delay={0}>
            <h1
              className="font-geist font-semibold text-white leading-[1.1em] max-w-3xl"
              style={{ fontSize: "clamp(38px, 5vw, 70px)" }}
            >
              Make Memory Matter
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={50}>
            <p className="font-satoshi font-medium text-white/85 text-xl leading-[1.5em] max-w-2xl mt-6">
              Choose your crew and become part of a global youth-led movement
              dedicated to raising awareness, advancing research, and supporting
              those affected by memory-related conditions.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <a
              href="/join"
              className="inline-block mt-8 bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-[#ffd166]/90 transition-colors"
            >
              Get Involved
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Crews */}
      <section style={{ padding: "100px 0 140px" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <div className="flex flex-col gap-8">
            {crews.map((crew, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div
                  className="bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row"
                  style={{ boxShadow: "var(--md-elev-2)" }}
                >
                  {/* Color sidebar */}
                  <div
                    className="md:w-24 h-20 md:h-auto flex items-center justify-center flex-shrink-0"
                    style={{ background: crew.color }}
                  >
                    <span className="text-4xl">{crew.emoji}</span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 flex-1">
                    <div className="flex-1">
                      <h3
                        className="font-geist font-semibold text-[#181618] leading-[1.2em] mb-3"
                        style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
                      >
                        {crew.title}
                      </h3>
                      <p className="font-satoshi font-medium text-[#575757] text-[17px] leading-[1.5em]">
                        {crew.description}
                      </p>
                    </div>
                    <a
                      href={crew.href}
                      className="flex-shrink-0 bg-[#391d47] text-white font-geist font-semibold text-[16px] px-6 py-3 rounded-pill hover:bg-[#391d47]/80 transition-colors whitespace-nowrap"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
