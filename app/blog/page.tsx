"use client";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const posts: Post[] = [
  {
    slug: "construction-quote-speed-checklist",
    title: "The Construction Quote Speed Checklist [Free Printable]",
    description: "The first contractor to respond wins 78% of jobs. Use this free printable checklist to get quotes out the same day as a site visit.",
    date: "2026-06-01",
  },
  {
    slug: "roofing-quoting-software-vs-spreadsheets",
    title: "Roofing Quoting Software vs Spreadsheets: What Actually Saves Time",
    description: "Most roofing contractors still quote in spreadsheets. Here's an honest comparison of what spreadsheets do well, where they fall short, and what changes.",
    date: "2026-05-11",
  },
  {
    slug: "roofing-quoting-software-uk",
    title: "How UK Roofing Contractors Are Winning More Jobs With Digital Quotes",
    description: "Manual quoting is costing UK roofing contractors time and jobs. Here's how digital roofing quoting software is changing that.",
    date: "2026-05-06",
  },
  {
    slug: "built-by-a-roofer",
    title: "He Spent Over a Decade Quoting Roofs the Hard Way. Then He Built QuoteCore+.",
    description: "QuoteCore+ was built by Shaun - a roofer who spent over a decade wishing the software existed. Here's the story behind the product.",
    date: "2026-05-06",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/MainQCP.png" alt="QuoteCore+" className="h-10 w-auto" />
          </a>
          <a href="/" className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50">
            Back to homepage
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">Blog</h1>
        <p className="mt-4 text-lg text-zinc-500">
          Roofing business tips, quoting advice, and industry insights for contractors.
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
                <p className="text-xs text-zinc-400">{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <h2 className="mt-2 text-xl font-semibold text-zinc-950">{post.title}</h2>
                <p className="mt-2 text-sm text-zinc-500">{post.description}</p>
              </a>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
