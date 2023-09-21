import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";

function GPS() {
    const location = useLocation();
    const { busData } = location.state || {};
    let driverNo = busData ? busData.driverNo : null;

    const socketRef = useRef(null);
    const [locationData, setLocationData] = useState({
        longitude: 0,
        latitude: 0,
    });

    useEffect(() => {
        if (driverNo) {
            driverNo = driverNo.toString(); // Convert driverNo to a string

            console.log(typeof driverNo);
            console.log("Joined with code:", driverNo);

            socketRef.current = io("http://localhost:4000");
            socketRef.current.emit("joinRoom", driverNo);

            socketRef.current.on("locationUpdate", (data) => {
                console.log(typeof data)
                console.log(data.longitude);
                console.log(data.latitude);
                console.log(data);

                // Parse the received JSON string into a JavaScript object
                const locationUpdate = JSON.parse(data);

                // Check if locationUpdate.longitude and locationUpdate.latitude are valid numbers
                const longitude = !isNaN(locationUpdate.longitude) ? parseFloat(locationUpdate.longitude) : 0;
                const latitude = !isNaN(locationUpdate.latitude) ? parseFloat(locationUpdate.latitude) : 0;

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

    return (
        <div>
            <div>
                <h1>GPS Page</h1>
                <p>Latitude: {locationData.latitude}</p>
                <p>Longitude: {locationData.longitude}</p>
                <p>Bus Data:</p>
                <pre>{JSON.stringify(busData, null, 2)}</pre>
            </div>
            <button onClick={print}>hmm</button>
        </div>
    );
}

export default GPS;
