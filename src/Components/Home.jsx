import React from "react";
import LandingPage from "./Landing Page/LandingPage";
import Cards from "./Cards/Cards";
import { SerData, ProData, BlogData } from "./data/data.js";
import "../../src/homeStyle.css";
const Home = () => {
  return (
    <div>
      <LandingPage />
      <div className="services">
        <h1>Our Services</h1>
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
        <h1>Our Projects</h1>
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
