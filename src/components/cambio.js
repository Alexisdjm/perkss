import rocket from '../images/img/rocket.svg'
import money from '../images/img/money.svg'
import graph from '../images/img/graph.svg'
import magic from '../images/img/magic.svg'

const Cambio = () => {
    return(
        <>
            <section className="cambio">
                <div className="container scroll-reveal">
                    <div className="boxes">
                    <div className="sec-heading text-center mb-5">
                        <h5>Un cambio de paradigma</h5>
                        <h2>Una plataforma diferente para resolver <br></br> los verdaderos problemas de los retailers</h2>
                    </div>

                    <div className="row mt-5">

                        <div className="col-md-4 col-lg-2 offset-lg-1 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box">
                            <div className="icon">
                                <img src={rocket} alt="Rocket"></img>
                            </div>
                            <h4 className="title">No requiere integraciones</h4>
                        </div>
                        </div>

                        <div className="col-md-4 col-lg-2 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box">
                            <div className="icon">
                                <img src={money} alt=""></img>
                            </div>
                            <h4 className="title">No pagarás hasta que veas resultados</h4>
                        </div>
                        </div>

                        <div className="col-md-4 col-lg-2 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box">
                            <div className="icon">
                                <img src={graph} alt=''></img>
                            </div>
                            <h4 className="title">En 5 minutos puedes comenzar a usarlo</h4>
                        </div>
                        </div>

                        <div className="col-md-4 col-lg-2 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box">
                            <div className="icon">
                                <img src={magic} alt=''></img>
                            </div>
                            <h4 className="title">No tiene coste de mantenimiento</h4>
                        </div>
                        </div>

                        <div className="col-md-4 col-lg-2 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box">
                            <div className="icon">
                                <img src={graph} alt=''></img>
                            </div>
                            <h4 className="title">No requiere conocimientos técnicos</h4>
                        </div>
                        </div>

                    </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Cambio