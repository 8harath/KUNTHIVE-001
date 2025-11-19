'use client'

import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Contact />
      <Leva hidden />
    </>
  );
}
