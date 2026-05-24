"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

const pastEvents = [
  {
    date: "December 6, 2025",
    title: "The Practice and Science of Music Therapy Ft. Dr. Shannon de l'Etoile",
    speaker: "Dr. Shannon de l'Etoile, Ph.D.",
    role: "Associate Dean of Graduate Studies & Professor of Music Therapy, University of Miami Frost School of Music",
    description:
      "An in-depth exploration of how music can transform the brain and support healing across a wide range of neurological and developmental conditions. Dr. de l'Etoile guided participants through the evidence-based practice of music therapy in stroke rehabilitation, Parkinson's disease, autism, traumatic brain injury, and mental health — with experiential demonstrations showing how rhythm, melody, and musical interaction support motor recovery, emotional regulation, communication, and cognitive function.",
    bullets: null as string[] | null,
  },
  {
    date: "November 20, 2025",
    title: "Alzheimer's Research Talk with Dr. Charles Seaks",
    speaker: "Dr. Charles Seaks, Ph.D.",
    role: "Director of Grant Management, Cure Alzheimer's Fund",
    description:
      "Dr. Seaks, with a background in Human Physiology from the University of Kentucky's renowned Sanders-Brown Center on Aging, shared how viral reactivation contributes to cognitive decline and how groundbreaking scientific initiatives are accelerating the path toward a cure. An opportunity to hear directly from a researcher shaping the future of Alzheimer's disease treatment and prevention.",
    bullets: null as string[] | null,
  },
  {
    date: "July 16, 2025",
    title: "Learn Research from a Neuroscience PhD mentor!",
    speaker: "Dr. Ken, PhD",
    role: "Director of Research, MedSchoolCoach",
    description: "",
    bullets: [
      "🔬 Understand what research really is and why it matters to top colleges",
      "🚀 Stand out in competitive admissions through intellectual curiosity and initiative",
      "💻 Access virtual research opportunities through MedSchoolCoach's Research Scholars Program",
      "🧠 Start your research journey with tips on forming a question, choosing a topic, and taking the first steps",
    ],
  },
];

export default function EventsPage() {
  const [bioExpanded, setBioExpanded] = useState(false);

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
                Community Hub
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={50}>
            <h1
              className="font-geist font-semibold text-white leading-[1.1em] max-w-3xl"
              style={{ fontSize: "clamp(38px, 5vw, 70px)" }}
            >
              Memory Matters Events
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p
              className="font-geist font-semibold text-[#ffd166] mt-2"
              style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
            >
              Seminars. Workshops. Live Recordings. Community Meetups.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p className="font-satoshi font-medium text-white/80 text-xl leading-[1.6em] max-w-3xl mt-6">
              Welcome to the heart of our mission! The Memory Matters Events
              page is your go-to hub for all upcoming seminars, workshops, live
              podcast recordings, guest speaker panels, and community meetups.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="font-satoshi font-medium text-white/70 text-lg leading-[1.6em] max-w-3xl mt-4">
              Whether you&apos;re a student researcher, a caregiver, a
              neuroscience enthusiast, or simply someone passionate about brain
              health and memory, our events are designed to inform, inspire, and
              connect. From expert-led research seminars to storytelling nights
              featuring patients and advocates, every event is a chance to learn
              something new and make a meaningful impact.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={250}>
            <p className="font-satoshi font-semibold text-[#ffd166] text-lg mt-6">
              ✨ Stay curious. Stay connected. Let&apos;s make memory matter —
              together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="font-satoshi font-medium text-green-800 text-sm uppercase tracking-wide">
                Upcoming Events
              </span>
            </div>
            <h2
              className="font-geist font-semibold text-[#391d47] leading-[1.1em] mb-12"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              What&apos;s Coming Up
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={50}>
            <div
              className="bg-white rounded-3xl overflow-hidden"
              style={{ boxShadow: "var(--md-elev-2)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Speaker image */}
                <div className="relative" style={{ minHeight: "420px" }}>
                  <img
                    src="https://static.wixstatic.com/media/b96cfe_fc0bd42e9cd340fe9ad4a2201ccfdec9~mv2.jpeg/v1/fill/w_388,h_340,al_c,lg_1,q_80,enc_avif,quality_auto/8F02ABAF-0804-482C-82AD-6F7A3DE7B828.jpeg"
                    alt="Nicole Kathleen Corso"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute top-6 left-6 bg-[#ffd166] text-[#181618] font-geist font-bold rounded-xl px-4 py-2 text-sm">
                    Jan 25, 2026 · 10 AM PST
                  </div>
                  <div className="absolute bottom-6 left-6 inline-flex items-center gap-1.5 bg-green-500 text-white font-satoshi font-semibold text-xs px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Register Now
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col gap-5">
                  <h3
                    className="font-geist font-semibold text-[#181618] leading-[1.2em]"
                    style={{ fontSize: "clamp(20px, 2vw, 28px)" }}
                  >
                    You Don&apos;t Have to Know Yet: Finding Your Research
                    Interests
                  </h3>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#391d47] flex items-center justify-center flex-shrink-0">
                      <span className="font-geist font-bold text-white text-sm">
                        NK
                      </span>
                    </div>
                    <div>
                      <p className="font-geist font-semibold text-[#181618] text-[15px]">
                        Nicole Kathleen Corso
                      </p>
                      <p className="font-satoshi font-medium text-[#575757] text-sm">
                        Stanford Memory Lab & Day Lab, Stanford University
                      </p>
                    </div>
                  </div>

                  <p className="font-satoshi font-medium text-[#575757] text-[15px] leading-[1.7em]">
                    What does it mean to grow up alongside memory loss — and let
                    it shape your purpose rather than limit it? Nicole shares
                    her personal connection to memory disorders and how lived
                    experience became the catalyst for her journey into
                    neuroscience research and advocacy.
                  </p>

                  <p className="font-satoshi font-medium text-[#575757] text-[15px] leading-[1.6em] italic border-l-2 border-[#ffd166] pl-4">
                    Designed for students and early explorers of science —
                    practical, honest advice on discovering your research
                    interests, even if you&apos;re unsure where to begin.
                    It&apos;s a conversation about memory, meaning, and finding
                    direction through curiosity.
                  </p>

                  {/* Speaker bio toggle */}
                  <button
                    className="flex items-center gap-2 text-[#9a5999] font-satoshi font-medium text-sm w-fit"
                    onClick={() => setBioExpanded(!bioExpanded)}
                  >
                    <span>{bioExpanded ? "Hide speaker bio" : "View speaker bio"}</span>
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      className="transition-transform duration-300"
                      style={{ transform: bioExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <path
                        d="M1 1l5 5 5-5"
                        stroke="#9a5999"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    style={{
                      maxHeight: bioExpanded ? "400px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s cubic-bezier(0.05, 0.7, 0.1, 1)",
                    }}
                  >
                    <p className="font-satoshi font-medium text-[#575757] text-[14px] leading-[1.7em] bg-[#f9edff] rounded-xl p-4">
                      Nicole (she/her) received her BA in Psychology from the
                      University of Michigan in 2016 and a MS in Health
                      Psychology in 2018. As a masters student, she worked in
                      the Psychiatric Affective Neuroimaging Laboratory with
                      Israel Liberzon, MD and in the Sleep and Chronophysiology
                      Laboratory with J. Todd Arnedt, PhD in the Department of
                      Psychiatry at the University of Michigan. Nicole joined
                      the Stanford Memory Lab in the Departments of Psychology
                      and Neurology at Stanford University led by Anthony
                      Wagner, PhD and the Mormino Lab led by Elizabeth Mormino,
                      PhD in June 2018 to explore the memory mechanisms behind
                      neurodegenerative disease. Nicole joined the Day Lab led
                      by John W. Day, MD, PhD in the Department of Neurology at
                      Stanford University in 2022 as a Data and Imaging
                      Research Scientist to continue exploring neurological
                      disease.
                    </p>
                  </div>

                  <a
                    href="https://forms.gle/vjK2fThoNZaCtawk8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#391d47] text-white font-geist font-semibold text-[15px] px-7 py-3.5 rounded-pill hover:bg-[#9a5999] transition-colors w-fit mt-auto"
                  >
                    RSVP to get the link!
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-[#391d47]" style={{ padding: "100px 0 140px" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ffd166]" />
              <span className="font-satoshi font-medium text-white/80 text-sm uppercase tracking-wide">
                Past Events
              </span>
            </div>
            <h2
              className="font-geist font-semibold text-white leading-[1.1em] mb-12"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              What We&apos;ve Done
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-6">
            {pastEvents.map((event, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="bg-white/10 rounded-2xl p-8 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <span className="font-satoshi font-medium text-[#ffd166] text-sm">
                        {event.date}
                      </span>
                      <h3 className="font-geist font-semibold text-white text-[20px] mt-1 leading-[1.3em]">
                        {event.title}
                      </h3>
                      <p className="font-satoshi font-medium text-white/60 text-sm mt-1">
                        {event.speaker} · {event.role}
                      </p>
                    </div>
                    <span className="bg-white/10 text-white/50 font-satoshi font-medium text-xs px-3 py-1.5 rounded-full flex-shrink-0">
                      Past
                    </span>
                  </div>
                  {event.bullets ? (
                    <ul className="flex flex-col gap-2 mt-1">
                      {event.bullets.map((b) => (
                        <li
                          key={b}
                          className="font-satoshi font-medium text-white/75 text-[15px] leading-[1.6em]"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-satoshi font-medium text-white/75 text-[15px] leading-[1.7em]">
                      {event.description}
                    </p>
                  )}
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
