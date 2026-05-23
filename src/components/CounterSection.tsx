"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const CounterSection: React.FC = () => {
  return (
    <section
      className="bg-[#f9edff] overflow-hidden"
      style={{ padding: "0 0 140px" }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col items-center gap-16">
          {/* Title */}
          <AnimatedSection delay={0} className="text-center max-w-3xl">
            <h3
              className="font-geist font-semibold text-[#181618] leading-[1.2em]"
              style={{ fontSize: "clamp(28px, 3vw, 46px)" }}
            >
              Join our community and make a positive change. Together,
              we&apos;ve impacted people over
            </h3>
          </AnimatedSection>

          {/* Big Counter */}
          <div className="relative w-full flex items-center justify-center">
            {/* Floating avatars */}
            <div
              className="absolute hidden lg:block"
              style={{ left: "0px", bottom: "10px", opacity: 0.6 }}
            >
              <img
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1e91f72fe-1772071256926.png"
                alt="Community member Sarah, a smiling woman with curly hair"
                className="w-20 h-20 rounded-full object-cover border-4 border-[#f9edff]"
              />
            </div>
            <div
              className="absolute hidden lg:block"
              style={{ left: "120px", top: "-20px", opacity: 0.6 }}
            >
              <img
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1f2046027-1763296293774.png"
                alt="Community member James, a man with glasses smiling"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#f9edff]"
              />
            </div>
            <div
              className="absolute hidden lg:block"
              style={{ right: "0px", bottom: "20px", opacity: 0.6 }}
            >
              <img
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1cd9ceda1-1763300285586.png"
                alt="Community member Maria, a woman with brown hair smiling"
                className="w-28 h-28 rounded-full object-cover border-4 border-[#f9edff]"
              />
            </div>
            <div
              className="absolute hidden lg:block"
              style={{ right: "140px", top: "-30px", opacity: 0.6 }}
            >
              <img
                src="https://img.rocket.new/generatedImages/rocket_gen_img_18c2ef05a-1772096757563.png"
                alt="Community member David, a man smiling outdoors"
                className="w-20 h-20 rounded-full object-cover border-4 border-[#f9edff]"
              />
            </div>

            <AnimatedSection delay={0}>
              <span
                className="font-geist font-semibold text-[#9a5999] leading-[1.1em] text-center block"
                style={{ fontSize: "clamp(80px, 15vw, 200px)" }}
              >
                185,000+
              </span>
            </AnimatedSection>
          </div>

          {/* CTA */}
          <AnimatedSection delay={100}>
            <a
              href="#causes"
              className="btn-hover-slide relative overflow-hidden bg-[#ffd166] text-[#181618] font-geist font-semibold text-[18px] px-10 py-5 rounded-pill flex items-center gap-3 hover:bg-[#ffd166]/90 transition-colors"
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
