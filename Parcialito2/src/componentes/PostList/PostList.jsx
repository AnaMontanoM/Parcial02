import { useContext } from "react";
import { PostsContext } from "./PostsContext";

function PostList() {
	const { posts, loading, error } = useContext(PostsContext);

	if (loading) {
		return <p>Esperando ando</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<div>
			<h1>Posts</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default PostList;
