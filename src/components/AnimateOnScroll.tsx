"use client";

import { useInView } from "@/hooks/useInView";
import type { ReactNode } from "react";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "scale-in" | "fade-in";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

const animationClasses: Record<AnimationType, string> = {
  "fade-up": "opacity-0 translate-y-8",
  "fade-left": "opacity-0 -translate-x-8",
  "fade-right": "opacity-0 translate-x-8",
  "scale-in": "opacity-0 scale-95",
  "fade-in": "opacity-0",
};

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const [ref, isInView] = useInView({ threshold });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
