import SinglePost from "@/components/SinglePost";
import { getPosts } from "@/utils/get-posts";

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="text-8xl text-white">BLOG</h1>
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <SinglePost
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            tags={post.tags}
            slug={post.slug}
          />
        ))}
      </div>
    </>
  );
}
