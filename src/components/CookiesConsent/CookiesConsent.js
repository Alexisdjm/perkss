import templateCookiesConsent from "./CookiesConsent.template";
import { useLocation } from "react-router-dom";
const CookiesConsent = () => {
    const location = useLocation();
    const isQR = location.pathname.includes('qr');
    if(isQR) return null;
    return templateCookiesConsent();
}

export default CookiesConsent;