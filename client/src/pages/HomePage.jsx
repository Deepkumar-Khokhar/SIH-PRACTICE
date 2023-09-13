import React from "react";
import Header from "../components/Header";
import BackGround from "../Images/BackGround.jpeg";
import '../css/HomePage.css'
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Header />
      <div style={{backgroundColor:"black"}}>
        <img
          src={BackGround}
          style={{ width: "100vw", height: "80vh",opacity:"0.5"}}
          alt=""
        />
          <h1 className="carousel-caption " style={{marginBottom:"380px",zIndex:"1"}}>Track Your Bus Here</h1>
          <h2 className="carousel-caption " style={{marginBottom:"280px",zIndex:"1"}}>Track, manage, and optimize your bus fleet with our cutting-edge bus tracking system.</h2>
      </div>
      <div className="container">
        <h2 className="text-start text-bold">Bus Routes And Timing</h2>
      </div>
      <div className="container box mb-4" > 
      <div className="row m-3">
          <div className="col-9 ">
              <h4 className="text-start fw-bold">Kamrej to Vadodara</h4>
          </div>
          <div className="col-3 ">
              <h4 className="text-end fw-bold">From INR 109</h4>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-3 ">
              <h5 className="text-start">195 bus options</h5>
          </div>
          <div className="col-3">
              <h5 className="text-center">First Bus <span className="fw-bold"> : 00:05</span></h5>
          </div>
          <div className="col-3">
              <h5 className="text-center" >Last Bus<span className="fw-bold"> : 23:59</span></h5>
          </div>
          <div className="col-3">
              <h5 className="text-end text-black fw-bold">BOOK NOW</h5>
          </div>
        </div>
      </div>

      {/* 2nd container */}
      
      <div className="container box mb-4" > 
      <div className="row m-3">
          <div className="col-9 ">
              <h4 className="text-start fw-bold">Kamrej to Vadodara</h4>
          </div>
          <div className="col-3 ">
              <h4 className="text-end fw-bold">From INR 109</h4>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-3 ">
              <h5 className="text-start">195 bus options</h5>
          </div>
          <div className="col-3">
              <h5 className="text-center">First Bus <span className="fw-bold"> : 00:05</span></h5>
          </div>
          <div className="col-3">
              <h5 className="text-center" >Last Bus<span className="fw-bold"> : 23:59</span></h5>
          </div>
          <div className="col-3">
              <h5 className="text-end text-black fw-bold">BOOK NOW</h5>
          </div>
        </div>
      </div>
    </>
  );
}
