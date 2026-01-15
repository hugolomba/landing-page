import Link from "next/link";

type InsightPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
};

const mockPosts: InsightPost[] = [
  {
    id: 1,
    title: "How I started my Next.js portfolio",
    excerpt:
      "A quick overview of the decisions I made while building my portfolio using Next.js and React.",
    date: "10 Jul 2025",
    slug: "/blog/nextjs-portfolio",
  },
  {
    id: 2,
    title: "Tips for transitioning into the tech industry",
    excerpt:
      "Practical lessons from someone studying and trying to break into the development market.",
    date: "22 Jun 2025",
    slug: "/blog/transitioning-to-tech",
  },
  {
    id: 3,
    title: "What I learned by revisiting JavaScript fundamentals",
    excerpt:
      "Going back to the basics made a big difference. Here are the key points I reinforced.",
    date: "05 Jun 2025",
    slug: "/blog/javascript-fundamentals",
  },
];

export default function Insites() {
  return (
    <section className="max-w-7xl mx-auto w-full py-25 ">
      <div className=" px-4 flex flex-col items-center gap-16">
        {/* <header className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Insights</h2>
          <p className="text-gray-500">
            Thoughts, learnings, and short essays about my journey in
            technology.
          </p>
        </header> */}

        <div className="p-4 flex flex-col justify-start items-start gap-2 w-full md:items-center">
          <div className="md:text-center border border-neutral-300 dark:border-neutral-700 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-600 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50 transition-colors">
            Insights
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight md:text-center">
            Thoughts, learnings, and short essays
            <br />
            <span className="opacity-80">about our journey in technology.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {mockPosts.map((post) => (
            <article
              key={post.id}
              className="border rounded-lg p-6 hover:shadow-md transition"
            >
              <span className="text-sm text-gray-400">{post.date}</span>
              <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={post.slug} className="text-sm font-medium underline">
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
