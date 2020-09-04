// Import the React and ReactDOM libraries
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
        top: "270px",
        fontFamily: "Brush Script Std, cursive",
        textAlign: "center", color: "#7a00e0"
      }}>Hello, I'm Dariia Kulikova</h1>
      <h3 style={{
        position: "relative",
        top: "250px",
        fontFamily: "Brush Script Std, cursive",
        textAlign: "center", color: "#7a00e0"
      }}>developer</h3>
      <a href="https://github.com/dariiakulik">
        <img style={{
          width: "30px",
          margin: "30px auto",
          position: "relative",
          top: "220px",
          left: "570px",
        }}
          src="github.png" />
      </a>
      <a href="https://www.linkedin.com/in/dariia-kulikova-6b48ab172">
        <img style={{
          width: "30px",
          margin: "30px auto",
          position: "relative",
          top: "220px",
          left: "590px",
        }}
          src="Linkedin.png" />
      </a>
      <a href="https://resume.io/r/zeT2qZVHx">
        <img style={{
          width: "30px",
          margin: "30px auto",
          position: "relative",
          top: "220px",
          left: "610px",
        }}
          src="cv.jpeg" />
      </a>
      <a href="/#portfolio" style={{
        textDecoration: "none",
        color: "white",
        position: "relative",
        top: "-200px",
        left: "600px",
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
      }}
        hover={{
          backgroundPosition: "right center"
        }}
      > Portfolio
      </a>
      <a href="/aboutme" style={{
        textDecoration: "none",
        color: "white",
        position: "relative",
        top: "-200px",
        left: "600px",
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
        hover: {
          backgroundPosition: "right center"
        }
      }}> About me
      </a>


      <a href="/#contact" style={{
        textDecoration: "none",
        color: "white",
        position: "relative",
        top: "-200px",
        left: "600px",
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
        hover: {
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
