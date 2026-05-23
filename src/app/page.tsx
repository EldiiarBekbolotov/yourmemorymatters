"use client";
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CTABanner from "../components/CTABanner";
import FeaturesSection from "../components/FeaturesSection";
import MissionSection from "../components/MissionStatement";
import CausesSection from "../components/CausesSection";
import CounterSection from "../components/CounterSection";
import SponsorsSection from "../components/SponsorsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import EventsSection from "../components/EventsSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f9edff]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CTABanner />
      <FeaturesSection />
      <MissionSection />
      <CausesSection />
      <CounterSection />
      <SponsorsSection />
      <TestimonialsSection />
      <EventsSection />
      <Footer />
    </div>
  );
}
