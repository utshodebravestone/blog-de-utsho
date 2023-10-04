import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import BlogPost from "@/types/blogPost";

const postsDir = path.join(process.cwd(), "blog-posts");

export default async function getPost(
  id: string
): Promise<BlogPost & { content: string }> {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContent);
  const remarkedResult = await remark().use(html).process(matterResult.content);
  const content = remarkedResult.toString();

  return {
    id,
    title: matterResult.data.title,
    publish_date: matterResult.data.publish_date,
    content,
  };
}
