import images from "../images/exporting";
import { useEffect, useState } from "react";

const Semifooter = ({appButtons}) => {

    const [botonPosition, setBotonPosition] = useState('fixed');

    useEffect(() => {
      function handleScroll() {
        // Obtener la posición actual de la sección y el tamaño de la ventana
        const section = document.getElementById('semifooter');
        const windowHeight = window.innerHeight;
  
        // Calcular el límite inferior de la sección
        const sectionBottom = section.offsetTop + section.clientHeight;
  
        // Verificar si la sección es visible en la ventana
        if (window.scrollY + windowHeight > section.offsetTop && window.scrollY < sectionBottom) {
          // La sección es visible
          setBotonPosition('absolute');
        } else {
          // La sección ya no es visible
          setBotonPosition('fixed');
        }
      }
  
      // Agregar el evento de scroll al cargar el componente
      window.addEventListener('scroll', handleScroll);
      return () => {
        // Remover el evento de scroll al desmontar el componente
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Este efecto solo se ejecuta una vez al montar el componente
  

    return(
        <>
            <section id="semifooter" className="pre-footer scroll-reveal pre-footer-banner">
                <div className="pre-footer-column">
                    <h5>Redefine las reglas</h5>
                    <h2>¿Estás listo para transformar<br></br> la fidelización de tus clientes?</h2>
                    <div className="download-center">
                    {
                    appButtons ? <>
                        <a href="https://apps.apple.com/es/app/perkss/id6448196063" className="app-store"><img src={images.app_store} alt="App Store"></img></a>
                        <a href="https://play.google.com/store/apps/details?id=io.perkss" className="g-play"><img src={images.google_play} alt="Google Play"></img></a>
                    
                    </> :
                        <img src={images.qrimg} alt="qr" loading="lazy" className="qr-code"></img>
                    }
                    <div style={window.location.pathname === '/' ? {position: botonPosition} : {position: "absolute"}} className="download-btn--box">
                        <a href="https://app.perkss.io/" className="mobile-button--semifooter banner">Descarga Perks</a>
                    </div>
                    <img src={images.semifooterVector1} className="arrow-semifooter--1" alt="arrow 1"></img>
                    <img src={images.semifooterVector2} className="arrow-semifooter--2" alt="arrow 2"></img>
                    </div>
                </div>
                <img src={images.semifooter1} alt="man" loading="lazy" className="man-bg--footer"></img>
                <img src={images.semifooter2} alt="woman" loading="lazy" className="woman-bg--footer"></img>
            </section>
        </>
    )
}

export default Semifooter