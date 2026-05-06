"use client";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const posts: Post[] = [];

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
        <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
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
                <p className="text-xs text-zinc-400">{post.date}</p>
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
