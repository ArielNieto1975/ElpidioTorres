import {useState, useEffect} from "react";
import "./Contacto.css";

const Contacto = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);
  const [form, setForm] = useState({
    nombreApellido: "",
    telefono: "",
    email: "",
    consulta: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario (por ejemplo, enviar a una API o mostrar un mensaje)
    alert("Formulario enviado:\n" + JSON.stringify(form, null, 2));
    // Limpiar los campos del formulario
    setForm({
      nombreApellido: "",
      telefono: "",
      email: "",
      consulta: "",
    });
  };

  return (
    <section className="contact">
    <form onSubmit={handleSubmit}className="form">
      <div className="conten">
        <label>Nombre y Apellido:</label>
        <input
          type="text"
          name="nombreApellido"
          value={form.nombreApellido}
          onChange={handleChange}
          required
        />
      </div>
      <div className="conten">
        <label>Teléfono de Contacto:</label>
        <input
          type="tel"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          required
        />
      </div>
      <div className="conten">
        <label>E-mail:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="box">
        <label>Consulta:</label>
        <textarea
          name="consulta"
          value={form.consulta}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="sendButton">Enviar</button>
    </form>
    </section>
  );
};

export default Contacto;





// function Contacto(){
//     return <section className="contact">
        
        
//     </section>
// }
// export default Contacto