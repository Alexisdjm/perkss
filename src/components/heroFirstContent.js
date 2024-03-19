import images from "../images/exporting"
const FirstContent = ({main, stylee}) => {
    return(
        <>
            {main
            ? <><h1 className={stylee}>Conecta con tus clientes, fidelízalos por siempre.</h1>
                <p className="hb-content">La primera plataforma de fidelidad que sí funciona. Una herramienta de retención y adquisición de clientes diseñada para ti, marca del futuro. </p>

                <div className="button-set">
                    <a href="https://app.perkss.io/auth/signup" className="btn-get-started">Registro</a>
                    <a href="https://calendly.com/eduardosg" className="btn-get-started">Agendar llamada</a>
                </div></>
            : <><h1 className={stylee}>Tus compras, tu dinero, tus datos.</h1>
                <div className="download-center">
                {/* <a href="https://apps.apple.com/es/app/perkss/id6448196063" className="app-store"><img src={images.app_store} alt="App Store"></img></a>
                <a href="https://play.google.com/store/apps/details?id=io.perkss" className="g-play"><img src={images.google_play} alt="Google Play"></img></a> */}
                <img src={images.qrimg} alt="qr" loading="lazy" className="qr-code"></img>
                </div></>
            }
        </>
    )
}

export default FirstContent