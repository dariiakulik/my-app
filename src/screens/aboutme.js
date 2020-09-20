//Import the React and ReactDOM libraries
import React from "react";
import about from "./aboutme.json"



// Create a react component
class AboutMeScreen extends React.Component {
  state = { className: "" };



  handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!this.state.className) {
        this.setState({ className: "backgroundImage" });
      }
    } else {
      if (this.state.className) {
        this.setState({ className: "backgroundImageDifferent" });
      }
    }

  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <div className="backgroundImage">
        <div className={this.state.className} >



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
            </h3>

          </div>
        </div>
      </div>

    )
  }
}



export default AboutMeScreen;