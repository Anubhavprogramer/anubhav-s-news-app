import React, { Component } from "react";

export default class Mode extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
    };
  }

  toggleMode = () => {
    // Use the callback function of setState to log the updated state
    this.setState((prevState) => {
      const newMode = prevState.mode === "light" ? "dark" : "light";
      console.log(newMode); // Log the updated mode
      return { mode: newMode };
    });
  };

  render() {
    return (
      <div className={`form-check form-switch`}>
        <input className="form-check-input" type="checkbox" id="switch" />
        <label className={`form-check-label text-${this.state.mode === "dark" ? "light" : "dark"} `} onClick={this.toggleMode} htmlFor="switch">
          {this.state.mode === "dark" ? "Light mode" : "Dark mode"}
        </label>
      </div>
    );
  }
}
