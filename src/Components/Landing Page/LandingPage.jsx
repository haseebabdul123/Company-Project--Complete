import React from 'react'
import "./style.css"
import NavBar from '../NavBar/NavBar'
import Img from "../../images/img1.jpeg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const LandingPage = () => {

    useGSAP(()=>{
        gsap.from(" h1 ,h6" ,{
         y:100,
         skewY:10,
         duration:.8,
         opacity:0,
        })
       })

       useGSAP(()=>{
        gsap.from(".col-2 img" , {
         x:200,
         y:100,
         skewY:20,
         duration:.8,
         opacity:0,
        })
       })
  return (
    <div className='landing-page'>
          <NavBar/>
        <section className='header'>
            <div className="col-1">
                <h1>
                    You Run Your Bussiness. <br />
                    We Will Handle Your Finances.
                </h1>
                <h6>
                    From Development Upto Hosting All Things Will Be Done.With Cheap Price
                </h6>
                <div className="btn">
                    Get Started
                </div>
            </div>
            <div className="col-2">
                <img src={Img} alt="" />
            </div>
        </section>
    </div>
  )
}

export default LandingPage
