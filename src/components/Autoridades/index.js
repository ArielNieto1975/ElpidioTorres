import "./Autoridades.css";
import Card from "./Cards";
import { useEffect } from "react";
function Autoridades(){
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);
    return <>
        <img src="/autoridades.webp" className="autoridades"  alt="Autoridades"/>
        <section className="autor">
            <Card/>               
        </section>
    </>
}
export default Autoridades