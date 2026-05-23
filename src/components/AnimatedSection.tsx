"use client";
import React, { useEffect, useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delay = 0,
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add("appear-visible");
              el.classList.remove("appear-hidden");
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`appear-hidden ${className}`} style={style}>
      {children}
    </div>
  );
};

export default AnimatedSection;
