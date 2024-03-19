import images from "../../../images/exporting"

export const DownloadApp = () => {
    return (<>
        <div className="flex justify-center items-center align-center">
            <div className="flex items-center align-center mr-2">

                <a href="https://apps.apple.com/es/app/perkss/id6448196063" className="app-store">
                    <img src={images.app_store} alt="App Store" className="max-w-[150px]"></img></a>
            </div>
            <div className="flex items-center align-center">
                <a href="https://play.google.com/store/apps/details?id=io.perkss" className="g-play">
                    <img src={images.google_play} alt="Google Play" className="max-w-[150px]"></img></a>
            </div>
        </div>
    </>
    )
}