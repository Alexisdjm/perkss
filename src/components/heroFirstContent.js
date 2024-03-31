import images from "../images/exporting"
import { useEffect, useState } from "react";
const FirstContent = ({main, stylee}) => {

    const [botonPosition, setBotonPosition] = useState('absolute');
    const [visible, setVisible] = useState('block');

    useEffect(() => {
        function handleScroll() {
          // Obtener la posición actual de la sección y el tamaño de la ventana
          const section = document.getElementById('secondary');
          const semifooter = document.getElementById('semifooter');
          const windowHeight = window.innerHeight;
    
          // Calcular el límite inferior de la sección
          const sectionBottom = section.offsetTop + section.clientHeight;
          const semifooterBottom = semifooter.offsetTop + semifooter.clientHeight;
    
          // Verificar si la sección es visible en la ventana
          if (window.scrollY + windowHeight > section.offsetTop && window.scrollY < sectionBottom) {
            // La sección es visible
            setBotonPosition('absolute');
          } else {
            // La sección ya no es visible
            setBotonPosition('fixed');
          }

          if (window.scrollY + windowHeight > semifooter.offsetTop && window.scrollY < semifooterBottom) {
            // La sección es visible
            setVisible('none');
          } else {
            // La sección ya no es visible
            setVisible('block');
          }
          
        }
    
        if (window.location.pathname === '/') {           
            // Agregar el evento de scroll al cargar el componente
            window.addEventListener('scroll', handleScroll);
            return () => {
              // Remover el evento de scroll al desmontar el componente
              window.removeEventListener('scroll', handleScroll);
            };
        }
      }, []); // Este efecto solo se ejecuta una vez al montar el componente
    
    return(
        <>
            {main
            ? <><h1 className={stylee}>Conecta con tus clientes, fidelízalos por siempre.</h1>
                <p className="hb-content">La primera plataforma de fidelidad que sí funciona. Una herramienta de retención y adquisición de clientes diseñada para ti, marca del futuro. </p>

                <div className="button-set">
                    <a href="https://app.perkss.io/auth/signup" className="btn-get-started desktop">Registro</a>
                    <a href="https://calendly.com/eduardosg" className="btn-get-started">Agendar llamada</a>
                    <a href="https://app.perkss.io/auth/signup" className="btn-get-started mobile">Registro</a>
                </div></>
            : <><h1 className={stylee}>Tus compras, tu dinero, tus datos.</h1>
                <div className="download-center">
                <img src={images.qrimg} alt="qr" loading="lazy" className="qr-code"></img>
                <div style={window.location.pathname === '/' ? {display: visible, position: botonPosition} : {position: "absolute"}} className="download-btn--box">
                    <a href="https://app.perkss.io/" className="mobile-button--semifooter banner">Descarga Perkss</a>
                </div>
                </div></>
            }
        </>
    )
}

export default FirstContent