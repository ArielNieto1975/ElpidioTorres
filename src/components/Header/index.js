// import { useState } from "react";
// import "./Header.css";
// import NavButton from "./NavButton";

// function Header({ accesos, setActivo, activo }) {
//   return (
//     <header className="App-header">
//       <img src="/img/logoElpidio.png" className="App-logo"  alt="Logo"/>
//       <ul className="nav">
//         {accesos.map((acceso) => (
//             <NavButton
//               key={acceso.id}
//               texto={acceso.nombre}
//               activo={activo === acceso.id}
//               onClick={() => setActivo(acceso.id)}
//               />
//         ))}
//       </ul>
//     </header>
//   );
// }


// export default Header;

import React, { useState } from "react";
import NavButton from "./NavButton";
import "./Header.css"; // Importa el CSS

function Header({ accesos, setActivo, activo }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto((prev) => !prev);

  return (
    <header className="header">
      <img src="/img/logoElpidio.png" className="App-logo"  alt="Logo"/>
      <button
        className={`hamburguesa ${menuAbierto ? "abierto" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`menu ${menuAbierto ? "visible" : ""}`}>
        {accesos.map((acceso) => (
          <NavButton
            key={acceso.id}
            texto={acceso.nombre}
            activo={activo === acceso.id}
            onClick={() => {
              setActivo(acceso.id);
              setMenuAbierto(false); // Cierra el menú al hacer click
            }}
          />
        ))}
      </nav>
    </header>
  );
}

export default Header;






// function Header(props) {
//     const cambiarMostrar = props.cambiarMostrar
//     return <header className="App-header">
//     <img src="/img/logoElpidio.png" className="App-logo"  alt="Logo"/>
//     <NavButon cambiarMostrar={cambiarMostrar}/>
    
//   </header>
// }

// export default Header