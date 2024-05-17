import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import "./navbar.css"
import logo from "../../images/logo.png"
const NavBar = () => {

  useGSAP(()=>{
   gsap.from(".container img" , {
    y:-100,
    duration:.8,
    opacity:0,
   })
  })

  useGSAP(()=>{
    gsap.from(".btn" , {
     opacity:0,
     duration:2
    })
   })

  useGSAP(()=>{
    gsap.from(".navbar-item li" , {
     y:-300,
     duration:.8,
     opacity:0,
     stagger:.3
    })
   })
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
