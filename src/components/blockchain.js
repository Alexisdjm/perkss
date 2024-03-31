import blockchain from '../images/img/perkss-blockchain.svg'

const Blockchain = () => {
    return(
        <>
            <section id="como" className="como blockchain">
                <div className="container">

                    <div className="row align-items-center scroll-reveal">
                        <div className="col-lg-6 pull-left order-lg-1">
                            <div className="sec-heading">
                                <h5>La mejor infraestructura</h5>
                                <h2>Impulsados por Blockchain e IA</h2>
                            </div>

                            <p>En Perkss, fusionamos Blockchain y la IA para superar los retos de fidelización y adquisición de clientes actuales.</p>
                            <p>La Blockchain nos permite ofrecer programas de fidelidad transparentes e interoperables, mientras que gracias a la IA personalizamos la experiencia de cada cliente y optimizamos las campañas de marketing.</p>
                            <p>
                                Lo mejor, ni tú ni tus clientes sabrán que estarán interactuando con estas tecnologías. Garantizamos una experiencia de consumidor del más alto nivel.
                            </p>
                        </div>
                        <div className="col-lg-6 text-end pull-right order-lg-2">
                            <img src={blockchain} className="img-fluid" alt="Perkss blockchain process" loading="lazy"></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blockchain