import axios from "axios";
import React, { useEffect, useState } from "react";
import { ROOM_URL } from "../utils/api";


const Home = () => {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(ROOM_URL);
      console.log(response);
      setRoom(response.data.data)
    }
    fetchData().catch(console.error);
  }, [])

  return (
    <div className="header">
      <h1>Home page</h1>
      <h2>Rooms available</h2>
      <div className="room-container">
        {room.map((room, idx) => {
        return <div className="room-card" key={idx}><h3>{room.attributes.roomType}</h3><p>Beds: {room.attributes.numberOfBeds}</p><p>Room number: {room.attributes.roomNumber}</p></div>
        })}
      </div>
    </div>
  );
};

export default Home;
