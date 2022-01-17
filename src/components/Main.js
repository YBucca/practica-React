import Section from "./Section"
import Button from "./Button"
const Main = () =>{
  return (
		<main>
			<Section
				titulo="Vacaciones"
				subtitulo="¿Mar o Montaña?"
				imagen="https://s1.1zoom.me/b5050/780/French_Polynesia_Scenery_453207_3840x2400.jpg"
				tamaño="grande"
			/>
			<Button mensaje="Primera" color="rojo" />
			<hr />
			<Section
				titulo="Comida"
				subtitulo="¿Cual es tu comida preferida?"
				imagen="https://i.blogs.es/87930e/comidas-ricas/650_1200.jpg"
				tamaño="mediana"
			/>
			<Button mensaje="Segunda" color="verde" />
		</main>
  );
}

export default Main;