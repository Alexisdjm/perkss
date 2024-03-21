import Header from './Header';
import HeroBanner from './hero_banner';
import Semifooter from './semifooter';
import Footer from './footer';
import images from '../images/exporting';
import FirstContent from './heroFirstContent';
import Userfirst from './userfirst';
import MoreServices from './moreservices';
import Howitworks from './howitworks';
import FAQs from './FAQ';
import Testimonials from "./testimonials"

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
                main={false}
                register={false} 
                inner={images.girlBanner} 
                bannerSI={images.secondaryImageGroup} 
                SecondBannerI={images.alternativeBannerIMG}
                css={'adjust-secondary-content-width justify-content-center'} 
                section={"d-flex alternative-hero secondary-banner-height users"}>
                <FirstContent main={false} stylee={'big-font'}/>
            </HeroBanner>
            <main id='main'>
                <Userfirst/>
                <MoreServices/>
                <Testimonials/>
                <Howitworks/>
                <FAQs/>
                <Semifooter/> 
            </main>
            <Footer/>
            <a href="#" className={!scroll ? "back-to-top d-flex align-items-center justify-content-center" : 'back-to-top d-flex align-items-center justify-content-center scroll-active'}><i className="bi bi-arrow-up-short"></i></a>
            <CookiesConsent/>
        </>
    )
}

export default Secondary