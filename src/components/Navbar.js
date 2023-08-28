import React, { Component } from "react";
import PropTypes from 'prop-types'
import Mode from "./Mode";
export default class Navbar extends Component {
  static defaultProps ={
    mode:"light" 
  }

  static propTypes = {
    mode: PropTypes.string,
  }
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-black navbar-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item active">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/Business"
                  >
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/Entertainment"
                  >
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/General"
                  >
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/Health"
                  >
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/Science"
                  >
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/Sports"
                  >
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="/Technology"
                  >
                    Technology
                  </a>
                </li>
              </ul>
            </div>
            <Mode/>
          </div>
        </nav>
      </div>
    );
  }
}