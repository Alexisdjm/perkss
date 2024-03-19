import images from '../images/exporting';
const HeroBanner = ({inner, css, children, bannerSI, anotherBannerSI, SecondBannerI, between, section, register}) => {
    return(
        <>
            <section id="hero" className={section}>
                <div className="new-container">
                    <div className={between ? "row space-between" : "simple-flex align-items-center new-margin-content"}>
                        {
                            register ? <>
                            <div className="button-set-mobile">
                                <a href="https://app.perkss.io/auth/signup" className="btn-get-started">Registro</a>
                                <a href="https://calendly.com/eduardosg" className="btn-get-started">Agendar llamada</a>
                            </div>
                            </> : <>
                            <div className="download-center-mobile">
                                <a href="https://apps.apple.com/es/app/perkss/id6448196063" className="app-store"><img src={images.app_store} alt="App Store"></img></a>
                                <a href="https://play.google.com/store/apps/details?id=io.perkss" className="g-play"><img src={images.google_play} alt="Google Play"></img></a>
                            </div></>
                        }
                        {
                            inner ? <>
                                <div className="new-inner-element">
                                    <img src={inner} className={'img-secondary-layout'} alt="alt"></img>
                                </div>
                            </> : ""
                        }

                        {
                            anotherBannerSI ? <>
                                <img src={anotherBannerSI} className={'anotherBannerSI'} alt="another banner"></img>
                            </> : ""
                        }
                        {
                            bannerSI ? <>
                                <img src={bannerSI} className={'bannerSI'} alt="banner"></img>
                            </> : ""
                        }

{
                            SecondBannerI ? <>
                                <img src={SecondBannerI} className={'second-banner--image'} alt="banner"></img>
                            </> : ""
                        }

                        <a href="https://app.perkss.io/" className="mobile-button--semifooter banner">Descarga Perks</a>
                        <div className={css}>
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroBanner