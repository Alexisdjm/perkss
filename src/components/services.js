import svg from '../images/img/perkss-special.svg'
import chat from '../images/img/Chat.svg'
import eye from '../images/img/eye.svg'
import lock from '../images/img/lock-line.svg'
import graph from '../images/img/graph.svg'
import video from '../images/img/video.svg'
import heart from '../images/img/heart.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Services = () => {
    return(
        <>
            <section id="services" className="services joyalty-home">
      
                <div className="container scroll-reveal">
                    <img src={svg} alt='' className="perkss-special"></img>
                    <div className="text-center sec-heading mb-5">
                    <h5>Un antes y un después</h5>
                    <h2 className="fw-bold">Joyalty, no sólo Loyalty</h2>
                    </div>

                    <div className="row desktop-services">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box iconbox-blue">
                            <img src={heart} alt=''></img>
                            <h4>Fidelidad</h4>
                            <p>Gamifica y personaliza la experiencia de compra, crea tu propio euro de fidelidad, garantiza
                                valor.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box iconbox-blue">
                            <img src={video} alt=''></img>
                            <h4>Anuncios</h4>
                            <p>Olvídate de pagar por clicks. En Perkss, solo pagarás cuando tus clientes compren. 100% gratis hasta
                                convertir.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box iconbox-blue">
                            <img src={graph} alt=''></img>

                            <h4>Datos</h4>
                            <p> Accede a los tres datos de consumo más importantes: dónde, cuánto y con qué frecuencia ha comprado un
                                consumidor.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box iconbox-blue">
                            <img src={lock} alt=''></img>

                            <h4>Privacidad</h4>
                            <p>Fomenta la privacidad de tus clientes sin sacrificar la comunicación directa.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box iconbox-blue">
                            <img src={chat} alt=''></img>
                            <h4>Comunicación</h4>
                            <p>Ten la posibilidad de conectar con el 100% de tus clientes, no sólo los que se suscriben a tu
                                newsletter.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box iconbox-blue">
                            <img src={eye} alt=''></img>

                            <h4>Visitas</h4>
                            <p>Entérate de todos los clientes que visitan tu tienda física de forma sencilla.</p>
                            </div>
                        </div>


                    </div>
                    <div className='mobile-services'>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        navigation
                    >
                        <SwiperSlide>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box iconbox-blue">
                                <img src={heart} alt=''></img>
                                <h4>Fidelidad</h4>
                                <p>Gamifica y personaliza la experiencia de compra, crea tu propio euro de fidelidad, garantiza
                                    valor.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box iconbox-blue">
                                <img src={video} alt=''></img>
                                <h4>Anuncios</h4>
                                <p>Olvídate de pagar por clicks. En Perkss, solo pagarás cuando tus clientes compren. 100% gratis hasta
                                    convertir.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box iconbox-blue">
                                <img src={graph} alt=''></img>

                                <h4>Datos</h4>
                                <p> Accede a los tres datos de consumo más importantes: dónde, cuánto y con qué frecuencia ha comprado un
                                    consumidor.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box iconbox-blue">
                                <img src={lock} alt=''></img>

                                <h4>Privacidad</h4>
                                <p>Fomenta la privacidad de tus clientes sin sacrificar la comunicación directa.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box iconbox-blue">
                                <img src={chat} alt=''></img>
                                <h4>Comunicación</h4>
                                <p>Ten la posibilidad de conectar con el 100% de tus clientes, no sólo los que se suscriben a tu
                                    newsletter.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box iconbox-blue">
                                <img src={eye} alt=''></img>

                                <h4>Visitas</h4>
                                <p>Entérate de todos los clientes que visitan tu tienda física de forma sencilla.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Services