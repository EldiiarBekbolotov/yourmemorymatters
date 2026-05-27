"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const previewTeam = [
  {
    name: "Arya Devanath",
    role: "Founder + CEO",
    bio: "High school student at California High School, passionate about neuroscience and medicine. Published author of The Defiance.",
    initials: "AD",
    color: "#391d47",
    email: "arya.devanath@gmail.com",
  },
  {
    name: "Ananya Bhat",
    role: "Co-Lead",
    bio: "Junior at Novi High School, Michigan. Passionate about math, track, and making dementia support more accessible through tech.",
    initials: "AB",
    color: "#9a5999",
    email: "bhatananya135@gmail.com",
  },
  {
    name: "Venkata Kaamishetty",
    role: "Web Development Director",
    bio: "Building the digital experiences that connect our community with tools and resources they need.",
    initials: "VK",
    color: "#391d47",
  },
];

export default function OurTeamSection() {
  return (
    <section className="bg-[#f9edff]" style={{ padding: "100px 0" }}>
      <div className="max-w-[1460px] mx-auto px-8">
        {/* Header */}
        <AnimatedSection delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#391d47]/8 rounded-full px-4 py-2 w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-[#ffd166]" />
                <span className="font-satoshi font-medium text-[#391d47] text-sm tracking-wide">
                  The People Behind the Mission
                </span>
              </div>
              <h2
                className="font-geist font-semibold text-[#391d47] leading-[1.1em]"
                style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
              >
                Our Team
              </h2>
            </div>
            <a
              href="/team"
              className="font-satoshi font-medium text-[#9a5999] text-[16px] hover:underline flex items-center gap-1.5 self-end"
            >
              See all team members →
            </a>
          </div>
        </AnimatedSection>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {previewTeam.map((member, i) => (
            <AnimatedSection key={i} delay={i * 70}>
              <div
                className="bg-white rounded-[28px] overflow-hidden flex flex-col card-hover"
                style={{ boxShadow: "var(--md-elev-1)" }}
              >
                {/* Color header */}
                <div
                  className="h-28 flex items-center justify-center"
                  style={{ background: member.color }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="font-geist font-bold text-white text-2xl">
                      {member.initials}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-7 flex flex-col gap-3 flex-1">
                  <div>
                    <p
                      className="font-satoshi font-medium text-xs mb-1 uppercase tracking-wider"
                      style={{ color: member.color }}
                    >
                      {member.role}
                    </p>
                    <h3 className="font-geist font-semibold text-[#181618] text-[18px]">
                      {member.name}
                    </h3>
                  </div>
                  <p className="font-satoshi font-medium text-[#575757] text-[14px] leading-[1.6em] flex-1">
                    {member.bio}
                  </p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1.5 text-[#9a5999] font-satoshi font-medium text-[13px] hover:underline mt-1"
                    >
                      <svg width="12" height="10" viewBox="0 0 24 20" fill="currentColor">
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

        {/* Apply Now CTA */}
        <AnimatedSection delay={150}>
          <div
            className="bg-[#391d47] rounded-[28px] p-10 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h3
                className="font-geist font-semibold text-white leading-[1.2em] mb-3"
                style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
              >
                Want to join the team?
              </h3>
              <p className="font-satoshi font-medium text-white/70 text-[16px] leading-[1.6em] max-w-lg">
                We&apos;re always looking for passionate students and advocates to help grow Memory Matters in their school or community. Start your own chapter today.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <a
                href="/start-a-chapter"
                className="btn-hover-slide inline-flex items-center gap-3 bg-[#ffd166] text-[#181618] font-geist font-semibold text-[16px] px-8 py-4 rounded-pill"
              >
                <span className="btn-text-default">Apply Now</span>
                <span className="btn-text-hover">Apply Now</span>
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
              <a
                href="/team"
                className="inline-flex items-center gap-2 text-white/70 font-satoshi font-medium text-[15px] hover:text-white transition-colors px-4 py-4"
              >
                Full Team →
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
