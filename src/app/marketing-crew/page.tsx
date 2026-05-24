"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

export default function MarketingCrewPage() {
  return (
    <div className="min-h-screen bg-[#f9edff]">
      <Navbar />

      {/* Hero Banner */}
      <section style={{ paddingTop: "80px" }}>
        <img
          src="https://static.wixstatic.com/media/b96cfe_870968edeeb0458f9afcf1503d2254da~mv2.jpg/v1/fill/w_1199,h_281,al_c,q_80,enc_avif,quality_auto/b96cfe_870968edeeb0458f9afcf1503d2254da~mv2.jpg"
          alt="Memory Matters Marketing Crew"
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
              Marketing Crew
            </h1>
          </AnimatedSection>

          <div className="flex flex-col gap-6 max-w-3xl">
            <AnimatedSection delay={50}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                The Memory Matters Marketing Crew is a selective team of
                creatives, strategists, and storytellers shaping how the world
                sees, feels, and remembers Memory Matters. This is where
                neuroscience meets narrative, design meets purpose, and ideas
                turn into moments people stop scrolling for.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                You&apos;re not here to post randomly. You&apos;re here to craft
                presence, shape perception, and build emotional resonance across
                platforms. Marketing Crew members collaborate with content
                strategists, designers, social media strategists, and nonprofit
                advisors, learning how mission-driven organizations communicate
                with clarity, consistency, and impact.
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
                title: "Brand & Storytelling",
                items: [
                  "Shape the voice, tone, and visual identity of Memory Matters",
                  "Turn complex neuroscience and real stories into compelling content",
                  "Ensure every post, caption, and campaign feels human, thoughtful, and intentional",
                ],
              },
              {
                title: "Content Creation",
                items: [
                  "Design graphics, reels, carousels, and short-form videos",
                  "Write captions, taglines, and story-driven posts that spark curiosity and connection",
                  "Highlight podcast episodes, eBooks, events, and milestones in creative ways",
                ],
              },
              {
                title: "Campaigns & Visibility",
                items: [
                  "Plan and execute campaigns around launches, awareness days, and initiatives",
                  "Experiment with formats, platforms, and trends — without losing mission integrity",
                  "Help Memory Matters reach new audiences through smart, ethical visibility",
                ],
              },
              {
                title: "Audience Engagement & Collaboration",
                items: [
                  "Build meaningful interaction through comments, DMs, and community prompts",
                  "Track performance and refine content based on engagement insights",
                  "Work closely with all Crews to amplify their work outward",
                  "Translate internal projects into outward-facing stories the world can engage with",
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
              "Creators who care about impact over clout",
              "Designers, writers, editors, and visual thinkers",
              "Students interested in branding, communications, psychology, or media",
              "Storytellers who know attention is earned — not demanded",
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
              Experience helps. Taste, intention, and curiosity matter more.
            </p>
            <p className="font-geist font-semibold text-[#9a5999] text-xl mb-10">
              ✨ The Marketing Crew is the face and feeling of Memory Matters.
              You&apos;re not just promoting content — you&apos;re shaping how a
              mission lives in public.
            </p>
            <a
              href="https://forms.gle/Jit66UzwJEba2oS19"
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
