import Hero from "./components/hero";
import WhatWeDo from "./components/what-we-do";
import WhyUs from "./components/why-us";
import ProjectsSection from "./components/projects";
import Testimonials from "./components/testimonials";
import CTA from "./components/CTA";
import Insights from "./components/insights";
import Footer from "./components/footer";

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
      <Footer />
    </main>
  );
}
