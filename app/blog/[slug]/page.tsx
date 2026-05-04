import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Registry of all published posts.
// When Robbie writes a post, add it here and create app/blog/[slug]/content/[slug].mdx
const posts: Record<string, {
  title: string;
  description: string;
  date: string;
  content: () => Promise<{ default: React.ComponentType }>;
}> = {
  // "how-to-quote-a-roofing-job": {
  //   title: "How to Quote a Roofing Job: A Step-by-Step Guide",
  //   description: "A practical guide for UK roofing contractors on building accurate, professional quotes.",
  //   date: "2026-05-10",
  //   content: () => import("./content/how-to-quote-a-roofing-job.mdx"),
  // },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: `${post.title} | QuoteCore+`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const { default: Content } = await post.content();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <p className="text-sm text-zinc-400">{post.date}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>

      <div className="prose prose-zinc mt-10 max-w-none">
        <Content />
      </div>

      {/* Internal links */}
      <div className="mt-16 flex flex-col gap-3 rounded-[1.75rem] border border-[#FF6B35]/20 bg-[#FF6B35]/5 p-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-zinc-950">Ready to quote faster?</p>
        <div className="flex gap-3">
          <a
            href="/roofing-quoting-software"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            Learn more
          </a>
          <a
            href="/free-trial"
            className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e85d2b]"
          >
            Start free trial
          </a>
        </div>
      </div>
    </article>
  );
}
