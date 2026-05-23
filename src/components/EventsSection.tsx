"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

interface Event {
  image: string;
  alt: string;
  title: string;
  date: string;
}

const EventsSection: React.FC = () => {
  const events: Event[] = [
    {
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1203b8edf-1768751345944.png",
      alt: "Volunteers participating in a community clean-up day event picking up litter in a park",
      title: "Join our community clean-up day event together",
      date: "Mar 15, 2026",
    },
    {
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_154092f2c-1770901767277.png",
      alt: "Participants celebrating nature and environmental awareness at an outdoor conservation event",
      title: "Celebrate nature and foster environmental consciousness",
      date: "Mar 22, 2026",
    },
    {
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_184c680f7-1767870253658.png",
      alt: "Runners participating in a charity fun run to raise funds for community initiatives",
      title: "Annual charity fun run to support community initiatives",
      date: "Apr 5, 2026",
    },
  ];

  return (
    <section
      id="events"
      className="bg-[#f9edff] overflow-hidden"
      style={{ padding: "0 0 140px" }}
    >
      <div className="max-w-[1460px] mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <AnimatedSection delay={0}>
            <h2
              className="font-geist font-semibold text-[#181618] leading-[1.1em]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Recent events
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0}>
            <a
              href="#events"
              className="hidden md:inline-block bg-[#391d47] text-white font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-[#391d47]/80 transition-colors"
            >
              Explore all events
            </a>
          </AnimatedSection>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <AnimatedSection key={i} delay={i * 50}>
              <div className="bg-white rounded-2xl overflow-hidden card-hover cursor-pointer group">
                {/* Image */}
                <div
                  className="overflow-hidden rounded-xl m-5"
                  style={{ aspectRatio: "1.54" }}
                >
                  <img
                    src={event.image}
                    alt={event.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="px-5 pb-5 flex flex-col gap-8">
                  <h3
                    className="font-geist font-semibold text-[#181618] leading-[1.2em]"
                    style={{ fontSize: "clamp(18px, 1.5vw, 20px)" }}
                  >
                    {event.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
                          fill="#575757"
                        />
                      </svg>
                      <span className="font-satoshi font-medium text-[#575757] text-[16px]">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      <span className="font-geist font-semibold text-[#181618] text-[18px]">
                        View event
                      </span>
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                        <path
                          d="M1 1l6 6-6 6"
                          stroke="#181618"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
