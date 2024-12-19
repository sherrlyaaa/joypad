"use client";
import { format } from "path";
import React from "react";
import "../styles/globals.css";
import Header from "./header";
import Footer  from "./footer";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="home-container">
        {/* Bagian Header */}
        <Header/>
        {/* Bagian Reservation */}
        <section id="reservation" className="section">
          <div className="reservation-box">
            <div className="input-group">
              <label>Reservation date</label>
              <input type="date" placeholder="Add dates" />
            </div>
            <div className="input-group">
              <label>Reservation time</label>
              <input type="time" placeholder="Add times" />
            </div>
            <button id="find" className="find-room-button">
              <Link href="/find-room" className="find-room-link">Find Room</Link>
            </button>
          </div>
        </section>

        {/* Bagian Rules */}
        <section id="rules" className="section rules-section">
          <video
            src="/Neon Sci Fi Gaming YouTube Video Intro (3).mp4"
            className="rules-video"
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        </section>


        {/* Bagian Reviews */}
      <section id="ratingbox" className="rating">
        <div className="rating">
          <h2>Rating</h2>
          <div className="score">
            <span className="nilai-rating">4.5</span>
            <span className="stars">★</span>
            <span className="rating">Based on 150 reviews</span>
          </div>
        </div>
        <div className="review">
          <div className="profile-review">
            <img
              src="/image/review1.png"
              alt="foto"
              className="profile-review"
            />
            <span className="username-review">Fadilahrtk</span>
            <span className="stars-review">★★★★★</span>
          </div>
          <strong>Excellent booking experience! </strong>
          <p>
            This game house reservation platform is very easy to use and
            responsive. Fast booking process, intuitive interface, and a wide
            selection of games. The payment system is secure, and customer
            support is very helpful. I can immediately choose the game room
            according to my wishes without any hassle.
          </p>
        </div>

        <div className="review">
          <div className="profile-review">
            <img
              src="/image/review2.jpg"
              alt="foto"
              className="profile-review"
            />
            <span className="username-review">Xavierzh</span>
            <span className="stars-review">★★★★★</span>
          </div>
          <strong>Excellent Experience, Highly Recommend!</strong>
          <p>
            Highly recommend this place to anyone looking for a fun and
            hassle-free gaming experience! I had an amazing time at the gaming
            venue! The setup was flawless, with all the equipment working
            perfectly, and the atmosphere was vibrant and exciting.
          </p>
        </div>
      </section>

        {/* Bagian Footer */}
        <Footer/>
      </div>
      
  );
}