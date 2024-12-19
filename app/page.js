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
        <section id="review" className="section review-section">
          <div className="rating-box">
            <h2>Rating</h2>
            <div className="rating-summary">
              <span className="rating-value">4.5</span>
              <span className="rating-stars">★★★★★</span>
              <span className="rating-count">Based on 150 reviews</span>
            </div>
          </div>
          <div className="review-box">
            <p>
              <strong>Fadilahrtk</strong> - Excellent booking experience! The game
              house reservation platform is easy to use and secure.
            </p>
            <p>
              <strong>Xaviarth</strong> - Highly recommend this gaming venue for
              anyone seeking fun!
            </p>
          </div>
        </section>

        {/* Bagian Footer */}
        <Footer/>
      </div>
      
  );
}