
import '../css/vendor/bootstrap/css/bootstrap.css'
import '../css/vendor/bootstrap/css/bootstrap.min.css'
import '../css/vendor/bootstrap-icons/bootstrap-icons.css'
import '../css/vendor/boxicons/css/boxicons.min.css'
import '../css/vendor/glightbox/css/glightbox.min.css'
import '../css/vendor/remixicon/remixicon.css'
import '../css/vendor/swiper/swiper-bundle.min.css'

import images from '../images/exporting'
import Header from './Header';
import HeroBanner from './hero_banner';
import Benefits from './benefits';
import Como from './como';
import Services from './services';
import Testimonials from './testimonials';
import Blockchain from './blockchain';
import Cambio from './cambio';
import Semifooter from './semifooter';
import Footer from './footer';
import FirstContent from './heroFirstContent';
import MobileMessage from './mobileMessage'

import { useState, useEffect } from 'react'
import CookiesConsent from './CookiesConsent/CookiesConsent'

const Home = () => {

    const [loading, setLoading] = useState(false)
    const [scroll, setScroll] = useState(false)

    const Loader = () => {
        return(
            <section className="loader">
                <img src={images.logo} alt="" className="loader-img animacion-imagen"></img>
            </section>
        )
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500);
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [])

    return(
        <>
            {loading ? <Loader/> : ''}
            <Header/>
            <HeroBanner 
            register={true}
            css={'new-align-hb'}
            bannerSI={images.bannerBG2} 
            SecondBannerI={images.bannerBG3}
            anotherBannerSI={images.bannerBG1}
            section={"simple-flex section-height adjust-bg home"} 
            >
                <FirstContent main={true} stylee={'medium-font new-hb-align'}/>
            </HeroBanner>
            <main id='main'>
                <MobileMessage/>
                <Benefits/>
                <Como/>
                <Services/>
                <Testimonials/>
                <Blockchain/>
                <Cambio/>
                <Semifooter appButtons={false}/> 
            </main>
            <Footer/>
            <a href="#"className={!scroll ? "back-to-top d-flex align-items-center justify-content-center" : 'back-to-top d-flex align-items-center justify-content-center scroll-active'}><i className="bi bi-arrow-up-short"></i></a>
            <CookiesConsent/>
        </>
    )
}

export default Home