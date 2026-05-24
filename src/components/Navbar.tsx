"use client";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Mission", href: "/mission" },
    { label: "Team", href: "/team" },
    { label: "Events", href: "/events" },
    { label: "Opportunities", href: "/opportunities" },
    { label: "Join", href: "/join" },
    { label: "Crews", href: "/crews" },
    { label: "Start a Chapter", href: "/start-a-chapter" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#391d47] shadow-[0px_1px_2px_rgba(57,29,71,0.32),_0px_2px_6px_2px_rgba(57,29,71,0.16)]"
          : "bg-transparent"
      }`}
      style={{ transition: "background-color 300ms cubic-bezier(0.2,0,0,1), box-shadow 300ms cubic-bezier(0.2,0,0,1)" }}
    >
      <div className="max-w-[1460px] mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="/android-chrome-192x192.png"
              alt="Memory Matters logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-geist font-700 text-white text-xl tracking-tight">
            Memory Matters
          </span>
        </a>

        {/* Desktop Nav — only shows at xl (1280px+) */}
        <div className="hidden xl:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link-underline font-satoshi font-medium text-[15px] text-white transition-colors duration-200 hover:text-[#ffd166]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button — desktop only */}
        <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
          <a
            href="/join"
            className="btn-hover-slide relative overflow-hidden bg-[#ffd166] text-[#181618] font-geist font-semibold text-[15px] px-6 py-3 rounded-pill flex items-center gap-2"
          >
            <span className="btn-text-default">Get Involved</span>
            <span className="btn-text-hover">Get Involved</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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

        {/* Hamburger — shows below xl */}
        <button
          className="xl:hidden text-white p-2 rounded-full md3-state"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ transition: "background-color 150ms cubic-bezier(0.2,0,0,1)" }}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{ transition: "transform 300ms cubic-bezier(0.05,0.7,0.1,1)" }}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ transition: "transform 300ms cubic-bezier(0.05,0.7,0.1,1)" }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu — slides in below xl */}
      <div
        className="xl:hidden bg-[#391d47] border-t border-white/10 overflow-hidden"
        style={{
          maxHeight: mobileOpen ? "600px" : "0",
          transition: "max-height 400ms cubic-bezier(0.05,0.7,0.1,1)",
        }}
      >
        <div className="px-8 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-satoshi font-medium text-white text-base px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
              style={{ transition: "background-color 150ms cubic-bezier(0.2,0,0,1)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/join"
            onClick={() => setMobileOpen(false)}
            className="mt-3 bg-[#ffd166] text-[#181618] font-geist font-semibold text-base px-6 py-3 rounded-pill text-center"
          >
            Get Involved
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
