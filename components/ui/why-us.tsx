import { Marquee } from "@/components/ui/shadcn-io/marquee";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const reasons = [
  "Modern, clean and professional",
  "Conversion-focused",
  "SEO-friendly",
  "Fast loading",
  "Mobile-Responsive",
  "No hidden costs",
];

export default function WhyUs() {
  return (
    <section className="relative w-full pb-28 flex flex-col items-center overflow-hidden max-w-7xl mx-auto">
      {/* Background glow */}

      <div className="relative z-10 w-full grid grid-cols-1 md:flex md:flex-col gap-4 items-center">
        {/* Left side */}
        <div className="p-4 flex flex-col justify-start items-start gap-2 w-full md:items-center">
          <div className="md:text-center border border-neutral-300 dark:border-neutral-700 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-600 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50 transition-colors">
            Why Us?
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight md:text-center">
            We don’t just build websites.
            <br />
            <span className="opacity-80">We build results.</span>
          </h2>

          <p className="mt-6 text-lg opacity-80 max-w-xl md:text-center">
            Every website is designed with your business goals in mind,
            combining strategy, design and performance to help you grow online.
          </p>
        </div>

        {/* Right side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:flex md:flex-col">
          <Marquee>
            {reasons.map((reason, index) => (
              <div
                key={index}
                className=" flex items-center space-x-3 whitespace-nowrap"
              >
                <span className="bg-gray-200/30 dark:bg-white/10 backdrop-blur-xl border border-black/20 dark:border-white/20 rounded-2xl shadow-sm dark:shadow-sm px-4 py-1 text-lg m-0 tracking-wide uppercase">
                  {reason}
                </span>
              </div>
            ))}
          </Marquee>
          <Marquee reverse>
            {reasons.map((reason, index) => (
              <div
                key={index}
                className=" flex items-center space-x-3 whitespace-nowrap"
              >
                <span className="bg-gray-200/30 dark:bg-white/10 backdrop-blur-xl border border-black/20 dark:border-white/20 rounded-2xl shadow-sm dark:shadow-sm px-4 py-1 text-lg m-0 tracking-wide uppercase">
                  {reason}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <Button
        as={Link}
        href="/contact"
        className="relative rounded-full px-4 py-1 font-medium
text-black dark:text-white
bg-white/80 dark:bg-black/40
backdrop-blur-md
border border-transparent
[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(90deg,#6366f1,#a855f7)_border-box]
dark:[background:linear-gradient(#000,#000)_padding-box,linear-gradient(90deg,#6366f1,#a855f7)_border-box]
shadow-[0_0_15px_rgba(99,102,241,0.35)]
hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
transition-all duration-300 mt-10"
      >
        Give us a Call
      </Button>
    </section>
  );
}
