import { postRepository } from "@/repository/posts";

const PostsList = async () => {
  const posts = await postRepository.findAll();
  return (
    <div>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};

export default PostsList;
