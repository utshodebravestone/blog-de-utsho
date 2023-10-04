import fs from "fs";
import path from "path";

import matter from "gray-matter";

import BlogPost from "@/types/blogPost";

const postsDir = path.join(process.cwd(), "blog-posts");

export default function getPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDir);
  const posts: BlogPost[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDir, fileName);
    const content = fs.readFileSync(fullPath, "utf-8");

    const post = matter(content);

    return {
      id,
      title: post.data.title,
      publish_date: post.data.publish_date,
      content: "",
    };
  });

  return posts.sort((a, b) => (a.publish_date < b.publish_date ? 1 : -1));
}
