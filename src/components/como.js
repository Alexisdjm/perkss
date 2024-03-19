import images from "../images/exporting"

const Como = () => {
    return(
        <>
            <section id="como" className="como">
                <div className="container">

                    <div className="row align-items-center scroll-reveal">
                    <div className="col-lg-6 text-end pull-right order-lg-2">
                        <img src={images.banner2} className="img-fluid" alt="Perkss app" loading="lazy"></img>
                    </div>
                    <div className="col-lg-6 pull-left order-lg-1">
                        <div className="sec-heading">
                        <h5>Como retailers, entendemos tus problemas</h5>
                        <h2>Es hora de repensar la forma en la que fidelizamos y adquirimos clientes</h2>
                        </div>
                        <p>
                        Retener clientes es cada vez más difícil, adquirir nuevos es sumamente costoso. <b>Llegó el momento de
                            invertir más en
                            nuestros clientes</b>, en su experiencia y en la relación con la marca, y menos en Google, Instagram,
                        Facebook, y en
                        programas de fidelidad tradicionales que no funcionan.
                        </p>
                        <a href="/"><button className="btn-learn-more">Descubre cómo</button></a>

                    </div>

                    </div>

                </div>
                </section>
        </>
    )
}

export default Como