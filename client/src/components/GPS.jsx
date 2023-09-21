import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import "../css/Leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";

function GPS() {
  const location = useLocation();
  const { busData } = location.state || {};
  let driverNo = busData ? busData.driverNo : null;

  const socketRef = useRef(null);
  const [locationData, setLocationData] = useState({
    longitude: 72.5713621,
    latitude: 23.022505,
  });

  useEffect(() => {
    if (driverNo) {
      driverNo = driverNo.toString(); // Convert driverNo to a string

      console.log(typeof driverNo);
      console.log("Joined with code:", driverNo);

      socketRef.current = io("http://localhost:4000");
      socketRef.current.emit("joinRoom", driverNo);

      socketRef.current.on("locationUpdate", (data) => {
        console.log(typeof data);
        console.log(data.longitude);
        console.log(data.latitude);
        console.log(data);

        // Parse the received JSON string into a JavaScript object
        const locationUpdate = JSON.parse(data);

        // Check if locationUpdate.longitude and locationUpdate.latitude are valid numbers
        const longitude = !isNaN(locationUpdate.longitude)
          ? parseFloat(locationUpdate.longitude)
          : 0;
        const latitude = !isNaN(locationUpdate.latitude)
          ? parseFloat(locationUpdate.latitude)
          : 0;

        // Update the location data in the state
        setLocationData({
          // ...locationData, // Spread the existing state to keep other properties
          longitude: longitude,
          latitude: latitude,
        });
      });
    }
  }, []);
  const print = () => {
    console.log(locationData);
  };

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    // iconUrl: require("./icons/placeholder.png"),
    iconSize: [38, 38], // size of the icon
  });

  // custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  const formatTime = (timestamp) => {
    const arrivalTimeDate = new Date(timestamp);
    const hours = arrivalTimeDate.getHours();
    const minutes = arrivalTimeDate.getMinutes();
    const seconds = arrivalTimeDate.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      {/*<div>
       <div>
        <h1>GPS Page</h1>
        <p>Latitude: {locationData.latitude}</p>
        <p>Longitude: {locationData.longitude}</p>
        <p>Bus Data:</p>
        <pre>{JSON.stringify(busData, null, 2)}</pre>
      </div>
      <p>{busData.state}</p>
      <button onClick={print}>hmm</button>
    </div> */}
      <div
        className="container1 box1  mt-5"
        style={{ width: "100vw", height: "20vh", borderRadius: "0px" }}
      >
        <div className="row m-3">
          <div className="col-9">
            <h4 className="text-start fw-bold">
              <span className="fw-bold">Bus Number: </span>
              {busData.state}-{busData.city}-{busData.alpha}-{busData.numPlate}
            </h4>
          </div>
          <div className="col-3">
            <h4 className="text-end fw-bold">
              {" "}
              Driver No <span className="fw-bold"> : {busData.driverNo}</span>
            </h4>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-4">
            <h5>
              <span className="fw-bold">Arrival Time: </span>
              {formatTime(busData.arrivalTime)}
            </h5>
          </div>
          <div className="col-4 text-center">
            <h5>
              <span className="fw-bold">Duration: </span>
              {busData.duration}
              <span className="fw-bold">Hours</span>
            </h5>
          </div>

          <div className="col-4">
            <h5 className="text-end text-black fw-bold">Track NOW</h5>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="">
        <MapContainer
          center={[locationData.latitude, locationData.longitude]}
          zoom={13}
          scrollWheelZoom={false}
        >
          {/* OPEN STREEN MAPS TILES */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
            <Marker position={[23.022505, 72.5713621]} icon={customIcon}>
              <Popup>This is popup 1</Popup>
            </Marker>
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </>
  );
}

export default GPS;
