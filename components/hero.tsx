"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Button } from "./ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative container">
        <p className="font-mono text-xs sm:text-sm text-foreground/60 mb-6 tracking-wide">
          AI/ML DEVELOPER | UNDERGRADUATE STUDENT | BUILDING MODERN WEB SOLUTIONS
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-sentient font-extralight leading-tight">
          Web Developer <br />
          <span className="text-foreground/80">&</span> <i className="font-light">Designer</i>
        </h1>

        <p className="font-mono text-sm sm:text-base md:text-lg text-foreground/70 text-balance mt-8 max-w-[600px] mx-auto">
          Crafting unique digital experiences with clean code and creative design
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link className="contents max-sm:w-full" href="#projects">
            <Button
              size="lg"
              className="max-sm:w-full"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [View Projects]
            </Button>
          </Link>
          <Link className="contents max-sm:w-full" href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="max-sm:w-full"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [Get in Touch]
            </Button>
          </Link>
        </div>
      </div>

      <div className="pb-8 flex justify-center animate-bounce">
        <ChevronDown className="text-foreground/40" size={32} />
      </div>
    </div>
  );
}
