import CookieConsent from 'react-cookie-consent';
import './CookiesConsent.scss'


const templateCookiesConsent = (props) => {
    return (
      <>
        <CookieConsent
        location='bottom'
        buttonText='Aceptar'
        enableDeclineButton
        declineButtonText='Rechazar'
        style={
          {
            background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #EB00FF, #1BFFE4) border-box',
            color: '#000000',
            borderTop: '1px transparent solid'
          }
        }
        declineButtonStyle={{
          background: 'transparent',
          border: 'solid 1px #808080',
          borderRadius: '10px',
          color: '#808080',
        }}
        buttonStyle={{
          background: 'linear-gradient(white, white) padding-box, linear-gradient(#EB00FF, #1BFFE4) border-box',
          borderRadius: '10px',
          color: '#101010',
          border: '2px solid transparent',
          filter: 'drop-shadow(0px 4px 22px rgba(134, 143, 242, 0.2))',
        }}
      >
        Utilizamos cookies propias y de terceros con finalidades analíticas y para mostrarle productos o servicios relacionados con sus preferencias a partir de sus hábitos de navegación. Puede configurar o rechazar las cookies haciendo click en “Administrar preferencias”. También puede aceptar todas las cookies pulsando el botón “Aceptar todas las cookies”. Para más información, visite nuestra <a href="/cookie_policy.html" target='_blank' rel='noreferrer noopener'>Política de Cookies</a>.
      </CookieConsent>
    </>)
}

export default templateCookiesConsent;