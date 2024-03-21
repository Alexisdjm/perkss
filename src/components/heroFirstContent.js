import images from "../images/exporting"
const FirstContent = ({main, stylee}) => {
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
                </div></>
            }
        </>
    )
}

export default FirstContent