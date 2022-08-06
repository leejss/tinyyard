import type { PostOrPage, PostsOrPages } from "@tryghost/content-api";
import { isEmpty } from "@utils/array-helper";
import { foramtDate } from "@utils/format-helpter";
import Link from "next/link";

interface PostListProps {
  posts: PostsOrPages;
}

export default function PostList({ posts }: PostListProps) {
  if (isEmpty(posts)) return null;

  return (
    <ul className="my-6">
      {posts.map((post) => (
        <PostListItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

interface PostListItemProps {
  post: PostOrPage;
}

function PostListItem({ post }: PostListItemProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <li className="flex justify-between text-2xl md:text-3xl leading-4 hover:text-green-400 cursor-pointer">
        <span>{post.title}</span>
        <time className="text-base">{foramtDate(post.created_at)}</time>
      </li>
    </Link>
  );
}
