import money from '../images/img/money.svg'
import magic from '../images/img/magic.svg'
import gleam from '../images/img/gleam.svg'
import gift from '../images/img/gift.svg'
import mail from '../images/img/mail.svg'
import heart from '../images/img/heart.svg'

import { Swiper, SwiperSlide } from 'swiper/react';

const MoreServices = () => {
    return(
        <>
            <section id="services" className="services">
      <div className="container scroll-reveal">

        <div className="text-center sec-heading mb-5">
          <h5>Un antes y un después</h5>
          <h2 className="fw-bold">Joyalty, no sólo Loyalty</h2>
        </div>

        <div className="row desktop-services">

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box iconbox-blue">
              <img src={money} alt=""></img>
              <h4>Gana Euros</h4>
              <p>Con Perkss ganarás Euros, no puntos o cupones obsoletos que tienen fecha de caducidad.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box iconbox-blue">
              <img src={magic} alt=""></img>
              <h4>Único registro</h4>
              <p>Admitámoslo, darnos de alta en múltiples programs de fidelidad es un c**ñazo. Con Perkss, haz login y ten acceso a todas tus tiendas favoritas.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box iconbox-blue">
              <img src={gleam} alt=""></img>
              <h4>Hazlo a tu manera</h4>
              <p>Compra y canjea donde quieras. Perkss te permite canjear donde desees los Euros que acumulas. Olvídate de trabas, complejidad y caducidad.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box iconbox-blue">
              <img src={gift} alt=""></img>
              <h4>Tus datos, tu dinero. </h4>
              <p>En Perkss podrás, voluntariamente, compartir con las marcas algunos datos personales a cambio de recompensas y ofertas personalizadas. </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box iconbox-blue">
              <img src={mail} alt=""></img>
              <h4>Menos email publicitarios</h4>
              <p>Todos estamos cansados de recibir cientos de emails publicitarios. Con Perkss tendrás la opción de no recibirlos más, o recibir los que te interesan.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box iconbox-blue">
              <img src={heart} alt=""></img>
              <h4>Conecta y diviértete</h4>
              <p>Participa en las experiencias de fidelidad de tus marcas favoritas. No solo acumularás recompensas, también conectarás y crecerás con ellas.</p>
            </div>
          </div>


        </div>
        <div className='mobile-services'>
          <Swiper
              spaceBetween={50}
              slidesPerView={1}                                   
              loop={true}
          >
            <SwiperSlide>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box iconbox-blue">
                  <img src={money} alt=""></img>
                  <h4>Gana Euros</h4>
                  <p>Con Perkss ganarás Euros, no puntos o cupones obsoletos que tienen fecha de caducidad.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box iconbox-blue">
                  <img src={magic} alt=""></img>
                  <h4>Único registro</h4>
                  <p>Admitámoslo, darnos de alta en múltiples programs de fidelidad es un c**ñazo. Con Perkss, haz login y ten acceso a todas tus tiendas favoritas.</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box iconbox-blue">
                  <img src={gleam} alt=""></img>
                  <h4>Hazlo a tu manera</h4>
                  <p>Compra y canjea donde quieras. Perkss te permite canjear donde desees los Euros que acumulas. Olvídate de trabas, complejidad y caducidad.</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box iconbox-blue">
                  <img src={gift} alt=""></img>
                  <h4>Tus datos, tu dinero. </h4>
                  <p>En Perkss podrás, voluntariamente, compartir con las marcas algunos datos personales a cambio de recompensas y ofertas personalizadas. </p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box iconbox-blue">
                  <img src={mail} alt=""></img>
                  <h4>Menos email publicitarios</h4>
                  <p>Todos estamos cansados de recibir cientos de emails publicitarios. Con Perkss tendrás la opción de no recibirlos más, o recibir los que te interesan.</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box iconbox-blue">
                  <img src={heart} alt=""></img>
                  <h4>Conecta y diviértete</h4>
                  <p>Participa en las experiencias de fidelidad de tus marcas favoritas. No solo acumularás recompensas, también conectarás y crecerás con ellas.</p>
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

export default MoreServices