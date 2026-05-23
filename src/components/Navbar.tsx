"use client";
import React, { useEffect, useRef, useState } from "react";

interface NavbarProps {
  activeSection?: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection = "home" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Causes", href: "#causes" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#391d47]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1460px] mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-[#ffd166] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
                fill="#391d47"
              />
            </svg>
          </div>
          <span className="font-geist font-700 text-white text-xl tracking-tight">
            HopeWorks
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link-underline font-satoshi font-medium text-[18px] text-white transition-colors duration-300 hover:text-[#ffd166] ${
                activeSection === link.label.toLowerCase()
                  ? "active text-[#ffd166]"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#causes"
            className="btn-hover-slide relative overflow-hidden bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] px-8 py-4 rounded-pill transition-all duration-300 hover:bg-[#ffd166]/90 flex items-center gap-3"
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#391d47] border-t border-white/10 px-8 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-satoshi font-medium text-white text-lg hover:text-[#ffd166] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#causes"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-[#ffd166] text-[#181618] font-geist font-semibold text-base px-6 py-3 rounded-pill text-center"
          >
            Donate now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
