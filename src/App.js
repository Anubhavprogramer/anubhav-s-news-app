import "./App.css";

import React, { Component, } from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
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

  pagesize = 5;
  country = "in";
  apikey = process.env.REACT_APP_API_KEY;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar  />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Business"element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pagesize}
                  apikey={this.apikey}
                  country={this.country}
                  category={"business"}
                />
              }
            ></Route>
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pagesize}
                  apikey={this.apikey}
                  country={this.country}
                  category={"entertainment"}
                />
              }
            ></Route>
            <Route
              exact
              path="/General"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pagesize}
                  apikey={this.apikey}
                  country={this.country}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/Health"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pagesize}
                  apikey={this.apikey}
                  country={this.country}
                  category={"health"}
                />
              }
            ></Route>
            <Route
              exact
              path="/Science"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pagesize}
                  apikey={this.apikey}
                  country={this.country}
                  category={"science"}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pagesize}
                  apikey={this.apikey}
                  country={this.country}
                  category={"sports"}
                />
              }
            ></Route>
            <Route
              exact
              path="/Technology"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pagesize}
                  apikey={this.apikey}
                  country={this.country}
                  category={"technology"}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
