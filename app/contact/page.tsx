"use client";
import { useForm } from "@formspree/react";
import { Button } from "@heroui/react";

export default function ContactPage() {
  const [state, handleSubmit, reset] = useForm("mwvvpzng");

  return (
    <main className="w-full flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      {state.succeeded ? (
        <div className="h-96 flex flex-col gap-6 items-center justify-center uppercase font-semibold text-2xl">
          <p>Thank you for reaching out to us!</p>
          <Button
            className="relative rounded-full px-4 py-2 font-medium
text-black dark:text-white
bg-white/80 dark:bg-black/40
backdrop-blur-md
border border-transparent
[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(90deg,#6366f1,#a855f7)_border-box]
dark:[background:linear-gradient(#000,#000)_padding-box,linear-gradient(90deg,#6366f1,#a855f7)_border-box]
shadow-[0_0_15px_rgba(99,102,241,0.35)]
hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
transition-all duration-300"
            onPress={() => reset()}
          >
            Send another message
          </Button>
        </div>
      ) : (
        <>
          <p className="text-lg mb-4">We would love to hear from you!</p>
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline rounded-lg"
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={5}
                placeholder="Your Message"
                required
                name="message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="relative rounded-full px-4 py-2 font-medium
text-black dark:text-white
bg-white/80 dark:bg-black/40
backdrop-blur-md
border border-transparent
[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(90deg,#6366f1,#a855f7)_border-box]
dark:[background:linear-gradient(#000,#000)_padding-box,linear-gradient(90deg,#6366f1,#a855f7)_border-box]
shadow-[0_0_15px_rgba(99,102,241,0.35)]
hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
transition-all duration-300"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </>
      )}
    </main>
  );
}
