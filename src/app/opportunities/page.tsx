"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";

export default function OpportunitiesPage() {
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
                Get Involved
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={50}>
            <h1
              className="font-geist font-semibold text-white leading-[1.1em] max-w-3xl"
              style={{ fontSize: "clamp(38px, 5vw, 70px)" }}
            >
              Memory Matters Opportunities
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p
              className="font-geist font-semibold text-[#ffd166] mt-2"
              style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
            >
              Science. Story. Community.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p className="font-satoshi font-medium text-white/80 text-xl leading-[1.6em] max-w-3xl mt-6">
              The Memory Matters Opportunities Page is your gateway to joining a
              movement at the intersection of science, story, and community.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="font-satoshi font-medium text-white/70 text-lg leading-[1.6em] max-w-3xl mt-4">
              Whether you&apos;re looking to co-host a podcast episode,
              contribute to a newsletter read by 100,000+ professionals, intern
              on an AI project for early dementia detection, or help design
              support tools for caregivers — this is where it all begins.
              We&apos;re always looking for passionate voices, sharp minds, and
              compassionate hearts to help build a better future for brain
              health. From research to outreach, storytelling to tech, our
              opportunities are ever-evolving — just like the field we work in.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Publish & Network */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <div
              className="bg-white rounded-3xl overflow-hidden"
              style={{ boxShadow: "var(--md-elev-2)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-[#391d47] p-12 flex flex-col gap-6 justify-center">
                  <span className="font-satoshi font-medium text-[#ffd166] text-sm uppercase tracking-widest">
                    Newsletter · Science Communication
                  </span>
                  <h2
                    className="font-geist font-semibold text-white leading-[1.2em]"
                    style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
                  >
                    Publish and Network with 35,000+ researchers!
                  </h2>
                  <p className="font-satoshi font-medium text-white/80 text-[17px] leading-[1.7em]">
                    Memory Matters is now accepting guest contributors for{" "}
                    <span className="text-[#ffd166] font-semibold">
                      Scientific Horizons
                    </span>{" "}
                    — a fast-growing newsletter read by 100,000+ professionals,
                    researchers, and science lovers worldwide. 🔬
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSewSrTo0TYYXMhO8QxcRiaM1CIiFgxUk0WjFoCVrgAtfS16hw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#ffd166] text-[#181618] font-geist font-semibold text-[16px] px-8 py-4 rounded-pill hover:bg-[#ffd166]/90 transition-colors w-fit"
                  >
                    Submit Here
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="#181618"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                <div className="p-12 flex flex-col gap-6">
                  <p className="font-satoshi font-medium text-[#575757] text-[16px] leading-[1.7em]">
                    Are you a leader, MD, PhD, high school researcher, or
                    science communicator with a passion for neuroscience and
                    medicine? Whether you&apos;re working on a breakthrough
                    study, offering a fresh take, or exploring the frontiers of
                    your field, we want to spotlight your voice.
                  </p>

                  <div>
                    <h4 className="font-geist font-semibold text-[#391d47] text-[18px] mb-4">
                      🎯 Why Contribute?
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {[
                        "Share your insights with a global, interdisciplinary audience",
                        "Promote your research, lab, or startup",
                        "Grow your science communication + writing portfolio",
                        "Network with MDs, PhDs, and innovative thinkers across disciplines",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#391d47]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              width="10"
                              height="8"
                              viewBox="0 0 10 8"
                              fill="none"
                            >
                              <path
                                d="M1 4l2.5 2.5L9 1"
                                stroke="#391d47"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="font-satoshi font-medium text-[#575757] text-[16px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="font-satoshi font-medium text-[#9a5999] text-[15px] italic">
                    If you&apos;re scientifically minded and passionate about
                    sharing knowledge, you&apos;re welcome here.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech Competition */}
      <section className="bg-[#391d47]" style={{ padding: "100px 0" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 flex flex-col gap-6">
                  <span className="font-satoshi font-medium text-[#ffd166] text-sm uppercase tracking-widest">
                    Apps Crew · Global Competition
                  </span>
                  <h2
                    className="font-geist font-semibold text-white leading-[1.2em]"
                    style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
                  >
                    Calling all tech-nerds! Compete Globally!
                  </h2>
                  <p className="font-satoshi font-medium text-white/80 text-[17px] leading-[1.7em]">
                    The Apps Crew will be working on a submission for a global
                    competition focused on solving real-world problems through
                    creativity, science, and innovation! We&apos;re inviting YOU
                    to be a part of it. Whether you&apos;re into neuroscience,
                    design, tech, communication, or simply want to make a
                    difference — this is your chance to collaborate, create, and
                    compete on a global stage!
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "🌎", text: "Work with a passionate, mission-driven team" },
                      { icon: "🚀", text: "Gain real-world innovation experience" },
                      { icon: "👨‍💼", text: "Mentorship from professional Tech strategists and Leaders" },
                      { icon: "🏆", text: "Win up to $100,000 in prizes!" },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className="bg-white/10 rounded-xl p-4 flex flex-col gap-2"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-satoshi font-medium text-white/80 text-sm leading-[1.5em]">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="font-satoshi font-medium text-white/50 text-[14px] italic">
                    NOTE: Memory Matters is solely dedicated to creating a tool
                    that will excel in this competition!
                  </p>

                  <a
                    href="https://forms.gle/ZAiajJTbqN8ct49v9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#ffd166] text-[#181618] font-geist font-semibold text-[16px] px-8 py-4 rounded-pill hover:bg-[#ffd166]/90 transition-colors w-fit"
                  >
                    Apply Here
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="#181618"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                <div
                  className="p-12 flex flex-col justify-center items-center"
                  style={{
                    background: "rgba(255,209,102,0.06)",
                    borderLeft: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌎💡</div>
                    <p
                      className="font-geist font-bold text-[#ffd166]"
                      style={{ fontSize: "clamp(52px, 6vw, 86px)" }}
                    >
                      $100K
                    </p>
                    <p className="font-satoshi font-medium text-white/60 text-lg mt-1">
                      in prizes up for grabs
                    </p>
                    <div className="mt-8 bg-white/10 rounded-2xl p-6">
                      <p className="font-satoshi font-medium text-white/70 text-[15px] leading-[1.8em]">
                        Boost your college apps &amp; portfolio.
                        <br />
                        Collaborate with a global team.
                        <br />
                        Make a real-world impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* eBooks Competition */}
      <section style={{ padding: "100px 0 140px" }}>
        <div className="max-w-[1460px] mx-auto px-8">
          <AnimatedSection delay={0}>
            <div
              className="bg-white rounded-3xl overflow-hidden"
              style={{ boxShadow: "var(--md-elev-2)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-[#9a5999] p-12 flex flex-col gap-6 justify-center">
                  <span className="font-satoshi font-medium text-[#ffd166] text-sm uppercase tracking-widest">
                    eBooks Crew · Global Writing Competition
                  </span>
                  <h2
                    className="font-geist font-semibold text-white leading-[1.2em]"
                    style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
                  >
                    eBooks Competition Submission
                  </h2>
                  <p className="font-satoshi font-medium text-white/80 text-[17px] leading-[1.7em]">
                    Have a story, poem, or creative piece that explores memory,
                    identity, or what it means to remember? The Memory Matters
                    Global eBook Competition invites writers from around the
                    world to submit original work for a chance to be published
                    in a global anthology, earn cash prizes, and have their
                    story transformed into art, media, and conversation.
                  </p>
                  <a
                    href="https://forms.gle/ZAiajJTbqN8ct49v9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#ffd166] text-[#181618] font-geist font-semibold text-[16px] px-8 py-4 rounded-pill hover:bg-[#ffd166]/90 transition-colors w-fit"
                  >
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="#181618"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>

                <div className="p-12 flex flex-col gap-6">
                  <p className="font-satoshi font-medium text-[#575757] text-[16px] leading-[1.7em]">
                    Whether you write from lived experience, imagination, or
                    curiosity about the brain, this competition is about turning
                    memory into something that lasts.
                  </p>

                  <div>
                    <h4 className="font-geist font-semibold text-[#391d47] text-[18px] mb-4">
                      What winners receive:
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {[
                        "Cash prizes for top entries",
                        "Custom illustrations and motion graphics",
                        "Feature on the Memory Matters Podcast",
                        "Spotlight placement in the global eBook anthology",
                        "Professional editing and beautiful design treatment",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#9a5999]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              width="10"
                              height="8"
                              viewBox="0 0 10 8"
                              fill="none"
                            >
                              <path
                                d="M1 4l2.5 2.5L9 1"
                                stroke="#9a5999"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="font-satoshi font-medium text-[#575757] text-[16px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="font-satoshi font-medium text-[#575757] text-[15px] italic border-l-2 border-[#9a5999] pl-4">
                    All published works remain anonymous, honoring the power of
                    story over spotlight.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
