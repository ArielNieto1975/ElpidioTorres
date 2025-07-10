import "./Home.css";
import { useEffect } from "react";
function Home(){
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);
    return <div>
    <section className="menuPortada">
        <img src="/img/ElpidioTorres1.jpg" className="portada"  alt="Portada"/> 
        <div><h1>Hospital Elpidio Torres</h1></div>
    </section>
    <section className="mvv">
        <div className="mvvBox">
            <h2>Misión</h2>
            <p>Somos un Hopital enfocado en la promoción, prevención, asistencia y rehabilitación de la salud de nuestra comunidad, comprometidos con la mejora del servicio ofrecido</p>
        </div>
        <div className="mvvBox">
            <h2>Visión</h2>
            <p>Ser un Hospital de referencia basado en la atención de nuestros pacientes, al compromiso permanente de todos los profesionales y al servicio articulado en red con las demás instituciones sanitarias</p>
        </div>
        <div className="mvvBox">
            <h2>Valores</h2>
            <ul>
                <li>Trabajo en Equipo</li>
                <li>Mejora Continua</li>
                <li>Compromiso</li>
                <li>Calidad</li>
                <li>Empatía</li>
                <li>Respeto</li>
                <li>Responsabilidad</li>
            </ul>
        </div>
        
    </section>
    <section className="maps">
        <div className="mapsDire">
            <h2>Av. Juan B. Justo N°7100</h2>
            <h2>Córdoba</h2>
        </div>
        <iframe title="ubicación en Google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.8494428424715!2d-64.1746938!3d-31.335530799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432990fa9749523%3A0x1895e71c8a50b394!2sHospital%20del%20Noreste%20Elpidio%20Torres!5e0!3m2!1ses!2sar!4v1752173984039!5m2!1ses!2sar" 
        style={{
            width: "660",
            height: "495",
            border: "0"
        }}
         allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    </div>
}
export default Home