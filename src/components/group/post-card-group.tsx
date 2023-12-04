import { PostCard } from "../card/post-card";

export function PostCardGroup({ posts }: { posts: PostType[] }) {

  const cardItems = posts.map((post) => (
    <div key={post.id}>
      <PostCard {...post} />
    </div>
  ));

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cardItems}
    </div>
  );
}
