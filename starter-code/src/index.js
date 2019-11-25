import React from "react";
import ReactDom from "react-dom";
const logo = "./images/ironhack-logo.svg";
const menuTop = "./images/menu-top.svg";
const icon1 = "./images/icon1.png";
const icon2 = "./images/icon2.png";
const icon3 = "./images/icon3.png";
const icon4 = "./images/icon4.png";

import "./style.css";

const menu = (
  <div className="Nav">
    <img src={logo} alt="" />
    <img src={menuTop} alt="" />
  </div>
);

const firstSection = (
  <div>
    <img src="" alt="" srcset="" />
    <h1>Say Hello To ReactJs</h1>
    <p>
      You will learn a Frontend from scratch to become an ninka Developer
    </p>
    <button>Awesome!</button>
  </div>
);

const features = (
  <div className="features">
    <div>
      <img className="featureImg" src={icon1} alt="icon1" srcset="" />
      <h3>Declarative</h3>
      <p>React makes painless to create interactive websites</p>
    </div>
    <div>
      <img className="featureImg" src={icon2} alt="" srcset="" />
      <h3>Components</h3>
      <p>Build encapsulated components that manage their style</p>
    </div>
    <div>
      <img className="featureImg" src={icon3} alt="" srcset="" />
      <h3>Single-Way</h3>
      <p>A set of immutable values are passed to the components</p>
    </div>
    <div>
      <img className="featureImg" src={icon4} alt="" srcset="" />
      <h3>JSX</h3>
      <p>Statycally-typed designed to run on modern servers</p>
    </div>
  </div>
);

ReactDom.render(firstSection, document.getElementById("header"));
ReactDom.render(menu, document.getElementById("navbar"));
ReactDom.render(features, document.getElementById("features"));
