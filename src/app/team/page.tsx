"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email?: string;
  initials: string;
  color: string;
}

const team: TeamMember[] = [
  {
    name: "Arya Devanath",
    role: "Founder + CEO",
    tagline:
      "As a founder of Memory Matters, I hope to spread knowledge, support, and awareness about dementia — about how it changes identities, and how we can protect and enhance care for dementia patients.",
    bio: "Hi! I'm Arya, a high school student at California High School, deeply passionate about neuroscience, medicine, and the human brain. Outside of medicine, I enjoy Bharathanatyam, writing — where I published my own book called The Defiance — watching horror movies, swimming, and much more!",
    email: "arya.devanath@gmail.com",
    initials: "AD",
    color: "#391d47",
  },
  {
    name: "Ananya Bhat",
    role: "CoLead",
    tagline:
      "I'm committed to raising awareness and developing cutting edge solutions for Dementia. Through Memory Matters, you can also join a huge team of devoted volunteers to push for a change and create something truly great.",
    bio: "Hi, I'm Ananya! I'm a junior at Novi High School in Michigan. I love volunteering and everything math. I also like dance, reading nonfiction, writing short stories, scrolling TikTok, and sprinting in Track and Field. At Memory Matters, I look forward to expanding knowledge and the accessibility of support for those affected by dementia. In the future, I'd like to use my tech and financial experience to make something meaningful and improve lives.",
    email: "bhatananya135@gmail.com",
    initials: "AB",
    color: "#9a5999",
  },
  {
    name: "Srihan Attaluri",
    role: "Health Policy Director",
    tagline:
      "Driving policy-informed approaches to memory care and brain health advocacy.",
    bio: "Srihan serves as Health Policy Director at Memory Matters, focusing on the intersection of policy, neuroscience, and community impact.",
    email: "srihan.attaluri@gmail.com",
    initials: "SA",
    color: "#391d47",
  },
  {
    name: "Mahitha",
    role: "Growth Crew Director",
    tagline:
      "I hope to spread my passion for this captivating field with my community through Memory Matters!",
    bio: "Hi! My name is Mahitha and I'm a senior in high school. My connection to the field of neuroscience stems from something personal, which has pushed me to take the time to research and deepen my understanding of psychology and how our brains work. In my free time, I enjoy reading books, writing, baking, and crocheting.",
    initials: "M",
    color: "#9a5999",
  },
  {
    name: "Dwaraka B.",
    role: "eBooks Director",
    tagline:
      "Using research and critical thinking to turn complex topics into clear, accessible content for families, caregivers, and the wider community.",
    bio: "I'm Dwaraka B., the eBook Director at Memory Matters, where I lead the creation of digital educational resources to help the public better understand dementia and Alzheimer's. Outside of work, I've been dancing for eight years, and I love reading, drawing, watching a variety of dramas, and exploring manhwas and comics — all of which fuel my creativity in developing engaging stories and educational materials.",
    email: "dwarakamaye.bolla@gmail.com",
    initials: "DB",
    color: "#391d47",
  },
  {
    name: "Venkata Kaamishetty",
    role: "Web Development Director",
    tagline: "Building the digital foundation of Memory Matters.",
    bio: "Venkata leads web development at Memory Matters, creating the digital experiences that connect our community with the tools and resources they need.",
    initials: "VK",
    color: "#9a5999",
  },
  {
    name: "Arc Fabregas",
    role: "Podcast Crew Director",
    tagline: "Bringing the voices of memory to life through audio storytelling.",
    bio: "Arc directs the Memory Matters podcast, crafting conversations that sit at the intersection of neuroscience, lived experience, and humanity.",
    initials: "AF",
    color: "#391d47",
  },
  {
    name: "Marketing Director",
    role: "Marketing Director",
    tagline: "Shaping how the world sees, feels, and remembers Memory Matters.",
    bio: "Our Marketing Director leads campaigns, social media, and content strategy to spread the Memory Matters mission far and wide.",
    initials: "MM",
    color: "#9a5999",
  },
];

export default function TeamPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const founders = team.slice(0, 2);
  const directors = team.slice(2);

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
                About the Project Starters
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={50}>
            <h1
              className="font-geist font-semibold text-white leading-[1.1em] max-w-3xl"
              style={{ fontSize: "clamp(38px, 5vw, 70px)" }}
            >
              The Team
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p
              className="font-geist font-semibold text-[#ffd166] mt-2"
              style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
            >
              Dedication. Expertise. Passion.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p className="font-satoshi font-medium text-white/80 text-xl leading-[1.6em] max-w-3xl mt-6">
              Memory Matters was founded by two passionate students driven by a
              shared goal: to make brain health and memory care more accessible,
              empathetic, and empowering for all. United by our interest in
              neuroscience and commitment to make a difference, we launched
              Memory Matters to educate, advocate, and support those affected by
              memory-related conditions — especially Alzheimer's and other
              dementias.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founders */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <h2
              className="font-geist font-semibold text-[#391d47] leading-[1.1em] mb-12"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              Founders
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((member, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div
                  className="bg-white rounded-2xl overflow-hidden flex flex-col"
                  style={{ boxShadow: "var(--md-elev-2)" }}
                >
                  {/* Color header with initials */}
                  <div
                    className="h-36 flex items-center justify-center relative"
                    style={{ background: member.color }}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="font-geist font-bold text-white text-3xl">
                        {member.initials}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col gap-4 flex-1">
                    <div>
                      <p
                        className="font-satoshi font-medium text-sm mb-1"
                        style={{ color: member.color }}
                      >
                        {member.role}
                      </p>
                      <h3
                        className="font-geist font-semibold text-[#181618]"
                        style={{ fontSize: "clamp(20px, 1.8vw, 26px)" }}
                      >
                        {member.name}
                      </h3>
                    </div>

                    <p className="font-satoshi font-medium text-[#575757] text-[16px] leading-[1.6em] italic border-l-2 border-[#ffd166] pl-4">
                      &ldquo;{member.tagline}&rdquo;
                    </p>

                    <p className="font-satoshi font-medium text-[#575757] text-[16px] leading-[1.6em]">
                      {member.bio}
                    </p>

                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-[#9a5999] font-satoshi font-medium text-[15px] hover:underline mt-auto"
                      >
                        <svg width="16" height="13" viewBox="0 0 24 20" fill="currentColor">
                          <path d="M20 0H4C2.9 0 2 .9 2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" />
                        </svg>
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="bg-[#391d47]" style={{ padding: "100px 0 140px" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <h2
              className="font-geist font-semibold text-white leading-[1.1em] mb-12"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              Directors & Leads
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((member, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div
                  className="bg-white/10 rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:bg-white/15 transition-colors"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  {/* Header */}
                  <div className="p-7 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(255,209,102,0.15)", border: "1px solid rgba(255,209,102,0.3)" }}
                      >
                        <span className="font-geist font-bold text-[#ffd166] text-lg">
                          {member.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-satoshi font-medium text-[#ffd166] text-xs mb-0.5">
                          {member.role}
                        </p>
                        <h3 className="font-geist font-semibold text-white text-[18px]">
                          {member.name}
                        </h3>
                      </div>
                    </div>

                    <p className="font-satoshi font-medium text-white/70 text-[15px] leading-[1.5em] italic">
                      &ldquo;{member.tagline}&rdquo;
                    </p>

                    {/* Expand toggle */}
                    <button className="flex items-center gap-2 text-[#ffd166] font-satoshi font-medium text-sm mt-1 w-fit">
                      <span>{expanded === i ? "Show less" : "Read more"}</span>
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        className="transition-transform duration-300"
                        style={{ transform: expanded === i ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        <path d="M1 1l5 5 5-5" stroke="#ffd166" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Expanded content */}
                    <div
                      style={{
                        maxHeight: expanded === i ? "300px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.4s cubic-bezier(0.05, 0.7, 0.1, 1)",
                      }}
                    >
                      <p className="font-satoshi font-medium text-white/75 text-[15px] leading-[1.6em] pt-2">
                        {member.bio}
                      </p>
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-2 text-[#ffd166] font-satoshi font-medium text-sm hover:underline mt-3"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg width="14" height="11" viewBox="0 0 24 20" fill="currentColor">
                            <path d="M20 0H4C2.9 0 2 .9 2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" />
                          </svg>
                          {member.email}
                        </a>
                      )}
                    </div>
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
