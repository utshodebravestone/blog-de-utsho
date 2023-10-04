import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import getPosts from "@/lib/getPosts";
import getPost from "@/lib/getPost";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";

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

      <article className="prose prose-xl prose-invert">
        <section dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <div className="w-full h-1 mb-7 border-b border-slate-700"></div>

      <div className="flex items-center gap-3 mb-5">
        <h1 className="text-2xl font-bold">post view count:</h1>
        <Image
          src="https://counter6.optistats.ovh/private/freecounterstat.php?c=wz83lnungptb7nbg744x2gyrpp3cz9q4"
          /*
          another link to counter:
          https://counter6.optistats.ovh/private/freecounterstat.php?c=b7y89mgqt67pkjdyu3elqhz947r5r3bm
          */
          height={88}
          width={88}
          alt="view count"
        />
      </div>

      <Link
        href={"/"}
        className="text-xl hover:text-slate-500 transition-colors duration-300"
      >
        &#8617; go back to home
      </Link>
    </main>
  );
}
