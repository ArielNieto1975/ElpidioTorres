// import { useState } from "react";
import "./Header.css";
import NavButton from "./NavButton";

function Header({ accesos, setActivo, activo }) {
  return (
    <header className="App-header">
      <img src="/img/logoElpidio.png" className="App-logo"  alt="Logo"/>
      <ul className="nav">
        {accesos.map((acceso) => (
            <NavButton
              key={acceso.id}
              texto={acceso.nombre}
              activo={activo === acceso.id}
              onClick={() => setActivo(acceso.id)}
              />
        ))}
      </ul>
    </header>
  );
}





// function Header(props) {
//     const cambiarMostrar = props.cambiarMostrar
//     return <header className="App-header">
//     <img src="/img/logoElpidio.png" className="App-logo"  alt="Logo"/>
//     <NavButon cambiarMostrar={cambiarMostrar}/>
    
//   </header>
// }

export default Header