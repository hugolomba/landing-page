"use client";
import FeaturesSectionDemo from "./features-section-demo-2";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full p-4 pt-28 flex flex-col items-center relative max-w-7xl mx-auto"
    >
      <div
        className="pointer-events-none absolute top-5 left-1/2 h-full w-full -translate-x-1/2 rounded-full
    bg-gradient-to-tr
    from-indigo-200/30 via-purple-200/30 to-pink-200/30
    dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20
    blur-3xl"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full
    bg-gradient-to-tr
    from-sky-200/10 to-cyan-200/10
    dark:from-sky-400/10 dark:to-cyan-400/10
    blur-3xl"
      />
      <div className="max-w-6xl w-full flex flex-col items-start">
        <div className="flex flex-col gap-2 items-start w-full md:items-center">
          <div className="border border-neutral-300 dark:border-neutral-700 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-600 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50 transition-colors">
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight md:text-center">
            What we do
            <br />
            <span className="opacity-80 md:text-center">
              and what we delivery
            </span>
          </h2>

          <p className="mt-4 text-md opacity-80 max-w-3xl md:text-center">
            Your website should do more than just look good. It should attract,
            engage and convert.
            <br />
            We design and build high‑performance websites for growing businesses
            in Dublin.
          </p>
        </div>
        <FeaturesSectionDemo />
      </div>
    </motion.section>
  );
}
