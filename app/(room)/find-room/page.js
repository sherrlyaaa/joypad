"use client";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";

import Header from "../../header";
import Footer from "../../footer";
import Link from "next/link";
import "../../../styles/find-room.css";

const generateTimeOptions = () => {
  const times = [];
  for (let hour = 10; hour <= 19; hour++) {
    const time = `${hour}:00`;
    times.push(
      <option key={time} value={time}>
        {time}
      </option>
    );
  }
  return times;
};

const findRoom = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimeDropdowns, setShowTimeDropdowns] = useState(false);
  const [fromTime, setFromTime] = useState("");
  const [untilTime, setUntilTime] = useState("");
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  useEffect(() => {
    const fetchRooms = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const startDateTime = urlParams.get("startDateTime");
      const endDateTime = urlParams.get("endDateTime");
  
      // Validasi format tanggal
      const isValidDateTimeFormat = (dateTime) => {
        const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
        return regex.test(dateTime);
      };
  
      if (!startDateTime || !endDateTime || 
          !isValidDateTimeFormat(startDateTime) || 
          !isValidDateTimeFormat(endDateTime)) {
        setError("Invalid reservation parameters.");
        setLoading(false);
        console.error("Invalid date-time parameters:", { startDateTime, endDateTime });
        return;
      }
  
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No access token found. Please log in again.");
        }
  
        console.log("Fetching rooms with:", { startDateTime, endDateTime });
  
        const response = await fetch(
          `http://localhost:8080/api/reservations/available-rooms?startDateTime=${startDateTime}&endDateTime=${endDateTime}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
  
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("Unauthorized. Please log in again.");
          }
          throw new Error("Failed to fetch rooms.");
        }
  
        const data = await response.json();
        console.log("Rooms fetched successfully:", data);
        setRooms(data);
      } catch (err) {
        console.error("Error fetching rooms:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchRooms();
  }, []);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div>
      <Header />
      <div>
        {/* Bagian Reservation */}
        <section id="reservation" className="section">
          <div className="reservation-box">
            <div className="input-group">
              <label>Reservation date</label>
              <button
                className="placeholder"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                {selectedDate ? selectedDate.toDateString() : "Add dates"}
              </button>
              {showCalendar && (
                <div className="calendar-container">
                  <Calendar onChange={handleDateChange} value={selectedDate} />
                </div>
              )}
            </div>
            <div className="input-group">
              <label>Reservation time</label>
              <button
                className="placeholder"
                onClick={() => setShowTimeDropdowns(!showTimeDropdowns)}
              >
                Add times
              </button>
              {showTimeDropdowns && (
                <div className="time-dropdown-container">
                  <div className="time-input">
                    <label>From</label>
                    <select
                      className="time-dropdown"
                      value={fromTime}
                      onChange={(e) => setFromTime(e.target.value)}
                    >
                      <option value="">Select</option>
                      {generateTimeOptions()}
                    </select>
                  </div>
                  <div className="time-input">
                    <label>Until</label>
                    <select
                      className="time-dropdown"
                      value={untilTime}
                      onChange={(e) => setUntilTime(e.target.value)}
                    >
                      <option value="">Select</option>
                      {generateTimeOptions()}
                    </select>
                  </div>
                </div>
              )}
            </div>
            <button
                id="find"
                className="find-room-button"
                onClick={() => {
                  if (!selectedDate || !fromTime || !untilTime) {
                    alert("Please select a valid date and time.");
                    return;
                  }
                
                  const startDateTime = `${selectedDate.toISOString().split("T")[0]}T${fromTime}:00`;
                  const endDateTime = `${selectedDate.toISOString().split("T")[0]}T${untilTime}:00`;
                
                  // Validasi format
                  const isValidDateTimeFormat = (dateTime) => {
                    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/; // Regex untuk format YYYY-MM-DDTHH:mm:ss
                    return regex.test(dateTime);
                  };
                
                  if (!isValidDateTimeFormat(startDateTime) || !isValidDateTimeFormat(endDateTime)) {
                    console.error("Invalid date-time format");
                    alert("Date and time format is invalid.");
                    return;
                  }
                
                  console.log("Start DateTime:", startDateTime); // Debugging
                  console.log("End DateTime:", endDateTime);    // Debugging
                
                  const query = `?startDateTime=${startDateTime}&endDateTime=${endDateTime}`;
                  window.location.href = `/find-room${query}`;
                }}
            >
                Find Room
            </button>
          </div>
        </section>
      </div>
      <div className="room-container">
  {rooms.length === 0 ? (
    <div>No rooms available for the selected date and time.</div>
  ) : (
    rooms.map((room) => (
      <div key={room.roomName} className="room-card">
        <img
          src={`/image/${room.roomName.toLowerCase()}find.png`}
          alt={`${room.roomName} room`}
        />
        <h3>{room.roomName.toUpperCase()} ROOM</h3>
        <p>Price: {room.pricePerHour} per hour</p>
        <a href={`/${room.roomName.toLowerCase()}-room`}>
          <div className="expand-btn">Expand</div>
        </a>
      </div>
    ))
  )}
</div>

      <Footer />
    </div>
  );
};

export default findRoom;
