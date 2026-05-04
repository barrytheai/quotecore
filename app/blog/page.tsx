import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | QuoteCore+",
  description: "Roofing business tips, quoting advice, and industry insights for UK roofing contractors.",
};

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
}

// Add posts here as they're published
const posts: Post[] = [
  // Example shape:
  // {
  //   slug: "how-to-quote-a-roofing-job",
  //   title: "How to Quote a Roofing Job: A Step-by-Step Guide",
  //   description: "A practical guide for UK roofing contractors on building accurate, professional quotes.",
  //   date: "2026-05-10",
  // },
];

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-4 text-lg text-zinc-500">
        Roofing business tips, quoting advice, and industry insights for UK contractors.
      </p>

      <div className="mt-14 space-y-6">
        {posts.length === 0 ? (
          <p className="text-zinc-400">First post coming soon.</p>
        ) : (
          posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-[1.75rem] border border-zinc-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs text-zinc-400">{post.date}</p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-950">{post.title}</h2>
              <p className="mt-2 text-sm text-zinc-500">{post.description}</p>
            </a>
          ))
        )}
      </div>
    </section>
  );
}
