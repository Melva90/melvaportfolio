"use client";

import SkillsMarquee from "@/components/running-marquee";
import HeroSection from "./hero-section";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Experience from "./experience";
import Projects from "./projects";
import Education from "./education";
import HireMe from "./hire-me";

const IndexPage = () => {
  return (
    <div className="w-full">
      <MaxWidthWrapper className="max-w-full">
        <HeroSection />
      </MaxWidthWrapper>
      <SkillsMarquee />
      <MaxWidthWrapper className="max-w-full">
        <Experience />
      </MaxWidthWrapper>
      <MaxWidthWrapper className="max-w-full">
        <Projects />
      </MaxWidthWrapper>
      <MaxWidthWrapper className="max-w-full">
        <Education />
      </MaxWidthWrapper>
      <MaxWidthWrapper className="max-w-full">
        <HireMe />
      </MaxWidthWrapper>
    </div>
  );
};

export default IndexPage;