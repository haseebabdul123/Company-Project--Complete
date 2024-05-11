import React from 'react'
import "./style.css"
import NavBar from '../NavBar/NavBar'
import Img from "../../images/img1.jpeg"
const LandingPage = () => {
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
