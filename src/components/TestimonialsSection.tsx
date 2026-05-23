"use client";
import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";

interface Testimonial {
  avatar: string;
  alt: string;
  name: string;
  role: string;
  quote: string;
}

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      alt: "Testimonial from Sarah Johnson, a scholarship recipient with curly hair smiling warmly",
      name: "Sarah Johnson",
      role: "Scholarship Recipient",
      quote:
        "Volunteering with HopeWorks has been incredibly fulfilling. Witnessing the direct impact of their programs has reaffirmed my belief in the power of collective compassion and community action.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      alt: "Testimonial from Marcus Williams, a long-time donor and community advocate wearing glasses",
      name: "Marcus Williams",
      role: "Long-time Donor",
      quote:
        "I have been supporting HopeWorks for five years and the transparency and dedication of their team is unmatched. I can see exactly how my donations are changing lives on the ground.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      alt: "Testimonial from Elena Rodriguez, a program volunteer with brown hair who helped at a community event",
      name: "Elena Rodriguez",
      role: "Program Volunteer",
      quote:
        "The education program changed my community entirely. Children who had no access to schooling now have bright futures ahead. HopeWorks does not just donate — they transform.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-[#f9edff]"
      style={{ padding: "140px 0" }}
    >
      <div className="max-w-[1460px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left: Title */}
          <div className="lg:w-2/5 flex flex-col gap-5">
            <AnimatedSection delay={0}>
              <h2
                className="font-geist font-semibold text-[#181618] leading-[1.1em]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                Our impact, in their words
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={50}>
              <p className="font-satoshi font-medium text-[#575757] text-xl leading-[1.4em]">
                Testimonials share stories of gratitude, transformation, and
                personal positive experiences.
              </p>
            </AnimatedSection>
          </div>

          {/* Right: Testimonial */}
          <AnimatedSection delay={100} className="flex-1">
            <div className="flex flex-col gap-8">
              {/* Avatar selector */}
              <div className="flex gap-4">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className="relative transition-all duration-300"
                    aria-label={`View testimonial from ${t.name}`}
                  >
                    <div
                      className="w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-300"
                      style={{
                        borderColor:
                          activeIndex === i ? "#391d47" : "transparent",
                        opacity: activeIndex === i ? 1 : 0.4,
                      }}
                    >
                      <img
                        src={t.avatar}
                        alt={t.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {activeIndex === i && (
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "rgba(249,237,255,0)",
                          border: "2px solid #391d47",
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Quote */}
              <div className="flex flex-col gap-5">
                {/* Stars */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#ffd166"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <blockquote
                  className="font-geist font-semibold text-[#181618] leading-[1.1em]"
                  style={{ fontSize: "clamp(22px, 2vw, 28px)" }}
                >
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </blockquote>

                <div className="flex flex-col gap-1">
                  <h4
                    className="font-geist font-semibold text-[#181618] leading-[1.1em]"
                    style={{ fontSize: "clamp(18px, 1.5vw, 22px)" }}
                  >
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="font-satoshi font-medium text-[#575757] text-[18px]">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
