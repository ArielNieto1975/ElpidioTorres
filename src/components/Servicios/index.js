import "./Servicios.css";
import { useEffect } from "react";
import { useState } from "react";
// function Servicios(){
//     useEffect(()=>{
//         window.scrollTo(0, 0);
//     }, []);
//     return <section className="services">
//         <ul className="serv-nav">
//             <li className="serv-nav-boton">SERVICIO 1</li>
//             <li className="serv-nav-boton">SERVICIO 2</li>
//             <li className="serv-nav-boton">SERVICIO 3</li>
//         </ul>
        
//     </section>
// }
// export default Servicios


const servicios = [
  { id: 1, nombre: "Emergencias", jefe: "Persona 1", descripcion: "Descripción del servicio 1" },
  { id: 2, nombre: "Cirugía", descripcion: "Descripción del servicio 2" },
  { id: 3, nombre: "UTI", descripcion: "Descripción del servicio 3" },
  {
    id: 4,
    nombre: "Clínica Médica",
    descripcion: "Descripción del servicio 4",
  },
  {
    id: 5,
    nombre: "Tocoginecología",
    descripcion: "Descripción del servicio 5",
  },
  {
    id: 6,
    nombre: "Diag. por Imágenes",
    descripcion: "Descripción del servicio 6",
  },
  {
    id: 7,
    nombre: "Med. Transfucional",
    descripcion: "Descripción del servicio 7",
  },
  { id: 8, nombre: "Laboratorio", descripcion: "Descripción del servicio 8" },
  { id: 9, nombre: "Enfermería", descripcion: "Descripción del servicio 9" },
  { id: 10, nombre: "Farmacia", descripcion: "Descripción del servicio 10" },
];

function Servicios() {
    useEffect(()=>{
    window.scrollTo(0, 0);
    }, []);

  const [servicioActivo, setServicioActivo] = useState(servicios[0].id);

  const handleClick = (id) => {
    setServicioActivo(id);
  };

  const servicioSeleccionado = servicios.find(
    (servicio) => servicio.id === servicioActivo
  );

  return (
    <div className="services">
      <div className="serv-nav"
    //    style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
       >
        {servicios.map((servicio) => (
          <button className="serv-nav-boton"
            key={servicio.id}
            onClick={() => handleClick(servicio.id)}
            style={{
              backgroundColor:servicio.id === servicioActivo ? "#1c19f6" : "#1c19f6",
              color: servicio.id === servicioActivo ? "#fff" : "#f37805",
              // fontWeight: servicio.id === servicioActivo ? "bold" : "normal",
              // border: "none",
              borderRadius: "4px",
              // padding: "10px 16px",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            {servicio.nombre}
          </button>
        ))}
      <div className="servicioContenido">
        <h2 className="servicioNombre">Servicio de {servicioSeleccionado.nombre}</h2>
        <h3 className="servicioDetalle">Jefe de Servicio: {servicioSeleccionado.jefe}</h3>
        <p className="servicioDetalle">{servicioSeleccionado.descripcion}</p>
      </div>
      </div>
    </div>
  );
}

export default Servicios;