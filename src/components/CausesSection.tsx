"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

interface Cause {
  image: string;
  alt: string;
  title: string;
  description: string;
  progress: number;
  goal: string;
  raised: string;
}

const CausesSection: React.FC = () => {
  const causes: Cause[] = [
    {
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_18cdadb85-1773118154488.png",
      alt: "Children receiving educational supplies and books at a community school in a rural area",
      title: "Educate children out of poverty",
      description:
        "Empower children to break the cycle of poverty through quality education, mentorship, and essential learning resources.",
      progress: 65,
      goal: "$30,000",
      raised: "$19,500",
    },
    {
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1b8549cd0-1764661980829.png",
      alt: "Volunteers preparing and distributing nutritious meals to families in a food distribution center",
      title: "Feed nutritious meals to rural families",
      description:
        "Help us deliver balanced, nutritious meals to families in remote rural areas who face food insecurity every day.",
      progress: 78,
      goal: "$45,000",
      raised: "$35,100",
    },
    {
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_19bb7f3b4-1764830572966.png",
      alt: "Medical professionals providing healthcare services to patients in an underserved community clinic",
      title: "Healthcare access for all communities",
      description:
        "Support our mission to bring equitable healthcare access and life-saving medical resources to underserved populations.",
      progress: 52,
      goal: "$60,000",
      raised: "$31,200",
    },
  ];

  return (
    <section
      id="causes"
      className="bg-[#f9edff] overflow-hidden"
      style={{ padding: "0 0 140px" }}
    >
      <div className="max-w-[1460px] mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <AnimatedSection delay={0}>
            <h2
              className="font-geist font-semibold text-[#181618] leading-[1.1em] max-w-lg"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Engage with our ongoing causes
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0}>
            <a
              href="#causes"
              className="hidden md:inline-block bg-[#391d47] text-white font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-[#391d47]/80 transition-colors"
            >
              View all causes
            </a>
          </AnimatedSection>
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, i) => (
            <AnimatedSection key={i} delay={i * 50}>
              <div
                className="bg-white rounded-2xl overflow-hidden card-hover flex flex-col"
                style={{ height: "100%" }}
              >
                {/* Image */}
                <div
                  className="overflow-hidden"
                  style={{ aspectRatio: "1.4", borderRadius: "12px 12px 0 0" }}
                >
                  <img
                    src={cause.image}
                    alt={cause.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-5 flex-1">
                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-geist font-semibold text-[#181618] leading-[1.2em]"
                      style={{ fontSize: "clamp(18px, 1.5vw, 20px)" }}
                    >
                      {cause.title}
                    </h3>
                    <p className="font-satoshi font-medium text-[#575757] text-[16px] leading-[1.4em]">
                      {cause.description}
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-satoshi font-medium text-[#575757] text-sm">
                        Funding progress
                      </span>
                      <span className="font-satoshi font-medium text-[#391d47] text-[18px]">
                        {cause.progress}%
                      </span>
                    </div>
                    <div className="h-1 bg-[#f9edff] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#9a5999] rounded-full progress-bar-fill"
                        style={{ width: `${cause.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Goal / Raised */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-satoshi font-medium text-[#575757] text-sm">
                        Goal
                      </span>
                      <span
                        className="font-geist font-semibold text-[#181618] leading-[1.2em]"
                        style={{ fontSize: "clamp(18px, 1.5vw, 20px)" }}
                      >
                        {cause.goal}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 text-right">
                      <span className="font-satoshi font-medium text-[#575757] text-sm">
                        Raised money
                      </span>
                      <span
                        className="font-geist font-semibold text-[#9a5999] leading-[1.2em]"
                        style={{ fontSize: "clamp(18px, 1.5vw, 20px)" }}
                      >
                        {cause.raised}
                      </span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-auto pt-2">
                    <button className="btn-hover-slide relative overflow-hidden w-full bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] py-4 rounded-pill flex items-center justify-center gap-3 hover:bg-[#ffd166]/90 transition-colors">
                      <span className="btn-text-default">Donate now</span>
                      <span className="btn-text-hover">Donate now</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="#181618"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
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

export default CausesSection;
