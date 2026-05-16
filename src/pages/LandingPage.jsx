import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingpage">

      {/* HEADER */}
      <div className="landingpage__header">
        <p className="landingpage__subject">
        <span>Application Development & Technologies</span>
        </p>

        <h1 className="landingpage__title">Major Course Output</h1>

        <p className="landingpage__subtitle">
          Compilation of all activities
        </p>
      </div>

      {/* CARDS */}
      <div className="landingpage__cards">
        <Link to="/activity1" className="landingpage__card">Activity 1</Link>
        <Link to="/activity2" className="landingpage__card">Activity 2</Link>
        <Link to="/activity3" className="landingpage__card">Activity 3</Link>
        <Link to="/activity4" className="landingpage__card">Activity 4</Link>
      </div>

            {/* FOOTER */}
        <div className="landingpage__footer">
        
        <div className="landingpage__footer-center">
            <h3>Instructor:</h3>
            <p>Mr. Charl Alvarado</p>
        </div>

        <div className="landingpage__footer-center">
            <h3>Members:</h3>
            <ul className="landingpage__members-list">
            <li>Kris Erica Allego</li>
            <li>Alexander Evardone</li>
            <li>Johnzion Milca</li>
            <li>Charisse Morilles</li>
            <li>April Villegas</li>
            </ul>
        </div>

        </div>

    </div>
  );
};

export default LandingPage;