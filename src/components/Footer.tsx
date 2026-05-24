"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const Footer: React.FC = () => {
  const pageLinks1 = [
    { label: "Home", href: "/" },
    { label: "Mission", href: "/mission" },
    { label: "Team", href: "/team" },
    { label: "Events", href: "/events" },
    { label: "Opportunities", href: "/opportunities" },
    { label: "Join", href: "/join" },
    { label: "Crews", href: "/crews" },
    { label: "Start a Chapter", href: "/start-a-chapter" },
  ];

  const pageLinks2 = [
    { label: "Apps Crew", href: "/apps-crew" },
    { label: "eBooks Crew", href: "/ebooks-crew" },
    { label: "Podcast Crew", href: "/podcast-crew" },
    { label: "Growth Crew", href: "/growth-crew" },
    { label: "Marketing Crew", href: "/marketing-crew" },
  ];

  const socialLinks = [
    {
      label: "Discord",
      href: "https://discord.gg/s5nJMKJKMu",
      icon: (
        <svg width="16" height="14" viewBox="0 0 24 20" fill="white">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.043.031.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/memory_matters2025/",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/memory-matters-8709a6379/",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-[#181618]"
      style={{ paddingTop: "110px", paddingBottom: "50px" }}
    >
      <div className="max-w-[1460px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Left: Brand + Contact */}
          <AnimatedSection delay={0}>
            <div className="flex flex-col gap-8">
              {/* Logo */}
              <a href="/" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/android-chrome-192x192.png" alt="Memory Matters logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-geist font-bold text-white text-xl tracking-tight">
                  Memory Matters
                </span>
              </a>

              <p className="font-satoshi font-medium text-white/70 text-[17px] leading-[1.5em]">
                A youth-led initiative dedicated to raising awareness about
                memory-related conditions through storytelling, science, and
                community.
              </p>

              {/* Contact info */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <svg width="21" height="18" viewBox="0 0 24 20" fill="white" className="flex-shrink-0">
                    <path d="M20 0H4C2.9 0 2 .9 2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" />
                  </svg>
                  <a
                    href="mailto:memorymatters2025@gmail.com"
                    className="font-satoshi font-medium text-white text-[17px] hover:text-[#ffd166] transition-colors"
                  >
                    memorymatters2025@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Center: Page Links */}
          <AnimatedSection delay={50}>
            <div className="flex flex-col gap-6">
              <h2
                className="font-geist font-semibold text-white"
                style={{ fontSize: "clamp(22px, 1.8vw, 28px)" }}
              >
                Page links
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex flex-col gap-4">
                  {pageLinks1.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="font-satoshi font-medium text-white text-[17px] hover:text-[#ffd166] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  {pageLinks2.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="font-satoshi font-medium text-white text-[17px] hover:text-[#ffd166] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: CTA Card */}
          <AnimatedSection delay={100}>
            <div className="bg-[#9a5999] rounded-2xl p-10 flex flex-col gap-8">
              <h3
                className="font-geist font-semibold text-white leading-[1.2em]"
                style={{ fontSize: "clamp(22px, 1.8vw, 26px)" }}
              >
                Join us to spark stories, share science, and support those
                impacted by memory loss.
              </h3>
              <a
                href="/join"
                className="btn-hover-slide relative overflow-hidden bg-[#ffd166] text-[#181618] font-geist font-semibold text-[17px] px-8 py-4 rounded-pill flex items-center justify-center gap-3 hover:bg-[#ffd166]/90 transition-colors"
              >
                <span className="btn-text-default">Get Involved</span>
                <span className="btn-text-hover">Get Involved</span>
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
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#575757] mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-satoshi font-medium text-white text-[17px]">
            &copy; 2026 Memory Matters. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-md bg-[#391d47] flex items-center justify-center hover:bg-[#9a5999] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
