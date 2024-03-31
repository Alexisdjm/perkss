import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeSlider from "../sliderHomeContent"
import UsersSlider from '../sliderUsersContent'

import 'swiper/css';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <Testimonials 
      object={window.location.pathname === '/' ? UsersSlider : HomeSlider } 
      activeTab={activeTab} 
      navbuttons={window.location.pathname === '/' ? false : true }
      handleTabClick={handleTabClick} />
    </div>
  );
}


const Testimonials = ({ activeTab, handleTabClick, object, navbuttons }) => {

  return (
    <>
      <section id="testimonials" className={"antes " + object.key}>
        <div className="container scroll-reveal">
          <h5 className='iphone-slider--upper-title'>Muy fácil, mucho valor</h5>
          <div className="sec-heading text-center mt-0">
            <h2 className="text-white mt-3">Cómo funciona</h2>
          </div>

          {
            navbuttons ? <>
              <ul className="nav nav-pills my-5 justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                    className={`nav-link ${activeTab === 0 ? 'active' : ''}`}
                    onClick={() => handleTabClick(0)}
                    >
                    Retención y Fidelización
                    </button>
                </li>
                <button
                  className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
                  onClick={() => handleTabClick(1)}
                >
                  Adquisición
                </button>
              </ul>
            </> : ""
          }

          <div className="tab-content">
            {activeTab === 0 && 
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className={"testimonials-slider swiper "+ object.key}>
                    <Swiper
                        modules={[Navigation, Pagination ]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        loop={true}
                        navigation
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className='new-slide--container'>
                              <img alt='slide' className={object.css} src={object.first.img}></img>
                              <div className='content-box'>
                                <h2>1</h2>
                                <div className='inner-content--box'>
                                  <h3>{object.first.title}</h3>
                                  {
                                    object.first.content ? <>
                                      <p>{object.first.content}</p>
                                    </> : ""
                                  } 
                                  
                                </div>
                              </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='new-slide--container'>
                            <img alt='slide' className={object.css} src={object.second.img}></img>
                            <div className='content-box'>
                              <h2>2</h2>
                              <div className='inner-content--box'>
                                <h3>{object.second.title}</h3>
                                {
                                  object.second.content ? <>
                                    <p>{object.second.content}</p>
                                  </> : ""
                                }
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='new-slide--container'>
                            <img alt='slide' className={object.css} src={object.third.img}></img>
                            <div className='content-box'>
                              <h2>3</h2>
                              <div className='inner-content--box'>
                                <h3>{object.third.title}</h3>
                                {
                                  object.third.content ? <>
                                    <p>{object.third.content}</p>
                                  </> : ""
                                }
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='new-slide--container'>
                            <img alt='slide' className={object.css} src={object.forth.img}></img>
                            <div className='content-box'>
                              <h2>4</h2>
                              <div className='inner-content--box'>
                                <h3>{object.forth.title}</h3>
                                {
                                  object.forth.content ? <>
                                    <p>{object.forth.content}</p>
                                  </> : ""
                                }
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </div>}
            {activeTab === 1 &&
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="testimonials-slider-two swiper">
                            <Swiper
                            modules={[Navigation, Pagination ]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            navigation
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                  <div className='new-slide--container'>
                                    <div className='adquisition-imgs-container'>
                                      <img alt='slide' className={object.adquisition.css} src={object.adquisition.first.img}></img>
                                      <img alt='iphone' className='secondary-iphone--img' src={object.adquisition.first.img2}></img>
                                    </div>
                                    <div className='content-box'>
                                      <h2>1</h2>
                                      <div className='inner-content--box'>
                                        <h3>{object.adquisition.first.title}</h3>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='new-slide--container'>
                                    <div className='adquisition-imgs-container'>
                                      <img alt='slide' className={object.adquisition.css} src={object.adquisition.second.img}></img>
                                      <img alt='iphone' className='secondary-iphone--img' src={object.adquisition.second.img2}></img>
                                    </div>
                                    <div className='content-box'>
                                      <h2>2</h2>
                                      <div className='inner-content--box'>
                                        <h3>{object.adquisition.second.title}</h3>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='new-slide--container'>
                                    <div className='adquisition-imgs-container'>
                                      <img alt='slide' className={object.adquisition.css} src={object.adquisition.third.img}></img>
                                      <img alt='iphone' className='secondary-iphone--img' src={object.adquisition.third.img2}></img>
                                    </div>
                                    <div className='content-box'>
                                      <h2>3</h2>
                                      <div className='inner-content--box'>
                                        <h3>{object.adquisition.third.title}</h3>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className='new-slide--container'>
                                    <img alt='slide' className={object.adquisition.css} src={object.adquisition.forth.img}></img>
                                    <div className='content-box'>
                                      <h2>4</h2>
                                      <div className='inner-content--box'>
                                        <h3>{object.adquisition.forth.title}</h3>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>}
          </div>


          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="testimonials-slider swiper">
              </div>
            </div>

            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className="testimonials-slider-two swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <h2>1</h2>
                      <p>Crea productos y/o sube contenido.</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <h2>2</h2>
                      <p>Crea audiencias hiper segmentadas.</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <h2>3</h2>
                      <p>Configura y lanza campañas.</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <h2>4</h2>
                      <p>Analiza, optimiza y personaliza ofertas y publicaciones.</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tabs;
