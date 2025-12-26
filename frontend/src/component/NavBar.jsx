import React from 'react'
import { navbarStyles } from '../assets/dummyStyles'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <header className={navbarStyles.header}>
        <div className={navbarStyles.container}>
            <nav className={navbarStyles.nav}>
                <div className={navbarStyles.logoSection}>
                    <Link to='/' className={navbarStyles.logoLink}>
                        <img src={logo} alt="logo" className={navbarStyles.logoImage} />
                        <span className={navbarStyles.logoText}> Ai Invoice</span>
                    </Link>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default NavBar