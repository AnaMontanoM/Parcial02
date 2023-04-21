//IGNORAR
import React from "react";
import "./App.css";

const CardPost = ({ data }) => {
	return (
		<div>
			<h2> {data?.title.toUpperCase()} </h2>
			<span>Cualquier cosa</span>
		</div>
	);
};
