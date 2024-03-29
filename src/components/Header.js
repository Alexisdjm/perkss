import images from '../images/exporting';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

    const [menu, setMenu] = useState(false)

    return(
        <>
            <header id="header" className="">
                <div className="container d-flex align-items-center justify-content-between">

                <a href="/" className="logo"><img src={images.logo} alt="" className="img-fluid"></img></a>

                <nav id="navbar" className={menu ? 'navbar navbar-mobile' : 'navbar'}>
                    
                    <ul>
                    <li><Link to='/' className='nav-link scrollto active'>Home</Link></li>
                    <li><Link to='/usuarios' className='nav-link scrollto'>Marcas</Link></li>
                    <li><a className="nav-link scrollto" href="https://medium.com/@eduardo_30817/unlocking-the-power-of-brand-loyalty-with-web3-f07300531e49">Blog</a></li>
                    <li><a className="nav-link mobile-only" href="https://app.perkss.io/auth/login">Iniciar sesión</a></li>
                    <li><a className="nav-link mobile-only" href="https://app.perkss.io/auth/signup">Registro</a></li>
                    <li><a className="login" href="https://app.perkss.io/auth/login">
                        <svg width="150" height="39" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradiente" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#EB00FF" />
                            <stop offset="100%" stop-color="#1BFFE4" />
                            </linearGradient>
                        </defs>
                        <rect x="2" y="2" width="146" height="35" rx="10" ry="10" fill="none" stroke="url(#gradiente)" stroke-width="2" />
                        </svg>
                    </a></li>
                    <li><a className="register" href="https://app.perkss.io/auth/signup">
                        <svg width="150" height="39" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradiente" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#EB00FF" />
                            <stop offset="100%" stop-color="#1BFFE4" />
                            </linearGradient>
                        </defs>
                        <rect x="2" y="2" width="146" height="35" rx="10" ry="10" fill="none" stroke="url(#gradiente)" stroke-width="2" />
                        </svg>
                    </a></li>
                    </ul>
                    <i className={!menu ? "bi bi-list mobile-nav-toggle" : "bi bi-x mobile-nav-toggle"} onClick={() => {menu ? setMenu(false) : setMenu(true)}}></i>
                </nav>

                </div>
            </header>
        </>
    )
}

export default Header