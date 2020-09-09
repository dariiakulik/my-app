import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div
            className="backgroundImage"
        >
            <div className="flex-center">
                <h1
                    className="h1"
                >
                    Hello, I'm Dariia Kulikova
        </h1>
                <h3
                    className="h3"
                >
                    developer
        </h3>
                <div id="container">
                    <Link
                        to="/portfolio"
                    >
                        {" "}

                        <button class="learn-more">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">Learn More</span>



                        </button>
                    </Link>
                </div>
            </div>

            <div className="flex-center-img">
                <a href="https://github.com/dariiakulik">
                    <img
                        className="img"
                        alt="github"
                        src="github.png"
                    />
                </a>
                <a href="https://www.linkedin.com/in/dariia-kulikova-6b48ab172">
                    <img
                        className="img"
                        alt="linkedin"
                        src="Linkedin.png"
                    />
                </a>
                <a href="https://resume.io/r/zeT2qZVHx">
                    <img
                        className="img"
                        alt="cv"
                        src="cv.jpeg"
                    />
                </a>
            </div>
        </div>
    )
}
export default Home;