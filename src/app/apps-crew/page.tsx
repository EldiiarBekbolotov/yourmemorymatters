"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

export default function AppsCrewPage() {
  return (
    <div className="min-h-screen bg-[#f9edff]">
      <Navbar />

      {/* Hero Banner */}
      <section style={{ paddingTop: "80px" }}>
        <img
          src="https://static.wixstatic.com/media/b96cfe_870968edeeb0458f9afcf1503d2254da~mv2.jpg/v1/fill/w_1199,h_281,al_c,q_80,enc_avif,quality_auto/b96cfe_870968edeeb0458f9afcf1503d2254da~mv2.jpg"
          alt="Memory Matters Apps Crew"
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
              Apps Crew
            </h1>
          </AnimatedSection>

          <div className="flex flex-col gap-6 max-w-3xl">
            <AnimatedSection delay={50}>
              <p className="font-geist font-semibold text-[#181618] text-2xl leading-[1.4em] italic">
                Some memories don&apos;t fit into folders.
              </p>
              <p className="font-geist font-semibold text-[#181618] text-2xl leading-[1.4em] italic mt-2">
                They belong in moments — gestures, sounds, colors, and the ways
                stories unfold in ways screens alone can&apos;t capture.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                The Memory Matters Apps Crew is a selective team of designers,
                developers, UX researchers, and storytellers creating digital
                experiences that bring memory to life. This is where technology
                meets empathy — transforming neuroscience, caregiving, and lived
                experience into interactive tools, games, and visualizations
                that help people connect with and preserve memories.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                You&apos;re not just building an app. You&apos;re crafting spaces
                where memory is seen, felt, and remembered. Apps Crew members
                collaborate with neuroscientists, caregivers, educators, tech
                strategists, and media experts, gaining rare mentorship in
                human-centered design, ethical technology, and creative coding
                for real-world impact.
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
                title: "Design Experiences That Matter",
                items: [
                  "Create engaging interfaces, memory games, and interactive tools that support cognitive connection",
                  "Translate neuroscience and user research into features that are intuitive, meaningful, and accessible",
                  "Collaborate to build experiences that balance fun, reflection, and emotional resonance",
                ],
              },
              {
                title: "Develop & Build",
                items: [
                  "Code, prototype, and test new app features",
                  "Ensure smooth functionality, accessibility, and seamless user interactions",
                  "Learn best practices for app architecture, AI integration, and cross-platform design",
                ],
              },
              {
                title: "Storytelling Through Technology",
                items: [
                  "Transform memories, stories, and data into dynamic visualizations",
                  "Handle sensitive personal content with empathy, respect, and security",
                  "Preserve voices, moments, and experiences that deserve to be remembered",
                ],
              },
              {
                title: "Grow the Platform",
                items: [
                  "Brainstorm long-term app projects and initiatives, with a capability to go international",
                  "Shape the future of Memory Matters' digital experiences",
                  "Get access to dementia care centers, neurologists, in our launch!",
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

      {/* Tech Advisors */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <h2
              className="font-geist font-semibold text-[#391d47] leading-[1.1em] mb-12"
              style={{ fontSize: "clamp(28px, 3.5vw, 46px)" }}
            >
              Our Tech Advisors
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection delay={0}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <img
                  src="https://static.wixstatic.com/media/b96cfe_7a5b15e072fe4020b1a8608a60dd0e09~mv2.jpg/v1/fill/w_247,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Martin%20Oduro%202%20bw.jpg"
                  alt="Martin Oduro"
                  className="w-40 h-56 object-cover rounded-2xl flex-shrink-0"
                />
                <div>
                  <h3 className="font-geist font-semibold text-[#391d47] text-xl mb-1">
                    Martin Oduro
                  </h3>
                  <p className="font-satoshi font-medium text-[#9a5999] text-[16px] mb-4">
                    Technology Leader and Strategist
                  </p>
                  <p className="font-satoshi font-medium text-[#575757] text-[16px] leading-[1.6em]">
                    Martin is a technology leader with 15+ years of experience
                    building and scaling high-performing engineering teams and
                    delivering software solutions across cloud-native and
                    enterprise environments. He has worked with organizations
                    such as IBM, Groupon, and Optum Technology, and believes in
                    truth-seeking, evidence-driven decision making, and leading
                    by empowering teams.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={50}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <img
                  src="https://static.wixstatic.com/media/b96cfe_02072642ff80489d903b2649ea862e71~mv2.png/v1/fill/w_215,h_323,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202026-01-17%20at%208_46_25%20PM.png"
                  alt="Jaime Hritsik"
                  className="w-40 h-56 object-cover rounded-2xl flex-shrink-0"
                />
                <div>
                  <h3 className="font-geist font-semibold text-[#391d47] text-xl mb-1">
                    Jaime Hritsik
                  </h3>
                  <p className="font-satoshi font-medium text-[#9a5999] text-[16px] mb-4">
                    Engineering Leader
                  </p>
                  <p className="font-satoshi font-medium text-[#575757] text-[16px] leading-[1.6em]">
                    Jaime is a leader dedicated to creating environments where
                    engineers can thrive. She is committed to building
                    high-performing teams by empowering developers to do their
                    best work. Jaime also brings a unique academic background in
                    the evolution of the primate brain, unifying the scientific
                    and engineering pillars of Memory Matters.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section style={{ padding: "0 0 140px" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <div
              className="rounded-2xl p-14 flex flex-col items-center gap-6 text-center"
              style={{ background: "#391d47" }}
            >
              <p className="font-geist font-semibold text-[#ffd166] text-xl max-w-2xl">
                ✨ The Apps Crew is where Memory Matters becomes interactive.
                You&apos;re not just building software — you&apos;re creating
                experiences that change how people engage with, preserve, and
                celebrate memory.
              </p>
              <a
                href="https://forms.gle/z5ES3mQfjktE6gib7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] px-10 py-5 rounded-pill hover:bg-[#ffd166]/90 transition-colors"
              >
                Apply Here
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
