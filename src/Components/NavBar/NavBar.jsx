import React from 'react'
import "./navbar.css"
import logo from "../../images/logo.png"
const NavBar = () => {
  return (
    <div>
      
      <nav>
        <div className="container">
            <img src={logo} href="#" className='logo'/>
            <div className="navbar-item">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="">Team</a>
                    </li>
                    <li>
                        <a href="">About us</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
