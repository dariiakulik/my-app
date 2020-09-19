//Import the React and ReactDOM libraries
import React, { useState } from "react";
import about from "./aboutme.json"



// Create a react component
const AboutMeScreen = () => {

  const [setActive] = useState()

  const OnScroll = e => {
    setActive(e)
  }
  /*const block = document.getElementById('block');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio < 0.5) { return; }
      block.className = [entry.target.className];
    });
  }, {
    threshold: [0.5, 0.5]
  });

 <section class="blue"></section>
        <section class="green"></section>
        <h3
          className="h3-me"
        >
          <section class="red" >  </section>
        </h3>
  Array.from(document.getElementsByTagName('section')).forEach(section => observer.observe(section))

*/


  return (
    <div className="scrollbar" OnScroll={OnScroll} style={{ overflowY: "scroll" }}>
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
            {about.Name}
          </h2>
          <h3
            className="h3-me"
          >
            {about.aboutme}<br />
            {about.aboutme2}<br />
            {about.university}<br />


            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            {about.langueges} </h3>
        </div>
      </div>
    </div >
  )

}



export default AboutMeScreen;
