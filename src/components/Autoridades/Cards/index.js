import "./cards.css";
// const autoridades = [
//     "Manuel Picasso",
//     "Serio Perez LLanos",
//     "Ariel Nieto"
// ]

const autoridades = [
  { nombre: "Manuel Picasso", cargo: "Director", foto:"/img/picasso.png" },
  { nombre: "Serio Perez LLanos", cargo: "Sub-Director", foto:"/img/imagen3.png" },
  { nombre: "Ariel Nieto", cargo:"Secretario Técnico",  foto:"/img/nieto.jpg" },
];

function Card () {
    return <div className="cards">
            { autoridades.map( (autoridad, index)=> {
            return <div className="card">
              <img src={autoridad.foto} className="foto"  alt="foto"/>
              <p className="desc" key={index}>{autoridad.nombre}</p>
              <p className="desc" key={index}>{autoridad.cargo}</p>
            </div>
          })}
        </div>
}

export default Card