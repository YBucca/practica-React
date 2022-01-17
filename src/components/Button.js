import "../styles/Button.scss"

// const Button = (props) =>{
//   //afuera del retorno van los console.log
//   console.log(props);
//   return(
//     <button className={`boton ${props.color}`}>{props.mensaje}</button>
//   )
// }

// export default Button;

// +*******************

const Button = (props)=>{
  return <button className={`boton ${props.color}`}>{props.mensaje}</button>;
}
export default Button;