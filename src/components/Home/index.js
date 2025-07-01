import "./Home.css";
import { useEffect } from "react";
function Home(){
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);
    return <div>
    <img src="/img/ElpidioTorres1.jpg" className="portada"  alt="Portada"/>
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
    </div>
}
export default Home