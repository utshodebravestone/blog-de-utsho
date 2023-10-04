import getPosts from "@/lib/getPosts";
import Post from "@/components/Post";

export default function PostList() {
  const posts = getPosts();

  return (
    <section className="w-full">
      <h2 className="text-4xl pb-3 mb-5 border-b border-slate-700">
        My Blog Posts
      </h2>
      <ul className="flex flex-col gap-5">
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
