import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (

        <div>
            <Link to
                href="/portfolio"
                className="button-portfolio"
            >
                {" "}
          Portfolio
        </Link>
            <Link
                to="/aboutme"
                className="button-aboutme"
            >
                {" "}
          About me
        </Link>

            <Link
                to="/contact"
                className="button-contact"
            >
                {" "}
          Contact
        </Link>
        </div>



    )
}

export default Header;