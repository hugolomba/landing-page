"use client";
import { Button } from "@heroui/button";
import StatsSection from "@/components/ui/stats";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] hero overflow-hidden  md:mt-0 flex flex-col   md:gap-10 items-center justify-evenly md:justify-between max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row-reverse md:mt-20 ">
        <div
          className="relative md:w-2/3 overflow-hidden
    
    dark:mask-[radial-gradient(ellipse_at_center,black_0%,transparent_90%)]
    dark:-webkit-mask-[radial-gradient(ellipse_at_center,black_0%,transparent_90%)]"
        >
          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-scale-down"
          >
            <source
              src="https://www.pexels.com/download/video/35049014/"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8 text-center px-4 relative w-full md:w-2/3 md:justify-center md:items-start md:px-10">
          <div className="m-0 mt-2 border border-neutral-300 dark:border-neutral-700 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-600 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50 transition-colors">
            Launch your website with
          </div>
          <h1
            className="md:text-start
        text-7xl md:text-8xl font-bold tracking-tight
       bg-linear-to-b  from-black via-gray-700 to-gray-400 dark:from-white dark:via-gray-200 dark:to-gray-400
        bg-clip-text text-transparent
          drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]
        m-0 "
          >
            Supernova
            <span className="block text-3xl m-0">Web Design in Dublin</span>
          </h1>
          <p className="text-lg opacity-80 mt-4 md:text-start">
            We design and build modern, high-performance websites for businesses
            in Dublin that want to grow, stand out and sell more online.
          </p>

          <div className="w-full flex justify-center gap-4 mt-4 md:justify-start">
            <Button
              size="md"
              variant="flat"
              className="relative rounded-full px-6 py-3 font-medium
text-black dark:text-white
bg-white/80 dark:bg-black/40
backdrop-blur-md
border border-transparent
[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(90deg,#6366f1,#a855f7)_border-box]
dark:[background:linear-gradient(#000,#000)_padding-box,linear-gradient(90deg,#6366f1,#a855f7)_border-box]
shadow-[0_0_15px_rgba(99,102,241,0.35)]
hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
transition-all duration-300"
            >
              Get a Free Quote
            </Button>
            {/* <Button
              size="md"
              variant="flat"
              className="rounded-full px-6 py-3
    border border-white/20
    bg-white/5 backdrop-blur-md
    text-white font-medium
    hover:bg-white/10
    hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
    transition-all duration-300"
            >
              View Our Work
            </Button> */}
          </div>
        </div>
      </div>
      <StatsSection />
    </section>
  );
}
