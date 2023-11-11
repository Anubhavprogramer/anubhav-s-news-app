import React, { Component } from "react";
import logo from "./newslogo.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import Newsapi from "../assets/News API.png";
import chatgpt from "../assets/ChatGPT_logo.svg.png";


export default class home extends Component {
  render() {
    return (
      <div className="home_box">
        <div className="branding">
          <div className="colone">
            <span className="textone">
              NEWS
            </span>
              <br />
            <span className="texttwo">
              DOM
            </span>
          </div>
          <div className="coltwo">
              GEt the Lates and most accurate <br />
              NEWS
          </div>
        </div>
        <div className="socials">
          <ul>
            <li><a href="#"><img className="react" src={react} alt="" /></a></li>
            <li><a href="#"><img className="bootstrap" src={bootstrap} alt="" /></a></li>
            <li><a href="#"><img className="chatgpt" src={chatgpt} alt="" /></a></li>
            <li><a href="#"><img className="newsapi" src={Newsapi} alt="" /></a></li>
          </ul>
        </div>
      </div>
          );
  }
}
