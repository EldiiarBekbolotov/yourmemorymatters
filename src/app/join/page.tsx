"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

export default function JoinPage() {
  const gains = [
    {
      emoji: "🔬",
      title: "Neuroscience & Research Experience",
      items: [
        "Dive deep into real-world neuroscience topics — from Alzheimer's to memory, cognition, and neuroplasticity.",
        "Collaborate with experts, researchers, and healthcare professionals to understand cutting-edge science.",
        "Develop critical thinking, research, and science communication skills valued in top universities and labs.",
      ],
    },
    {
      emoji: "🎙️",
      title: "Podcasting, Public Speaking & Media Skills",
      items: [
        "Learn how to script, host, edit, and promote episodes of a growing public podcast.",
        "Help create a global app to test cognition for dementia patients!",
        "Gain confidence in interviewing professionals, speaking to audiences, and making complex ideas accessible.",
        "Work with professional tools and platforms used in media production.",
      ],
    },
    {
      emoji: "🌍",
      title: "Social Impact & Advocacy",
      items: [
        "Be part of a youth-led initiative that supports families, patients, and caregivers affected by memory disorders.",
        "Help break stigma around neurological conditions and inspire understanding through storytelling.",
        "Your work could change the way someone views memory, aging, or illness.",
      ],
    },
    {
      emoji: "📈",
      title: "Resume-Worthy Accomplishments",
      items: [
        "Get published in a newsletter to 36,000 research, industry and scientific professionals.",
        "Get your stories across the globe!",
        "Outstanding members may earn Letters of Recommendation, leadership titles, or be nominated for awards.",
        "Showcase your work on Spotify, and public platforms — impressive for college, internships, or scholarships.",
      ],
    },
    {
      emoji: "🤝",
      title: "Elite Networking & Mentorship",
      items: [
        "Join a tight-knit team of student leaders passionate about neuroscience and storytelling.",
        "Get direct access to scientists, clinicians, and nonprofit leaders through interviews and collaborations.",
        "Connect with organizations like the Alzheimer's Association, building relationships that could fuel your academic or career journey.",
      ],
    },
    {
      emoji: "🌟",
      title: "Leadership, Creativity & Growth",
      items: [
        "Take ownership of projects, pitch ideas, lead interviews, and contribute creatively.",
        "Rotate across teams (research, outreach, editing, design) or specialize — you define your impact.",
        "Develop skills in teamwork, time management, and emotional intelligence that last a lifetime.",
      ],
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
            <img
              src="https://static.wixstatic.com/media/b96cfe_d12eb215188e4d8c9fcdbcd03e7c531e~mv2.png/v1/fill/w_658,h_216,al_c,q_85,enc_avif,quality_auto/b96cfe_d12eb215188e4d8c9fcdbcd03e7c531e~mv2.png"
              alt="Memory Matters"
              className="h-16 object-contain mb-6"
            />
          </AnimatedSection>
          <AnimatedSection delay={50}>
            <h1
              className="font-geist font-semibold text-white leading-[1.1em] max-w-3xl"
              style={{ fontSize: "clamp(38px, 5vw, 70px)" }}
            >
              Join Memory Matters
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="font-satoshi font-medium text-white/85 text-xl leading-[1.5em] max-w-2xl mt-6">
              A prestigious opportunity for aspiring neuroscientists,
              storytellers, and changemakers. Are you passionate about
              neuroscience, mental health, or making a real-world impact?
            </p>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p className="font-satoshi font-medium text-white/75 text-xl leading-[1.5em] max-w-2xl mt-4">
              Memory Matters is more than just a community — it&apos;s a
              movement to raise awareness about memory-related disorders through
              storytelling, science, and empathy. And we&apos;re building a
              crew of the most driven, creative, and compassionate students to
              help lead it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Community Platforms */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <h2
              className="font-geist font-semibold text-[#181618] leading-[1.1em] mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 46px)" }}
            >
              Our Community
            </h2>
            <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.5em] mb-12 max-w-2xl">
              Memory Matters appears on multiple platforms. Whether you want to
              immerse yourself with knowledge through attending meetings or
              listening to podcasts — we got you!
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "💬",
                name: "Discord",
                description:
                  "This is where you will be able to be on top of all announcements! Engage with the founders and the rest of the family! We would recommend you join Discord first and foremost as you will receive all of the latest information as they come!",
                cta: "Join Now!",
                href: "https://discord.gg/yZEz3Pggzs",
                color: "#5865F2",
              },
              {
                emoji: "🎧",
                name: "Podcasts",
                description:
                  "Listen to our podcasts focused on dementia! We will be featuring neurologists to discuss the causes, risks, prevention, treatment protocols, etc! Community members are earning rewards from helping us!",
                cta: "Listen Now!",
                href: "https://open.spotify.com/show/4GzPefyZS0BVY1XPLKpMm7",
                color: "#1DB954",
              },
              {
                emoji: "📸",
                name: "Instagram",
                description:
                  "Here's where we bring dementia awareness to life — through visuals, stories, and the latest discoveries in brain research. We turn complex science into creative, easy-to-understand videos that educate and inspire.",
                cta: "Follow Now!",
                href: "https://www.instagram.com/memorymatters.official/",
                color: "#E1306C",
              },
            ].map((p, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full" style={{ boxShadow: "var(--md-elev-2)" }}>
                  <div
                    className="h-20 flex items-center justify-center"
                    style={{ background: p.color }}
                  >
                    <span className="text-4xl">{p.emoji}</span>
                  </div>
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <h3 className="font-geist font-semibold text-[#181618] text-xl">
                      {p.name}
                    </h3>
                    <p className="font-satoshi font-medium text-[#575757] text-[16px] leading-[1.5em] flex-1">
                      {p.description}
                    </p>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-center font-geist font-semibold text-white text-[17px] px-6 py-3 rounded-pill hover:opacity-90 transition-opacity"
                      style={{ background: p.color }}
                    >
                      {p.cta}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="bg-[#391d47]" style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <h2
              className="font-geist font-semibold text-white leading-[1.1em] mb-4 text-center"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              What You&apos;ll Gain
            </h2>
            <p className="font-satoshi font-medium text-white/75 text-xl text-center mb-16 max-w-2xl mx-auto">
              Whether you&apos;re a future neuroscientist, a passionate
              communicator, or just someone who wants to make a difference —
              this is your chance to join something meaningful.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gains.map((gain, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="bg-white/10 rounded-2xl p-7 flex flex-col gap-5 h-full">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{gain.emoji}</span>
                    <h3
                      className="font-geist font-semibold text-white leading-[1.2em]"
                      style={{ fontSize: "clamp(17px, 1.5vw, 20px)" }}
                    >
                      {gain.title}
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {gain.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffd166] flex-shrink-0 mt-2" />
                        <span className="font-satoshi font-medium text-white/80 text-[15px] leading-[1.5em]">
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

      {/* Final CTA */}
      <section style={{ padding: "100px 0 140px" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <div
              className="rounded-2xl p-16 text-center flex flex-col items-center gap-8"
              style={{ background: "#9a5999" }}
            >
              <h3
                className="font-geist font-semibold text-white leading-[1.2em] max-w-2xl"
                style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
              >
                ✨ Whether you&apos;re a future neuroscientist, a passionate
                communicator, or just someone who wants to make a difference —
                this is your chance to join something meaningful.
              </h3>
              <a
                href="/crews"
                className="bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] px-10 py-5 rounded-pill hover:bg-[#ffd166]/90 transition-colors"
              >
                Choose Your Crew
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
