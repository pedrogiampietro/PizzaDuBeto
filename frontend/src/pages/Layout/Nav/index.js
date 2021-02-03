import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../assets/images/logo.png'
import Cart from '../../../assets/images/cart.png'

const NavBar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4">
      <Link to="/">
        <img src={Logo} alt="LogoBeto" />
      </Link>
      <div>
        <ul className="flex items-center">
          <li className="ml-6">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="ml-6">
            <Link to="/menu">Ofertas</Link>
          </li>
          <li className="ml-6">
            <Link to="/sign-up">Registrar</Link>
          </li>
          <li className="ml-6">
            <Link to="/sign-in">Login</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart" className="inline-block px-4 py-2 rounded-full">
              <img src={Cart} alt="CartIcone" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
