import images from "../images/exporting";

const Semifooter = ({appButtons}) => {

    return(
        <>
            <section id="semifooter" className="pre-footer scroll-reveal pre-footer-banner">
                <div className="pre-footer-column">
                    <h5> Estamos para ti, shopper del futuro</h5>
                    <h2>Conecta, apoya y gana en tus marcas favoritas. </h2>
                    <div className="download-center">
                    {
                    appButtons ? <>
                        <a href="https://apps.apple.com/es/app/perkss/id6448196063" className="app-store"><img src={images.app_store} alt="App Store"></img></a>
                        <a href="https://play.google.com/store/apps/details?id=io.perkss" className="g-play"><img src={images.google_play} alt="Google Play"></img></a>
                    
                    </> :
                        <img src={images.qrimg} alt="qr" loading="lazy" className="qr-code"></img>
                    }
                    <div style={{position: "absolute"}} className="download-btn--box">
                        <a href="https://app.perkss.io/" className="mobile-button--semifooter banner">Descarga Perkss</a>
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