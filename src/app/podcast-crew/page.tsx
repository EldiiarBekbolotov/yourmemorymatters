"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

export default function PodcastCrewPage() {
  return (
    <div className="min-h-screen bg-[#f9edff]">
      <Navbar />

      {/* Hero Banner */}
      <section style={{ paddingTop: "80px" }}>
        <img
          src="https://static.wixstatic.com/media/b96cfe_870968edeeb0458f9afcf1503d2254da~mv2.jpg/v1/fill/w_1199,h_281,al_c,q_80,enc_avif,quality_auto/b96cfe_870968edeeb0458f9afcf1503d2254da~mv2.jpg"
          alt="Memory Matters Podcast Crew"
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
              Podcast Crew
            </h1>
          </AnimatedSection>

          <div className="flex flex-col gap-6 max-w-3xl">
            <AnimatedSection delay={50}>
              <p className="font-geist font-semibold text-[#181618] text-2xl leading-[1.4em] italic">
                Some stories don&apos;t belong in textbooks.
              </p>
              <p className="font-geist font-semibold text-[#181618] text-2xl leading-[1.4em] italic mt-2">
                They belong in voices — pauses, laughter, silence, and the
                moments words almost fail.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                The Memory Matters Podcast Crew is a selective team of hosts,
                producers, researchers, editors, and storytellers crafting
                conversations that sit at the intersection of neuroscience,
                lived experience, and humanity. This is where science steps out
                of the lab and into real life — through interviews with
                researchers, clinicians, caregivers, patients, and advocates
                shaping the future of memory care.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                You&apos;re not just helping run a podcast. You&apos;re building a
                platform where memory is heard, not forgotten. Podcast Crew
                members collaborate with neuroscientists, healthcare
                professionals, journalists, and media strategists, gaining rare
                mentorship in science communication, ethical storytelling, and
                professional audio production.
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
                title: "Craft Conversations That Matter",
                items: [
                  "Research guests and shape thoughtful, high-impact interview questions",
                  "Help host, co-host, or guide conversations on neuroscience, memory, and identity",
                  "Balance scientific depth with emotional resonance",
                ],
              },
              {
                title: "Produce & Edit",
                items: [
                  "Assist with recording sessions and audio production",
                  "Edit episodes for clarity, pacing, and storytelling flow",
                  "Learn how professional podcasts structure narratives that keep listeners engaged",
                ],
              },
              {
                title: "Storytelling with Integrity",
                items: [
                  "Translate complex research into conversations that feel human and accessible",
                  "Handle sensitive topics with care, empathy, and respect",
                  "Preserve voices and stories that deserve to be remembered",
                ],
              },
              {
                title: "Collaborate & Grow the Platform",
                items: [
                  "Work with eBooks, Apps, and Marketing Crews to extend each episode beyond audio",
                  "Help transform episodes into articles, clips, interactive content, and discussions",
                  "Brainstorm episode themes and long-term series",
                  "Support outreach to guests, partners, and organizations",
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
              "Students who love asking why and listening deeply",
              "Future doctors, researchers, journalists, or storytellers",
              "Editors who care about both sound quality and meaning",
              "Creators passionate about neuroscience, empathy, and impact",
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
              Experience helps — curiosity, sensitivity, and commitment matter more.
            </p>
            <p className="font-geist font-semibold text-[#9a5999] text-xl mb-10">
              ✨ The Podcast Crew is where Memory Matters speaks. You&apos;re
              not just recording audio — you&apos;re capturing moments that
              change how people understand memory.
            </p>
            <a
              href="https://forms.gle/XWR7VydT2ADLpCZf9"
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
