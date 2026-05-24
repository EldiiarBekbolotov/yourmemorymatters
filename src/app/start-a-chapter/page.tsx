"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

export default function StartAChapterPage() {
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
              Start A Chapter
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={50}>
            <p className="font-satoshi font-medium text-white/85 text-xl leading-[1.5em] max-w-2xl mt-6">
              Bring Memory Matters to your school, city, or community. When you
              start a chapter, you&apos;re not starting from zero — you&apos;re
              joining something that already has momentum, trust, and a growing
              global footprint.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <div className="flex flex-col gap-8 max-w-3xl">
            <AnimatedSection delay={0}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                Memory Matters didn&apos;t start as a brand or an organization
                on paper — it started because too many conversations about
                dementia were either clinical, hidden, or happening too late. We
                wanted to change how people talk about memory, not just that
                they talk about it.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={50}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                Since then, the work has grown faster than we ever expected.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                So far, Memory Matters has reached over 100,000 professionals
                through conversations, content, and collaborations — people
                working in healthcare, research, policy, and education. At the
                same time, we&apos;ve connected with thousands of students,
                helping young people understand brain health early and see
                dementia not as something distant, but as something human.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                What&apos;s been especially meaningful is that this hasn&apos;t
                stayed local. Our community now spans 20+ countries, with
                members, ambassadors, and collaborators showing up from
                different cultures, healthcare systems, and lived experiences.
                Today, we&apos;re supported by 650+ active members and see
                hundreds of ongoing engagements through events, discussions,
                projects, and outreach.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.6em]">
                We&apos;re proud of these numbers — not because they look
                impressive, but because every number represents a real
                conversation, a real story shared, or someone feeling less alone
                in a space that&apos;s often isolating.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Chapters Matter */}
      <section className="bg-[#391d47]" style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <h2
              className="font-geist font-semibold text-white leading-[1.1em] mb-8"
              style={{ fontSize: "clamp(28px, 3.5vw, 46px)" }}
            >
              That&apos;s why chapters matter.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={50}>
            <p className="font-satoshi font-medium text-white/85 text-xl leading-[1.6em] max-w-3xl mb-6">
              Chapters aren&apos;t meant to replicate something perfectly or
              &ldquo;go viral.&rdquo; They exist so Memory Matters can show up
              locally, in ways that actually make sense for real communities —
              schools, families, clinics, and neighborhoods.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="font-satoshi font-medium text-white/85 text-xl leading-[1.6em] max-w-3xl">
              When someone starts a chapter, they&apos;re not starting from zero.
              They&apos;re joining something that already has momentum, trust, and
              a growing footprint — and helping shape where it goes next.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100,000+", label: "Professionals reached" },
              { number: "20+", label: "Countries" },
              { number: "650+", label: "Active members" },
              { number: "Hundreds", label: "Ongoing engagements" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="bg-white rounded-2xl p-8 text-center" style={{ boxShadow: "var(--md-elev-2)" }}>
                  <p
                    className="font-geist font-semibold text-[#391d47] leading-[1.1em] mb-2"
                    style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
                  >
                    {stat.number}
                  </p>
                  <p className="font-satoshi font-medium text-[#575757] text-[16px]">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 0 140px" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <div
              className="rounded-2xl p-16 flex flex-col items-center gap-8 text-center"
              style={{ background: "#9a5999" }}
            >
              <h3
                className="font-geist font-semibold text-white leading-[1.2em] max-w-2xl"
                style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
              >
                Ready to start a Memory Matters chapter in your community?
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://docs.google.com/document/d/1xQMn3qRFsN8Nm4aPYX8gixFBfy5xQdmxX5pAFgclVj0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/15 text-white font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-white/25 transition-colors"
                >
                  Learn More
                </a>
                <a
                  href="https://forms.gle/CJbGwoUGPaMhxThP7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-[#ffd166]/90 transition-colors"
                >
                  Apply Here
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
