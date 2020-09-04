//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
// Create a react component
const App = () => {


    return (
        <div style={{
            backgroundImage: `url("c.jpg")`,
            position: 'absolute',
            width: '100vw',
            height: '100vh'

        }}>

            <h1 style={{
                position: "relative",
                top: "70px",
                fontFamily: "Brush Script Std, cursive",
                textAlign: "center", color: "#7a00e0"
            }}>About me</h1>
            <img style={{
                width: "300px",
                margin: "150px ",
                position: "relative",
                borderRadius: "20px",
                left: "350px",
                top: "-100px"
            }}
                src="ph.jpg" />

            <h2 style={{
                position: "relative",
                top: "-270px",
                fontWeight: "900",
                fontFamily: "Brush Script Std, cursive",
                textAlign: "center", color: "#7a00e0"
            }}>My name is Dariia Kulikova. </h2>
            <h3 style={{
                position: "relative",
                top: "-290px",
                fontFamily: "Brush Script Std, cursive",
                fontWeight: "200",
                textAlign: "center", color: "#7a00e0"
            }}> I'm 22 years old.  I love programming, traveling, discovering the culture of different countries and nationalities.
      <br />  I used to live in 4 countries : <li>First one is Poland where I made my univercity degree in Univercity of Economis in Katowice. <br />My major is Informatics and Econometrics.</li>
                <li>Second country is USA. During my study in university I was on exchange programm 'Work and Travel USA'.<br /> In USA I spend 5 month in state Maine. </li>
                <li>The third counry is UAE where I was working in hospitality 9 month.</li>
                <li>The last one is Turkey where I was working in tourism 6 month.</li>
            </h3>
            <a href="" style={{
                textDecoration: "none",
                color: "white",
                position: "absolute",
                top: "0px",
                right: "320px",
                background: "blue",
                padding: "10px 15px",
                margin: "20px 20px",
                borderRadius: "20px",
                fontFamily: "Montserrat, sans-serif",
                textTransform: "uppercase",
                letterSpacing: "2px",
                backgroundImage: "linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%)",
                backgroundSize: "200% auto",
                boxShadow: "0 16px 32px 0 rgba(0,40,120,.35);",
                transition: ".5s",
                "&:hover": {
                    boxShadow: "0 0 0 0 rgba(0,40,120,0)",
                    backgroundPosition: "0 0"
                }
            }}>   Main
      </a>
            <a href="/portfolio" style={{
                textDecoration: "none",
                color: "white",
                position: "absolute",
                top: "0px",
                right: "150px",
                background: "blue",
                padding: "10px 15px",
                margin: "20px 20px",
                borderRadius: "20px",
                fontFamily: "Montserrat, sans-serif",
                textTransform: "uppercase",
                letterSpacing: "2px",
                backgroundImage: "linear-gradient(to right,#7a00e0 0%, #dea9f5 51%, #9EEFE1 100%)",
                backgroundSize: "200% auto",
                boxShadow: "0 16px 32px 0 rgba(0,40,120,.35);",
                transition: ".5s",
                "&:hover": {
                    boxShadow: "0 0 0 0 rgba(0,40,120,0)",
                    backgroundPosition: "0 0"
                }
            }}> Portfolio
      </a>


            <a href="" style={{
                textDecoration: "none",
                color: "white",
                position: "absolute",
                top: "0px",
                right: "10px",
                background: "blue",
                padding: "10px 15px",
                margin: "20px 20px",
                borderRadius: "20px",
                fontFamily: "Montserrat, sans-serif",
                textTransform: "uppercase",
                letterSpacing: "2px",
                backgroundImage: "linear-gradient(to right, #9EEFE1 0%, #dea9f5 51%, #7a00e0 100%)",
                backgroundSize: "200% auto",
                boxShadow: "0 16px 32px 0 rgba(0,40,120,.35);",
                transition: ".5s",
                "&:hover": {
                    boxShadow: "0 0 0 0 rgba(0,40,120,0)",
                    backgroundPosition: "0 0"
                }
            }}> Contact
      </a>


        </div >
    )
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
