"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

export default function EBooksCrewPage() {
  return (
    <div className="min-h-screen bg-[#f9edff]">
      <Navbar />

      {/* Hero Banner */}
      <section style={{ paddingTop: "80px" }}>
        <img
          src="https://static.wixstatic.com/media/b96cfe_870968edeeb0458f9afcf1503d2254da~mv2.jpg/v1/fill/w_1199,h_281,al_c,q_80,enc_avif,quality_auto/b96cfe_870968edeeb0458f9afcf1503d2254da~mv2.jpg"
          alt="Memory Matters eBooks Crew"
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
              eBooks Crew
            </h1>
          </AnimatedSection>

          <div className="flex flex-col gap-6 max-w-3xl">
            <AnimatedSection delay={50}>
              <p className="font-geist font-semibold text-[#181618] text-2xl leading-[1.4em] italic">
                What if stories could do what science alone cannot?
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                What if words could hold memory, preserve dignity, and turn
                research into something people feel in their chest?
              </p>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                The Memory Matters eBooks Crew is a selective team of writers,
                editors, storytellers, and thinkers creating powerful digital
                books that sit at the intersection of neuroscience, lived
                experience, and humanity. These aren&apos;t class assignments or
                casual blog posts — they&apos;re professionally curated eBooks
                read by students, families, caregivers, and communities around
                the world.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                You&apos;ll help transform research, interviews, and real stories
                into narratives that educate, comfort, and change how people
                understand memory-related conditions. eBooks Crew members
                collaborate with each other, reach out to hospitals and care
                centers, medical professionals, and experienced editors, gaining
                rare mentorship in science communication, narrative ethics, and
                publishing for impact.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What You'll Create */}
      <section className="bg-[#391d47]" style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <h2
              className="font-geist font-semibold text-white leading-[1.1em] mb-12"
              style={{ fontSize: "clamp(28px, 3.5vw, 46px)" }}
            >
              What You&apos;ll Create
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Storytelling with Purpose",
                items: [
                  "Write original pieces that blend neuroscience with human stories",
                  "Turn interviews, research findings, and lived experiences into compelling narratives",
                  "Explore themes of memory, identity, loss, resilience, and hope",
                ],
              },
              {
                title: "Editing & Curation",
                items: [
                  "Edit submissions from students and contributors around the world",
                  "Help shape tone, structure, and voice to create cohesive, powerful publications",
                  "Learn how professional editorial teams balance clarity, empathy, and accuracy",
                ],
              },
              {
                title: "Research → Readable",
                items: [
                  "Translate complex neuroscience into accessible, emotionally resonant writing",
                  "Work closely with researchers and advisors to ensure scientific integrity",
                  "Create content that informs without overwhelming, and moves without sensationalizing",
                ],
              },
              {
                title: "Collaboration & Design",
                items: [
                  "Partner with Designers and Marketing Crew to shape layouts, covers, and visual flow",
                  "Coordinate with Podcast and Apps Crews to connect stories across platforms",
                  "Help plan eBook launches and distribution strategies",
                  "See your work published, shared, and used for real-world education and advocacy",
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

      {/* Who This Is For */}
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
              "Writers who believe words can change how people understand illness and identity",
              "Students passionate about neuroscience, psychology, medicine, or storytelling",
              "Editors who love shaping raw ideas into something unforgettable",
              "Creators who care deeply about empathy, ethics, and impact",
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
            <p className="font-geist font-semibold text-[#391d47] text-xl mb-2">
              You don&apos;t need to be &ldquo;perfect.&rdquo; You need to be intentional.
            </p>
            <p className="font-geist font-semibold text-[#9a5999] text-xl mb-10">
              ✨ The eBooks Crew is the voice of Memory Matters. You&apos;re not
              just writing — you&apos;re preserving stories that deserve to be
              remembered.
            </p>
            <a
              href="https://forms.gle/TZ32zv6wDWiedcJA6"
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
