"use client";
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedInSection from "../components/FeaturedInSection";
import BookSection from "../components/BookSection";
import AboutSection from "../components/AboutSection";
import OurStorySection from "../components/OurStorySection";
import CTABanner from "../components/CTABanner";
import FeaturesSection from "../components/FeaturesSection";
import MissionSection from "../components/MissionStatement";
import OpenCrewsSection from "../components/OpenCrewsSection";
import OurTeamSection from "../components/OurTeamSection";
import GetInvolvedSection from "../components/GetInvolvedSection";
import CounterSection from "../components/CounterSection";
import SponsorsSection from "../components/SponsorsSection";
import PartnerSection from "../components/PartnerSection";
import TestimonialsSection from "../components/TestimonialsSection";
import EventsSection from "../components/EventsSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f9edff]">
      <Navbar />
      <HeroSection />
      <FeaturedInSection />
      <BookSection />
      <AboutSection />
      <OurStorySection />
      <CTABanner />
      <FeaturesSection />
      <MissionSection />
      <OpenCrewsSection />
      <OurTeamSection />
      <GetInvolvedSection />
      <CounterSection />
      <SponsorsSection />
      <PartnerSection />
      <TestimonialsSection />
      <EventsSection />
      <Footer />
    </div>
  );
}
