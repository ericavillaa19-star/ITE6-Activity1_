import React from "react";
// Importing the CSS file for styling ng landing page
import "./Activity1.css";
import { Link } from "react-router-dom";

// Main App component
function Activity1() {

  // Array of group members
  // Each member is an object na may name, birthday, gender, hobbies, at love language
  const members = [
    {
      name: "Alexander Evardone",
      birthday: "May 13, 2005",
      gender: "Male",
      hobbies: "Volleyball, Playing mobile games, Dancing, Basketball, Eating",
      loveLanguage: "Physical Touch & Word of affirmation"
    },
    {
      name: "Kris Erica Allego",
      birthday: "May 19, 2006",
      gender: "Female",
      hobbies: "Watching Vlogs, Sleeping",
      loveLanguage: "Quality Time"
    },
    {
      name: "April Mae Villegas",
      birthday: "April 20, 2006 ",
      gender: "Female",
      hobbies: "Reading, Music",
      loveLanguage: "Act of Service, Words of Affirmation, Physical Touch, Quality Time"
    },
    {
      name: "Johnzion Milca",
      birthday: "April 28, 2006",
      gender: "Transwoman",
      hobbies: "Dancing, Watching Anime",
      loveLanguage: "Physical touch & Word of affirmation"
    },
    {
      name: "Charisse Moriles",
      birthday: "March 25, 2006",
      gender: "Female",
      hobbies: "Dancing",
      loveLanguage: "Physical Touch"
    }
  ]

  // Return statement - ito yung HTML structure ng page
  return (
    <div className="activity1">
      <div className="container">

        <header>
          <h1>Goodness Gracious~</h1>
          <p className="subtitle">
            Five Personal Information of the Members
          </p>
        </header>

        <div className="row">
          {members.map((member, index) => (
            <div className="card" key={index}>
              <h2>{member.name}</h2>
              <p><span>Birthday:</span> {member.birthday}</p>
              <p><span>Gender:</span> {member.gender}</p>
              <p><span>Hobbies:</span> {member.hobbies}</p>
              <p><span>Love Language:</span> {member.loveLanguage}</p>
            </div>
          ))}
        </div>
        <div className="button-group">
          <Link to="/activity2">
            <button>Play Guess Game</button>
          </Link>

          <Link to="/">
            <button className="back-btn">⬅ Back to Home</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

// Exporting the Activity1 component para magamit sa index.js
export default Activity1;