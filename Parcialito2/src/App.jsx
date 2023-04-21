import React, { useState, useEffect } from "react";
import Loading from "./componentes/Loading/Loading";
import { useFetch } from "./hooks/useFetch";
import PostReducers from "./useReducers/postsReducers";

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);

		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((posts) => {
				setPosts(posts);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <p>Esperando ando...</p>;
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

export default App;

// Nota para mí: Apenas cargue se carga la función (carpeta que los lista)
