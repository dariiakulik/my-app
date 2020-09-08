//Import the React and ReactDOM libraries
import React from "react";
import Header from "../components/header";
// Create a react component
const AboutMeScreen = () => {
  return (
    <div
      className="backgroundImage"
    >
      <div className="flex-button">

      </div>
      <div className="flex-center">
        <h1
          className="h1"
        >
          About me
      </h1>
        <img className="photo"
          src="ph.jpg"
          alt="myphoto"
        />

        <h2
          className="h2"

        >
          My name is Dariia Kulikova.{" "}
        </h2>
        <h3
          className="h3-me"
        >
          {" "}
        I'm 22 years old. I love programming, traveling, discovering the culture
        of different countries and nationalities.
        <br /> I used to live in 4 countries :{" "}
          <li>
            First one is Poland where I made my univercity degree in Univercity of
          Economis in Katowice. <br />
          My major is Informatics and Econometrics.
        </li>
          <li>
            Second country is USA. During my study in university I was on exchange
            programm 'Work and Travel USA'.
          <br /> In USA I spend 5 month in state Maine.{" "}
          </li>
          <li>
            The third counry is UAE where I was working in hospitality 9 month.
        </li>
          <li>The last one is Turkey where I was working in tourism 6 month.</li>
        </h3>
      </div>
    </div>
  );
};

export default AboutMeScreen;
