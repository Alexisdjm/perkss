
import heart from "../images/img/heart.svg"
import rocket from "../images/img/rocket.svg"
import graph from "../images/img/graph.svg"
import magic from "../images/img/magic.svg"
import user from "../images/img/user-men.svg"
import magnifier from "../images/img/magnifier.svg"
import chat from "../images/img/Chat.svg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Benefits = () => {

    return (
        <>
            <section className="beneficios">
                <div className="container">
                    <div className="icon-boxes scroll-reveal">

                        <div className="row">
                            <div className="col-lg-3">
                                <div className="sec-heading">
                                    <h5>beneficios</h5>
                                    <h2>Impulsa tus acciones</h2>
                                </div>
                            </div>

                            <div className="col-lg-9">
                                <div className="row desktop-benefits">

                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch ">
                                        <div className="icon-box new-icon-box--layout">
                                            <div className="icon">
                                                <img src={heart} alt="heart" />
                                            </div>
                                            <h4 className="title">Potencia tu relación y cuida a tus clientes</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                        <div className="icon-box new-icon-box--layout">
                                            <div className="icon">
                                                <img src={rocket} alt="rocket" />
                                            </div>
                                            <h4 className="title">Catapulta tus ratios de retención</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                        <div className="icon-box new-icon-box--layout">
                                            <div className="icon">
                                                <img src={graph} alt="graph" />
                                            </div>
                                            <h4 className="title">Incrementa tu ticket medio, LTV y ROAS.</h4>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                        <div className="icon-box new-icon-box--layout">
                                            <div className="icon">
                                                <img src={magic} alt="magic" />
                                            </div>
                                            <h4 className="title">Personaliza la experiencia de compra</h4>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                        <div className="icon-box new-icon-box--layout">
                                            <div className="icon">
                                                <img src={user} alt="user-men" />

                                            </div>
                                            <h4 className="title">Conoce el 100% de clientes que visitan tu tienda física</h4>
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                        <div className="icon-box new-icon-box--layout">
                                            <div className="icon">
                                                <img src={magnifier} alt="magnifying glass" />
                                            </div>
                                            <h4 className="title">Analiza, automatiza, optimiza. Reduce tus CACs</h4>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                        <div className="icon-box new-icon-box--layout">
                                            <div className="icon">
                                                <img src={chat} alt="chat" />
                                            </div>
                                            <h4 className="title">Comunícate con tus clientes de forma efectiva.</h4>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                        <div className="icon-box new-icon-box--layout">
                                            <div className="icon">
                                                <img src={graph} alt="graph" />
                                            </div>
                                            <h4 className="title">Reduce carga de trabajo a tu equipo de marketing</h4>
                                        </div>
                                    </div>

                                </div>
                                <div className="mobile-benefits">
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    loop={true}
                                    navigation
                                >
                                    <SwiperSlide>
                                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch ">
                                            <div className="icon-box new-icon-box--layout">
                                                <div className="icon">
                                                    <img src={heart} alt="heart" />
                                                </div>
                                                <h4 className="title">Potencia tu relación y cuida a tus clientes</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                            <div className="icon-box new-icon-box--layout">
                                                <div className="icon">
                                                    <img src={rocket} alt="rocket" />
                                                </div>
                                                <h4 className="title">Catapulta tus ratios de retención</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                            <div className="icon-box new-icon-box--layout">
                                                <div className="icon">
                                                    <img src={graph} alt="graph" />
                                                </div>
                                                <h4 className="title">Incrementa tu ticket medio, LTV y ROAS.</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                            <div className="icon-box new-icon-box--layout">
                                                <div className="icon">
                                                    <img src={magic} alt="magic" />
                                                </div>
                                                <h4 className="title">Personaliza la experiencia de compra</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                            <div className="icon-box new-icon-box--layout">
                                                <div className="icon">
                                                    <img src={user} alt="user-men" />

                                                </div>
                                                <h4 className="title">Conoce el 100% de clientes que visitan tu tienda física</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                            <div className="icon-box new-icon-box--layout">
                                                <div className="icon">
                                                    <img src={magnifier} alt="magnifying glass" />
                                                </div>
                                                <h4 className="title">Analiza, automatiza, optimiza. Reduce tus CACs</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                            <div className="icon-box new-icon-box--layout">
                                                <div className="icon">
                                                    <img src={chat} alt="chat" />
                                                </div>
                                                <h4 className="title">Comunícate con tus clientes de forma efectiva.</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                            <div className="icon-box new-icon-box--layout">
                                                <div className="icon">
                                                    <img src={graph} alt="graph" />
                                                </div>
                                                <h4 className="title">Reduce carga de trabajo a tu equipo de marketing</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                </div>
                                
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Benefits