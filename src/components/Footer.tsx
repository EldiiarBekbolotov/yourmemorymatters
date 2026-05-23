"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const Footer: React.FC = () => {
  const pageLinks1 = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Causes", href: "#causes" },
    { label: "Events", href: "#events" },
    { label: "Volunteers", href: "#volunteer" },
    { label: "Contact", href: "#contact" },
  ];

  const pageLinks2 = [
    { label: "Become a Volunteer", href: "#volunteer" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQs", href: "#faqs" },
    { label: "Blog", href: "#blog" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Donate", href: "#causes" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: (
        <svg width="7" height="14" viewBox="0 0 7 14" fill="white">
          <path d="M4.5 5H6.5V7H4.5V14H2V7H0V5H2V3.5C2 1.57 3.07 0 5 0H7V2H5.5C4.95 2 4.5 2.45 4.5 3V5Z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      label: "Twitter/X",
      href: "https://x.com/",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/",
      icon: (
        <svg width="16" height="12" viewBox="0 0 24 17" fill="white">
          <path d="M23.495 2.205a3.02 3.02 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.069a3.02 3.02 0 0 0-2.122 2.136C0 4.069 0 8 0 8s0 3.931.505 5.795a3.02 3.02 0 0 0 2.122 2.136C4.495 16 12 16 12 16s7.505 0 9.373-.069a3.02 3.02 0 0 0 2.122-2.136C24 11.931 24 8 24 8s0-3.931-.505-5.795zM9.545 11.568V4.432L15.818 8l-6.273 3.568z" />
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
              <a href="#home" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[#ffd166] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
                      fill="#391d47"
                    />
                  </svg>
                </div>
                <span className="font-geist font-bold text-white text-xl tracking-tight">
                  HopeWorks
                </span>
              </a>

              {/* Contact info */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    className="flex-shrink-0 mt-0.5"
                  >
                    <path
                      d="M9 0C5.13 0 2 3.13 2 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="white"
                    />
                  </svg>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-satoshi font-medium text-white text-[18px] leading-[1.4em] hover:text-[#ffd166] transition-colors"
                  >
                    1450 Hope Avenue, Nashville, TN 37201
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="flex-shrink-0"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <a
                    href="tel:+16155550192"
                    className="font-satoshi font-medium text-white text-[18px] hover:text-[#ffd166] transition-colors"
                  >
                    +1 615 555 0192
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 24 20"
                    fill="white"
                    className="flex-shrink-0"
                  >
                    <path d="M20 0H4C2.9 0 2 .9 2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" />
                  </svg>
                  <a
                    href="mailto:hello@hopeworks.org"
                    className="font-satoshi font-medium text-white text-[18px] hover:text-[#ffd166] transition-colors"
                  >
                    hello@hopeworks.org
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
                      className="font-satoshi font-medium text-white text-[18px] hover:text-[#ffd166] transition-colors"
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
                      className="font-satoshi font-medium text-white text-[18px] hover:text-[#ffd166] transition-colors"
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
                style={{ fontSize: "clamp(22px, 1.8vw, 28px)" }}
              >
                Join us today and be a part of a beautiful world!
              </h3>
              <a
                href="#causes"
                className="btn-hover-slide relative overflow-hidden bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] px-8 py-4 rounded-pill flex items-center justify-center gap-3 hover:bg-[#ffd166]/90 transition-colors"
              >
                <span className="btn-text-default">Donate now</span>
                <span className="btn-text-hover">Donate now</span>
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
          <p className="font-satoshi font-medium text-white text-[18px]">
            &copy; 2026 HopeWorks Foundation. All rights reserved.
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
