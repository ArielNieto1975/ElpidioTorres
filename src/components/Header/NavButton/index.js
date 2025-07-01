
import "./NavButton.css";

function NavButton({ texto, onClick, activo }) {
  return ( 
        // <ul className="nav">
            <li 
                className="navButton"
                onClick={onClick}>
                {texto}
            </li>
        // </ul>
    
  );
}



// const secciones = [
//     "Home",
//     "Servicios",
//     "Autoridades",
//     "Contacto"
// ]
// function NavButon(props){
//     return <ul className="nav">
//         { secciones.map((seccion, index)=>{
//             return <li className="navButton" key={index} onClick={props.cambiarMostrar}>{seccion}</li>
//           })}
//     </ul>
// }

export default NavButton