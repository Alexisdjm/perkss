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
import CookiesConsent from './CookiesConsent/CookiesConsent';

const Secondary = () => {

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
        setLoading(true)
        window.scrollTo(0, 0)
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

export default Secondary