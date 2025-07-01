import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Autoridades from './components/Autoridades';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

const accesos = [
  { nombre: "Home", id: "home" },
  { nombre: "Autoridades", id: "autoridades" },
  { nombre: "Servicios", id: "servicios" },
  { nombre: "Contacto", id: "contacto" },
];
function App() {
useEffect(()=> {
  window.scrollTo(0, 0);
}, []);

  const [activo, setActivo] = useState("home");

  let contenido = null;
  if (activo === "home") contenido = <Home />;
  if (activo === "autoridades") contenido = <Autoridades />;
  if (activo === "servicios") contenido = <Servicios />;
  if (activo === "contacto") contenido = <Contacto />;

  return (
    <div className="App">
      <Header accesos={accesos} setActivo={setActivo} activo={activo} />
      <div className="cont">{contenido}</div>
      <Footer />
    </div>
  );
}



// function App() {
//   const [mostrarPage, actualizaMostrarPage] = useState (true)
//   const cambiarMostrar = ()=> {
//     actualizaMostrarPage (!mostrarPage)
//   }
//   return (
//     <div className="App">
//       <Header cambiarMostrar = {cambiarMostrar}/>
//       <Home />
//       {mostrarPage === true ? <Autoridades /> : <></>}
      
//     </div>
//   );
// }

export default App;
