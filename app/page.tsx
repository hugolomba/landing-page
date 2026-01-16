import Hero from "../components/ui/hero";
import WhatWeDo from "../components/ui/what-we-do";
import WhyUs from "../components/ui/why-us";
import ProjectsSection from "../components/ui/projects";
import Testimonials from "../components/ui/testimonials";
import CTA from "../components/ui/CTA";
import Insights from "../components/ui/insights";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      {/* <FeaturesSectionDemo /> */}
      <WhatWeDo />
      <WhyUs />
      <ProjectsSection />
      <Testimonials />
      <Insights />
      <CTA />
    </main>
  );
}
