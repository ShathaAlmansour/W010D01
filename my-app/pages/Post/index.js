import Link from "next/link";

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}

function Post({ posts }) {
  console.log(posts);
  return (
   <div>
      {posts.map((post) => (
        <Link href={`Post/${post.id}`} key={post.id}>
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        </Link>
        
      ))}
  </div>
  );
}

export default Post;
