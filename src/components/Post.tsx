import getFormattedDate from "@/lib/getFormattedDate";
import BlogPost from "@/types/blogPost";
import Link from "next/link";

export default function Post({ post }: { post: BlogPost }) {
  return (
    <article>
      <p className="font-light">{getFormattedDate(post.publish_date)}</p>
      <Link
        href={`posts/${post.id}`}
        className="hover:text-slate-500 transition-colors duration-300"
      >
        <h3 className="text-3xl font-light">{post.title}</h3>
      </Link>
    </article>
  );
}
