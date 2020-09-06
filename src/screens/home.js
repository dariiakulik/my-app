import React from "react";
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
            </div>
            <div className="flex-center-img">
                <a href="https://github.com/dariiakulik">
                    <img
                        className="img"

                        src="github.png"
                    />
                </a>
                <a href="https://www.linkedin.com/in/dariia-kulikova-6b48ab172">
                    <img
                        className="img"
                        src="Linkedin.png"
                    />
                </a>
                <a href="https://resume.io/r/zeT2qZVHx">
                    <img
                        className="img"
                        src="cv.jpeg"
                    />
                </a>
            </div>
        </div>
    )
}
export default Home;