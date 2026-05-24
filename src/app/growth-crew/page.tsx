"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

export default function GrowthCrewPage() {
  return (
    <div className="min-h-screen bg-[#f9edff]">
      <Navbar />

      {/* Hero Banner */}
      <section style={{ paddingTop: "80px" }}>
        <img
          src="https://static.wixstatic.com/media/b96cfe_870968edeeb0458f9afcf1503d2254da~mv2.jpg/v1/fill/w_1199,h_281,al_c,q_80,enc_avif,quality_auto/b96cfe_870968edeeb0458f9afcf1503d2254da~mv2.jpg"
          alt="Memory Matters Growth Crew"
          className="w-full object-cover"
          style={{ maxHeight: "280px" }}
        />
      </section>

      {/* Intro */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <h1
              className="font-geist font-semibold text-[#391d47] leading-[1.1em] mb-10"
              style={{ fontSize: "clamp(38px, 5vw, 70px)" }}
            >
              Growth Crew
            </h1>
          </AnimatedSection>

          <div className="flex flex-col gap-6 max-w-3xl">
            <AnimatedSection delay={50}>
              <p className="font-geist font-semibold text-[#181618] text-2xl leading-[1.4em] italic">
                Growth isn&apos;t about posting louder.
              </p>
              <p className="font-geist font-semibold text-[#181618] text-2xl leading-[1.4em] italic mt-2">
                It&apos;s about building something that lasts.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                The Memory Matters Growth Crew is a selective team of
                strategists, organizers, analysts, and connectors responsible
                for scaling the entire movement — not through ads or aesthetics,
                but through systems, partnerships, and long-term vision. This is
                where Memory Matters grows from a project into a global
                ecosystem.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                Growth Crew members don&apos;t just promote content. They design
                the structures that allow chapters to thrive, partnerships to
                form, communities to sustain themselves, and impact to multiply
                — across schools, cities, and countries. Growth Crew members
                collaborate with organizational strategists, nonprofit advisors,
                and experienced leaders, gaining real-world insight into how
                global initiatives expand with intention, integrity, and impact.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="bg-[#391d47]" style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <h2
              className="font-geist font-semibold text-white leading-[1.1em] mb-12"
              style={{ fontSize: "clamp(28px, 3.5vw, 46px)" }}
            >
              What You&apos;ll Do
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Build Scalable Systems",
                items: [
                  "Design frameworks for launching and supporting chapters worldwide",
                  "Create onboarding pipelines, leadership structures, and internal workflows",
                  "Develop playbooks that help Memory Matters grow without losing its soul",
                ],
              },
              {
                title: "Partnerships & Expansion",
                items: [
                  "Research and help initiate partnerships with schools, libraries, hospitals, nonprofits, and universities",
                  "Support outreach to organizations aligned with neuroscience, mental health, and education",
                  "Help transform interest into long-term collaboration",
                ],
              },
              {
                title: "Community Architecture",
                items: [
                  "Strengthen internal culture across crews and chapters",
                  "Design systems for volunteer retention, leadership development, and succession",
                  "Help ensure every member feels connected to something larger than themselves",
                ],
              },
              {
                title: "Strategy, Insight & Integration",
                items: [
                  "Analyze growth patterns, chapter engagement, and community health",
                  "Identify where expansion makes sense — and where it doesn't",
                  "Turn data, feedback, and observation into strategic decisions",
                  "Work closely with all Crews to align growth with mission",
                ],
              },
            ].map((section, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="bg-white/10 rounded-2xl p-7 flex flex-col gap-4 h-full">
                  <h3 className="font-geist font-semibold text-[#ffd166] text-xl">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffd166] flex-shrink-0 mt-2" />
                        <span className="font-satoshi font-medium text-white/80 text-[16px] leading-[1.5em]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For + Apply */}
      <section style={{ padding: "100px 0 140px" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <h2
              className="font-geist font-semibold text-[#391d47] leading-[1.1em] mb-8"
              style={{ fontSize: "clamp(28px, 3.5vw, 46px)" }}
            >
              Who This Is For
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-4 max-w-2xl mb-12">
            {[
              "Students who think in systems, not just tasks",
              "Organizers who love building communities from the ground up",
              "Future founders, policy-makers, nonprofit leaders, or strategists",
              "People who care about impact after the spotlight fades",
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="flex items-start gap-4 bg-white rounded-xl p-5" style={{ boxShadow: "var(--md-elev-1)" }}>
                  <span className="w-2 h-2 rounded-full bg-[#9a5999] flex-shrink-0 mt-2.5" />
                  <p className="font-satoshi font-medium text-[#575757] text-[18px] leading-[1.5em]">
                    {item}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={200}>
            <p className="font-satoshi font-medium text-[#575757] text-xl mb-4">
              You don&apos;t need to be loud. You need to be intentional.
            </p>
            <p className="font-geist font-semibold text-[#9a5999] text-xl mb-10">
              ✨ The Growth Crew is the backbone of Memory Matters&apos; expansion.
              You&apos;re not here to chase attention — you&apos;re here to build
              something that endures.
            </p>
            <a
              href="https://forms.gle/rS4ZyJ1gNMdpc9Td7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#391d47] text-white font-geist font-semibold text-[18px] px-10 py-5 rounded-pill hover:bg-[#391d47]/80 transition-colors"
            >
              Apply Here
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
