import "../styles/Section.scss"

const Section = (props) =>{
  return (
		<section>
			<h1 className="titulo">{props.titulo}</h1>
			<h3>{props.subtitulo}</h3>
			<img className={props.tamaño} src={props.imagen} />
			
		</section>
  );
}
export default Section;