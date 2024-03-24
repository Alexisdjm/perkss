
import '../css/vendor/bootstrap/css/bootstrap.css'
import '../css/vendor/bootstrap/css/bootstrap.min.css'
import '../css/vendor/bootstrap-icons/bootstrap-icons.css'
import '../css/vendor/boxicons/css/boxicons.min.css'
import '../css/vendor/glightbox/css/glightbox.min.css'
import '../css/vendor/remixicon/remixicon.css'
import '../css/vendor/swiper/swiper-bundle.min.css'

import Header from './Header';
import Semifooter from './semifooter';
import Footer from './footer';
import images from '../images/exporting';
import FirstContent from './heroFirstContent';
import Userfirst from './userfirst';
import MoreServices from './moreservices';
import Howitworks from './howitworks';
import FAQs from './FAQ';
import Testimonials from "./testimonials"
import SecondaryBanner from './secondaryBanner';

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
            <SecondaryBanner>
                <FirstContent main={false} stylee={'secondary-banner--content'}/>
            </SecondaryBanner>
            <main id='main'>
                <Userfirst/>
                <MoreServices/>
                <Testimonials/>
                <FAQs/>
                <Semifooter/> 
            </main>
            <Footer/>
            <a href="#" className={!scroll ? "back-to-top d-flex align-items-center justify-content-center" : 'back-to-top d-flex align-items-center justify-content-center scroll-active'}><i className="bi bi-arrow-up-short"></i></a>
            <CookiesConsent/>
        </>
    )
}

export default Home