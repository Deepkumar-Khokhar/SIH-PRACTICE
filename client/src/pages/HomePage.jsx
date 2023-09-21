import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import BackGround from "../Images/BackGround.jpeg";
import { useNavigate } from "react-router-dom";
import GPS from "./GPS";
import '../css/HomePage.css';
import { Link } from "react-router-dom";
import AuthContext from "../context/Auth/AuthContext";


// const busData = [
//   {
//     "_id": "6509dcd2094eb2a38288bf8e",
//     "state": "HP",
//     "city": 21,
//     "alpha": "c",
//     "numPlate": 7171,
//     "driver": "6509dcd1094eb2a38288bf8b",
//     "driverNo": 7984099667,
//     "__v": 0
//   }
//   // Add more bus data objects as needed
// ];

export default function HomePage() {
  const [busData, setBusData] = useState([]);
  const navigate = useNavigate(); // Initialize useHistory


  const getBuses = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/getBuses`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.success) {
        setBusData(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBuses();
  }, []);

  const handleItemClick = (bus) => {
    navigate("/gps", { state: { busData: bus } }); // Pass data as state
  };

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "black" }}>
        <img
          src={BackGround}
          style={{ width: "100vw", height: "80vh", opacity: "0.5" }}
          alt=""
        />
        <h1 className="carousel-caption " style={{ marginBottom: "380px", zIndex: "1" }}>Track Your Bus Here</h1>
        <h2 className="carousel-caption " style={{ marginBottom: "280px", zIndex: "1" }}>Track, manage, and optimize your bus fleet with our cutting-edge bus tracking system.</h2>
      </div>
      <div className="container">
        <h2 className="text-start text-bold">Bus Routes And Timing</h2>
      </div>

      {busData.map((bus, index) => (
        <div
          className="container box mb-4"
          key={bus._id}
          onClick={() => handleItemClick(bus)} // Call the handleItemClick function on click
        >
          <div className="row m-3">
            <div className="col-9">
              <h4 className="text-start fw-bold">{bus.state}-{bus.city}-{bus.alpha}-{bus.numPlate}</h4>
            </div>
            <div className="col-3">
              <h4 className="text-end fw-bold">{bus.numPlate}</h4>
            </div>
          </div>
          <div className="row m-3">
            <div className="col-3">
              <h5 className="text-start">{bus.alpha}</h5>
            </div>
            <div className="col-3">
              <h5 className="text-center">Driver No <span className="fw-bold"> : {bus.driverNo}</span></h5>
            </div>
            <div className="col-3">
              {/* Add more fields as needed */}
            </div>
            <div className="col-3">
              <h5 className="text-end text-black fw-bold">BOOK NOW</h5>
            </div>
          </div>
        </div>
      ))}

    </>
  );
}
