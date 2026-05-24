"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

export default function MissionPage() {
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
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ffd166]" />
              <span className="font-satoshi font-medium text-white/90 text-sm">
                About Memory Matters
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={50}>
            <h1
              className="font-geist font-semibold text-white leading-[1.1em] max-w-4xl"
              style={{ fontSize: "clamp(38px, 5vw, 70px)" }}
            >
              About Memory Matters
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="font-satoshi font-medium text-white/85 text-xl leading-[1.5em] max-w-3xl mt-6">
              Memory Matters is a global, youth-led initiative dedicated to
              exploring the science, stories, and humanity behind memory. We sit
              at the intersection of neuroscience, storytelling, and advocacy —
              translating complex research into accessible conversations while
              centering the lived experiences of individuals, families, and
              communities affected by memory-related conditions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <AnimatedSection delay={0} className="flex-1">
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                Through podcasts, eBooks, digital tools, and global
                collaborations, Memory Matters creates spaces where science is
                humanized and stories are preserved. We believe understanding
                memory is not just a scientific pursuit — it&apos;s a way of
                honoring identity, dignity, and connection.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={50} className="flex-1">
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "1.5" }}>
                <img
                  src="https://static.wixstatic.com/media/b96cfe_97ac8ec162bc417f8e52c63c9c418437~mv2.jpg/v1/fill/w_820,h_554,al_c,q_85,enc_avif,quality_auto/b96cfe_97ac8ec162bc417f8e52c63c9c418437~mv2.jpg"
                  alt="Memory Matters team"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#391d47]" style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
              <AnimatedSection delay={0}>
                <h2
                  className="font-geist font-semibold text-[#ffd166] leading-[1.1em] mb-8"
                  style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
                >
                  Mission
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={50}>
                <p className="font-satoshi font-medium text-white/85 text-xl leading-[1.6em] mb-6">
                  Memory Matters exists to make memory visible, human, and
                  understood. We are a student-led platform dedicated to
                  exploring the science, stories, and lived realities of
                  memory-related conditions — such as Alzheimer's and Lewy Body
                  Dementia — through education, conversation, and community.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <p className="font-satoshi font-medium text-white/85 text-xl leading-[1.6em] mb-6">
                  We bridge neuroscience with humanity: translating complex
                  research into accessible insights, amplifying the voices of
                  patients, caregivers, and researchers, and creating spaces
                  where curiosity meets compassion. Through podcasts,
                  storytelling, outreach, and youth-driven initiatives, we aim
                  to reduce stigma, spark informed dialogue, and inspire the
                  next generation to care about the brain — not just as an
                  organ, but as the keeper of identity, history, and connection.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={150}>
                <p className="font-satoshi font-medium text-white/85 text-xl leading-[1.6em]">
                  At its core, Memory Matters believes that understanding memory
                  is the first step toward protecting it, honoring those
                  affected, and building a future where no one faces cognitive
                  illness alone.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <AnimatedSection delay={0} className="flex-1">
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "1.5" }}>
                <img
                  src="https://static.wixstatic.com/media/b96cfe_529b2c4c93064057930e644ba3c25dd0~mv2.png/v1/fill/w_952,h_556,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/b96cfe_529b2c4c93064057930e644ba3c25dd0~mv2.png"
                  alt="Memory Matters vision"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            <div className="flex-1">
              <AnimatedSection delay={0}>
                <h2
                  className="font-geist font-semibold text-[#391d47] leading-[1.1em] mb-8"
                  style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
                >
                  Vision
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={50}>
                <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                  We envision a world where memory-related conditions are met
                  with understanding rather than stigma, and where science and
                  storytelling work together to create change. Memory Matters
                  strives to build a global ecosystem — across schools,
                  communities, and cultures — that values cognitive health,
                  preserves stories, and empowers the next generation to lead
                  with curiosity, compassion, and purpose.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f9edff]" style={{ padding: "0 0 140px" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <div
              className="rounded-2xl p-16 text-center flex flex-col items-center gap-8"
              style={{ background: "#9a5999" }}
            >
              <h3
                className="font-geist font-semibold text-white leading-[1.2em] max-w-2xl"
                style={{ fontSize: "clamp(28px, 3.5vw, 46px)" }}
              >
                Join our mission to change how the world understands memory.
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/join"
                  className="bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-[#ffd166]/90 transition-colors"
                >
                  Get Involved
                </a>
                <a
                  href="/crews"
                  className="bg-white/15 text-white font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-white/25 transition-colors"
                >
                  Explore Crews
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
