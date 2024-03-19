import download from '../images/img/download.svg'
import basket from '../images/img/basket-loaded.svg'
import awards from '../images/img/award.svg'
import money from '../images/img/money.svg'
import pin from '../images/img/pin.svg'
import rocket from '../images/img/rocket-2.svg'

const Howitworks = () => {
    return(
        <>
            <section id="users-third" className="cambio scroll-reveal">
                <img src={rocket} alt="Rocket" className="rocket-2"></img>
                <div className="container">
                    <div className="boxes">
                    <div className="sec-heading text-center mb-5">
                        <h5>Muy fácil, mucho valor</h5>
                        <h2>Cómo funciona</h2>
                    </div>

                    <div className="row mt-5">

                        <div className="col-md-4 col-lg-2 offset-lg-1 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box">
                            <div className="icon">
                            <img src={download} alt="Download"></img>
                            </div>
                            <h4 className="title">Descarga la app y crea tu cuenta</h4>
                        </div>
                        </div>

                        <div className="col-md-4 col-lg-2 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box">
                            <div className="icon">
                            <img src={basket} alt="Basket"></img>
                            </div>
                            <h4 className="title">Compra y realiza acciones de tus marcas favoritas</h4>
                        </div>
                        </div>

                        <div className="col-md-4 col-lg-2 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box">
                            <div className="icon">
                            <img src={awards} alt="Trophy"></img>
                            </div>
                            <h4 className="title">Alcanza los objetivos de consumo</h4>
                        </div>
                        </div>

                        <div className="col-md-4 col-lg-2 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box">
                            <div className="icon">
                            <img src={money} alt="Coins"></img>
                            </div>
                            <h4 className="title">Obtén tus Euros de fidelidad y otras recompensas</h4>
                        </div>
                        </div>

                        <div className="col-md-4 col-lg-2 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box">
                            <div className="icon">
                            <img src={pin} alt="Pin"></img>
                            </div>
                            <h4 className="title">Canjea donde y como quieras</h4>
                        </div>
                        </div>

                    </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Howitworks