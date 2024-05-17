import React from 'react'
import NavBar from './NavBar/NavBar'
import "../Components/blogStyle.css"
import { BlogPage} from './data/data'
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'
const Blog = () => {
  useGSAP(()=>{
    gsap.from(".wrapper .single-card-3" ,{
      y:-300,
      skewY:20,
      overflowX:"hidden",
      duration:.8,
      opacity:0,
    })
   })
  return (
    <div>
      <NavBar/>
      <div className='wrapper'>
      {BlogPage.map((data)=>{
        return(
          <div class="single-card-3">
      <div class="img-area-3">
        <img src={data.imgsrc} alt=""/>
      </div>
      <div class="info-3">
        <h3>{data.title}</h3>
      </div>
    </div>
        )
      })}
    </div>
    </div>
  )
}

export default Blog
