import images from "../images/exporting"

const SecondaryBanner = ({children}) => {


    return <>
        <section id="secondary" className="secondary-banner--component">
            <div>
                <img src={images.girlBanner} className="left-banner--img--desktop" alt="girl-banner"></img>
                <img src={images.mobileGirl} className="left-banner--img--mobile" alt="girl-banner"></img>
                <img src={images.secondaryImageGroup} className="right-secondary--image--desktop" alt="right-bg"></img>
                <img src={images.mobileGuy} className="right-secondary--image--mobile" alt="mobile guy"></img>
                <img src={images.alternativeBannerIMG} className="banner-floating--img" alt="another banner"></img>
                <div className="secondary-banner--content-box ">
                    {children}
                </div>
            </div>
        </section>
    </>
}

export default SecondaryBanner