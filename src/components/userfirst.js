import images from "../images/exporting"
import svg from '../images/img/perkss-special.svg'

const Userfirst = () => {
    return(
        <>
            <section id="user-first" className="como scroll-reveal">
                <div className="container">
                    <img src={svg} alt='svg' className='perkss-special'></img>
                    

                    <div className="row align-items-center">
                        <div className="col-lg-6 pull-right order-lg-2">
                            <div className="sec-heading">
                            <h5>Recompensas de verdad</h5>
                            <h2>Perkss mola, como tú</h2>
                        </div>
                        <p>
                            Perkss es la primera app de fidelidad diseñada para tí, shopper del futuro. Desde un solo lugar, podrás participar en los programas de fidelidad de tus marcas
                            favoritas<br></br><br></br>
                            Además, te garantizamos sencillez, transparencia y mucho valor. Ganarás EUROs, no puntos o cupones obsoletos<br></br><br></br>
                            Lo mejor, nunca más tendrás que darte de alta tienda por tienda o recibir emails promocionales.
                        </p>
                        </div>
                        <div className="col-lg-6 text-end pull-left order-lg-1">
                            <img src={images.iphone} className="img-fluid" alt="Perkss app" loading="lazy"></img>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Userfirst