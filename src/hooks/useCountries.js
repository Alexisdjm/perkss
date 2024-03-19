import countryPhoneCodes from '../lib/country_phone_codes.json'
import ReactCountryFlag from "react-country-flag"
export const useCountries = () => {
    return {
        countries: countryPhoneCodes,
        spain: countryPhoneCodes.find(country => country.code === 'ES'),
        countriesSelectOptions: countryPhoneCodes.map(c => 
            ({  
                name: c.name,
                code: c.code,
                value: c.dial_code, 
                label: 
                <div>
                    <ReactCountryFlag countryCode={c.code} />
                </div>
        })),
        spainSelectOtion: {
            value: countryPhoneCodes.find(country => country.code === 'ES').dial_code, 
            label: 
            <div>
                <ReactCountryFlag countryCode={countryPhoneCodes.find(country => country.code === 'ES').code} />
            </div>
        }
    }
}