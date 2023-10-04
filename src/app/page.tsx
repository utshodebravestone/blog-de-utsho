import Hero from "@/components/Hero";
import PostList from "@/components/PostList";

export default function Home() {
  return (
    <section>
      <Hero />
      <div className="h-10"></div>
      <PostList />
    </section>
  );
}
