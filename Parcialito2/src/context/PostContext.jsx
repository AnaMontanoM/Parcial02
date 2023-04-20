//import {createContext, useEffect, useState} from 'react';
import { createContext, useState, useEffect } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
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

	return (
		<PostsContext.Provider value={{ posts, loading, error }}>
			{children}
		</PostsContext.Provider>
	);
};
