import React from 'react'
import Header from '../components/Header'
import GPS from '../components/GPS'

export default function GPSPage() {
  return (
    <>
        <Header/>
        <div style={{ backgroundColor: "black", height:"40vh" }}>
        
        <h1 className="carousel-caption " style={{ marginBottom: "450px", fontSize:"70px", zIndex: "1" }}>Track Your Bus Here</h1>
        
      </div>
      
      <GPS/>
      
    </>
  )
}
