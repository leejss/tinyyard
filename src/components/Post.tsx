import { CodeBlock } from "@/components/CodeBlock";
import type { Article } from "@/lib/model/Article";
import { foramtDate, parseMarkdown } from "@/lib/utils";
import "./Post.scss";

interface PostProps {
  post: Article;
}
const Post = async ({ post }: PostProps) => {
  const html = await parseMarkdown(post.content);

  return (
    <article className="post pb-12 w-full">
      <header className="py-4">
        <h1 className="text-xl md:text-3xl font-bold text-foreground">{post.title}</h1>
        <time>{foramtDate(post.date)}</time>
      </header>
      <CodeBlock>
        <div
          className="prose text-foreground font-mono"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </CodeBlock>
    </article>
  );
};

export default Post;
