import { useContext, useState } from "react";
import "./App.css";
import CardPost from "./componentes/CardPost";
import { PostContext } from "./context/PostContext";

function App() {
	const { post } = useContext(PostContext);
	const { postVacio, listPost } = usePost();

	// const listaPost= (event) => (
	// event.prevent.default()
	// listPost(Post)
	// )

	//[count, setCount] = useState(0);

	return (
		<>
			<div className="App">
				<h1>Listado</h1>
			</div>
			;
		</>
	);
}

export default App;

// Nota para mí: Apenas cargue se carga la función (carpeta que los lista)
