import * as React from "react"
import { Link } from "react-router-dom"
import { FaUser, FaShoppingCart, FaBell } from "react-icons/fa"
import './navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to='/'>Logo</Link>
      <div className="links">
        <a href="#">Enfant</a>
        <span>-</span>
        <a href="#">Homme</a>
        <span>-</span>
        <a href="#">Femme</a>
        <span>-</span>
        <a href="#">Promo</a>
      </div>
      <div className="icons">
        <FaUser />
        <Link to='cart'><FaShoppingCart /></Link>
        <FaBell />
      </div>
    </nav>
  )
}

export default Navbar