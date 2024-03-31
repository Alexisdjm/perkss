import images from "./images/exporting"

const HomeSlider = {
    key: "home",
    css: "tablet-img--slider",
    first: {
        img: images.tabletSlide1,
        title: "Crea recompensas Ecomocionales",
        content: "Crea tu propio Euro de Fidelidad y otras recompensas Ecomocionales (económicas + emocionales).",
    },
    second: {
        img: images.tabletSlide2,
        title: "Establece objetivo de consumo",
        content: "Establece el objetivo de consumo que deben alcazar tus clientes"
    },
    third: {
        img: images.tabletSlide3,
        title: "Determina las recompensas",
        content: "Determina las recompensas que darás a tus clientes tras alcanzar el objetivo de consumo y al realizar acciones que promuevan tu marca."
    },
    forth: {
        img: images.tabletSlide4,
        title: "Analiza, optimiza y personaliza",
        content: "Analiza, optimiza y personaliza objetivos y recompensas."
    },
    adquisition: {
        css: 'adquisition-css-class',
        first: {
            img: images.adquisitionTablet1,
            img2: images.iphone12_2,
            title: "Crea productos y/o sube contenido",
        },
        second: {
            img: images.adquisitionTablet2,
            img2: images.iphone12_3,
            title: "Crea audiencias hiper segmentadas",
        },
        third: {
            img: images.adquisitionTablet3,
            img2: images.iphone12_1,
            title: "Configura y lanza campañas",
        },
        forth: {
            img: images.tabletSlide4,
            title: "Analiza, optimiza y personaliza ofertas y publicaciones",
        }
    }
}

export default HomeSlider
