import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutMeScreen from "./screens/aboutme";
import "./style.css"
import "./style.scss"
import Header from "./components/header.js"
import Contact from "./screens/contact";
import Portfolio from "./screens/potfolio";
import Home from "./screens/home";

// Create a react component
export const App = () => {

  return (

    <BrowserRouter>
      <div className="flex-button">
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/aboutme" component={AboutMeScreen} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </BrowserRouter>
  );
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
