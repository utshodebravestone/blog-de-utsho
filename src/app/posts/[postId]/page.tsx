import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import getPosts from "@/lib/getPosts";
import getPost from "@/lib/getPost";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  params: { postId: string };
};

export function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params: { postId } }: Props): Metadata {
  const posts = getPosts();

  const post = posts.find((post) => post.id === postId);

  if (!post)
    return {
      title: "post not found",
    };

  return {
    title: post.title,
  };
}

export default async function PostPage({ params: { postId } }: Props) {
  const posts = getPosts();

  if (!posts.find((post) => post.id === postId)) notFound();

  const post = await getPost(postId);

  return (
    <main className="mb-5">
      <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
      <p className="text-xl mb-5">{getFormattedDate(post.publish_date)}</p>
      <div className="w-full h-1 mb-5 border-b border-slate-700"></div>
      <article className="prose prose-xl prose-invert mb-5">
        <section dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
      <Link
        href={"/"}
        className="text-xl hover:text-slate-500 transition-colors duration-300"
      >
        &#8617; go back to home
      </Link>
    </main>
  );
}
