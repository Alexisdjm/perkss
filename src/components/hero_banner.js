import images from '../images/exporting';
const HeroBanner = ({inner, css, children, bannerSI, anotherBannerSI, SecondBannerI, section}) => {
    return(
        <>
            <section id="hero" className={section}>
                <div className="new-container">
                    <div className="simple-flex align-items-center new-margin-content">
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

                        <img src={images.heart} className={'heart-image--home'} alt="banner"></img>

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