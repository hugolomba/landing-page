export default function CTA() {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-28 flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source
          src="https://www.pexels.com/download/video/7649281/"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-3xl px-4 text-center flex flex-col items-center">
        <div className="p-4 flex flex-col justify-start gap-2 w-full items-center">
          <div className="md:text-center border border-neutral-700 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-400 bg-neutral-800/50 transition-colors">
            Let&apos;s Work Together
          </div>

          <h2 className="text-gray-200 text-3xl md:text-4xl font-bold tracking-tight md:text-center">
            Ready to elevate your online presence?
            <br />
            <span className="opacity-80">
              We can create something amazing together.
            </span>
          </h2>

          <p className="text-gray-200 mt-6 text-lg opacity-80 max-w-xl md:text-center">
            Contact us today to discuss your web design needs and take the first
            step towards a stunning, high-performance website.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
