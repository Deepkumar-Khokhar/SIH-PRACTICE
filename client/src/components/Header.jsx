import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="d-flex mb-3 " style={{position:"fixed" ,width:"100vw",zIndex:"1000"}}>
        <div className="p-2"></div>
        <div className="ms-auto p-2">
          <div className="container gray highlightTextIn" style={{marginRight:"100px"}}>
            <Link alt="HOME" to="/">HOME</Link>
            <Link alt="ARTICLES">ARTICLES</Link>
            <Link alt="PORTFOLIO">PORTFOLIO</Link>
            <Link alt="ABOUT">ABOUT</Link>
            <Link alt="CONTACT">CONTACT</Link>
          </div>
          
        </div>
      </div>

      {/* <div className="row" style={{position:"fixed",width:"100vw"}}>
        <div className="col-3">abcd</div>
        <div className="col-9">
          <div className="container gray highlightTextIn">
            <Link alt="HOME">HOME</Link>
            <Link alt="ARTICLES">ARTICLES</Link>
            <Link alt="PORTFOLIO">PORTFOLIO</Link>
            <Link alt="ABOUT">ABOUT</Link>
            <Link alt="CONTACT">CONTACT</Link>
          </div>
        </div>
      </div> */}
    </>
  );
}
