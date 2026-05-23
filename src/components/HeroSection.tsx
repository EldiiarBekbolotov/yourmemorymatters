"use client";
import React from "react";
import AnimatedSection from "./AnimatedSection";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-[#391d47] overflow-hidden"
      style={{ paddingTop: "200px", paddingBottom: "140px" }}
    >
      {/* Background pattern shapes */}
      <div
        className="absolute pointer-events-none opacity-10"
        style={{
          width: "984px",
          height: "282px",
          top: "-150px",
          right: "-80px",
          background:
            "repeating-linear-gradient(45deg, #9a5999 0, #9a5999 1px, transparent 0, transparent 50%)",
          backgroundSize: "8px 8px",
          transform: "rotate(15deg)",
          zIndex: 1,
        }}
      />

      <div
        className="absolute pointer-events-none opacity-10"
        style={{
          width: "984px",
          height: "282px",
          bottom: "-150px",
          left: "-80px",
          background:
            "repeating-linear-gradient(45deg, #9a5999 0, #9a5999 1px, transparent 0, transparent 50%)",
          backgroundSize: "8px 8px",
          transform: "rotate(15deg)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-[1460px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-0 items-start">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <AnimatedSection delay={0}>
                <h1
                  className="font-geist font-semibold text-white leading-[1.1em]"
                  style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
                >
                  Empowering lives{" "}
                  <span className="text-[#ffd166]">through</span> hope and
                  action
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={50}>
                <p className="font-satoshi font-medium text-white/90 text-xl leading-[1.4em] max-w-xl">
                  Join HopeWorks Foundation in our mission to deliver education,
                  healthcare, and sustainable livelihoods to underserved
                  communities across the globe.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={100}>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#causes"
                  className="bg-[#9a5999] text-white font-geist font-semibold text-[18px] px-8 py-4 rounded-pill hover:bg-[#9a5999]/80 transition-all duration-300"
                >
                  View causes
                </a>
              </div>
            </AnimatedSection>

            {/* Social proof */}
            <AnimatedSection delay={200}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                {/* Avatar stack */}
                <div className="flex items-center">
                  {[
                    {
                      src: "https://img.rocket.new/generatedImages/rocket_gen_img_163edd4c9-1766932602339.png",
                      alt: "Donor Sarah M., smiling woman with curly hair",
                    },
                    {
                      src: "https://img.rocket.new/generatedImages/rocket_gen_img_12355a758-1763292077598.png",
                      alt: "Donor James K., man with glasses",
                    },
                    {
                      src: "https://img.rocket.new/generatedImages/rocket_gen_img_11309e5df-1778772912370.png",
                      alt: "Donor Maria L., woman with brown hair",
                    },
                    {
                      src: "https://img.rocket.new/generatedImages/rocket_gen_img_18c2ef05a-1772096757563.png",
                      alt: "Donor David R., man smiling outdoors",
                    },
                  ].map((avatar, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[#181618] overflow-hidden"
                      style={{
                        marginLeft: i === 0 ? 0 : "-10px",
                        zIndex: 4 - i,
                      }}
                    >
                      <img
                        src={avatar.src}
                        alt={avatar.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div
                    className="w-10 h-10 rounded-full border-2 border-[#181618] bg-white flex items-center justify-center"
                    style={{ marginLeft: "-10px", zIndex: 0 }}
                  >
                    <span className="font-satoshi font-bold text-[#181618] text-xs">
                      YOU?
                    </span>
                  </div>
                </div>
                {/* Rating */}
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg
                        key={s}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#ffd166"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-satoshi font-medium text-white text-[18px]">
                    Trusted by 500+ donors
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Image Grid */}
          <div className="flex-1 flex flex-col gap-5 mt-10 lg:mt-0">
            <div className="flex gap-5 items-end">
              {/* Main image with overlay stat */}
              <AnimatedSection delay={300} className="flex-1">
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ aspectRatio: "1.22" }}
                >
                  <img
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1c4eef0be-1764654289232.png"
                    alt="Volunteers distributing food and supplies to children in a community center"
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(154,89,153,0) 0%, #300546 73%)",
                    }}
                  />

                  {/* Stat overlay */}
                  <div className="absolute bottom-4 right-4 text-right">
                    <p className="font-geist font-semibold text-white text-[34px] leading-[1.1em]">
                      89%
                    </p>
                    <p className="font-satoshi font-medium text-white text-sm">
                      Community impact score
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={350}>
              <div className="flex gap-5 items-start">
                {/* Square image */}
                <div
                  className="flex-1 relative rounded-2xl overflow-hidden"
                  style={{ aspectRatio: "1" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1635415295964-cf01257eb307"
                    alt="Children in a classroom learning with books and educational materials"
                    className="w-full h-full object-cover"
                  />

                  {/* Counter badge */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#391d47]/80 backdrop-blur-sm py-3 px-4 flex items-center justify-between">
                    <div>
                      <p className="font-geist font-semibold text-white text-2xl leading-tight">
                        5,000+
                      </p>
                      <p className="font-satoshi font-medium text-[#f9edff] text-xs">
                        Monthly Contributions
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                          fill="#391d47"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Yellow CTA card */}
            <AnimatedSection delay={400}>
              <div className="bg-[#ffd166] rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
                      fill="#391d47"
                    />
                  </svg>
                </div>
                <p className="font-geist font-semibold text-[#181618] text-[18px] leading-[1.3em] flex-1">
                  Every donation provides food, shelter, and life-changing
                  community support.
                </p>
                <a
                  href="#causes"
                  className="flex-shrink-0 bg-[#181618] text-white font-geist font-semibold text-base px-6 py-3 rounded-pill hover:bg-[#181618]/80 transition-colors"
                >
                  Donate now
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
