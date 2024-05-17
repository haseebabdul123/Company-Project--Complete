import React, { useRef } from "react";
import LandingPage from "./Landing Page/LandingPage";
import Cards from "./Cards/Cards";
import { SerData, ProData, BlogData } from "./data/data.js";
import "../../src/homeStyle.css";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'
const Home = () => {
gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.from(".services .head ", {
     y:-50,
     duration:.8,
     opacity:0,
     scrollTrigger:{
      trigger:".services .head",
      scroller:"body",
      start:"top 50%"
     }
    })
   })
  useGSAP(()=>{
    gsap.from(".services .wrapper", {
     x:-300,
     skewY:15,
     duration:1.5,
     opacity:0,
     stagger:.3,
     scrollTrigger:{
      trigger:".services .wrapper",
      scroller:"body",
      start:"top 15%"
     }
    }, "-=1")
   })
  useGSAP(()=>{
    gsap.from(".services .card ", {
     y:-50,
     duration:.8,
     opacity:0,
     scrollTrigger:{
      trigger:".services .card",
      scroller:"body",
      start:"top 70%"
     }
    })
   })
  useGSAP(()=>{
    gsap.from(".projects .head-2 ", {
     y:-50,
     duration:.8,
     opacity:0,
     scrollTrigger:{
      trigger:".projects .head-2",
      scroller:"body",
      start:"top 80%"
     }
    })
   })
   
   useGSAP(()=>{
    gsap.from(".wrap .single-card ", {
     x:-300,
     skewX:15,
     duration:1,
     opacity:0,
     scrollTrigger:{
      trigger:".wrap .single-card ",
      scroller:"body",
      start:"top 80%"
     }
    }, "+=1")
   })

   useGSAP(()=>{
    gsap.from(".projects .card", {
     y:-50,
     duration:.8,
     opacity:0,
     scrollTrigger:{
      trigger:".projects .card",
      scroller:"body",
      start:"top 70%"
     }
    })
   })

   useGSAP(()=>{
    gsap.from(".blog .card-2", {
     x:-300,
     skewY:15,
     duration:1.5,
     opacity:0,
     stagger:.3,
     scrollTrigger:{
      trigger:".blog .card-2",
      markers:true,
      scroller:"body",
      start:"top 20%"
     }
    }, "-=1")
   })
  return (
    <div>
      <LandingPage />
      <div className="services">
        <div className="head">Our Services</div>
        <div className="wrapper">
          {SerData.map((val, index) => {
            return <Cards imgsrc={val.imgsrc} title={val.title} />;
          })}
        </div>
        <div className="card">
          <h3>Meet Our Talented Team</h3>
          <div className="btn">Our Team</div>
        </div>
      </div>
      <div className="projects">
        <div className="head-2">Our Projects</div>
        {ProData.map((data) => {
          return (
            <div className="wrap">
              <div class="single-card">
                <div class="img-area">
                  <img src={data.imgsrc} alt="" />
                </div>
                <div class="info">
                  <h3>{data.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
        <div className="btn">More Projecs</div>
        <div className="card">
          <h6>
            Ready to turn your software dreams into reality? Let's start
            building together! Click below to get in touch with our team of
            experts and take the first step towards your next big project.
          </h6>
          <div className="btn">Contact us</div>
        </div>
      </div>
      <div className="blog">
        <span>The Digital Plus: Least In Software Development</span>
        <div className="card-2">
        {BlogData.map((data) => {
          return (
            <div className="wrap">
              <div class="single-card-2">
                <div class="img-area-2">
                  <img src={data.imgsrc} alt="" />
                </div>
                <div class="info-2">
                  <h3>{data.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
        </div>
        <div className="btn">More Blogs</div>
      </div>
    </div>
  );
};

export default Home;
