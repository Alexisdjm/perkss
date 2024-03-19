import images from '../images/exporting'
export const AppLoader = () => {
    return(
        <section className="loader">
            <img src={images.logo} alt="" className="loader-img animacion-imagen"></img>
        </section>
    )
}