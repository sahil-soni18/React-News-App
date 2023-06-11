// import logo from './logo.svg';
import "./App.css";

// The Text Editor App was developed using React Function Component, Now we are going to create the news app with the help of react class component.

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {

  apikey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
          {/* Here we use unique key props because our news component did not get re render after changing the category because it is already available on the page that's why react did not update it. Now to force re render we use key props. */}
          <Router>
          <NavBar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="General" country="in" category="General" />} />
            <Route path="/Science" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="Science" country="in" category="Science" />} />
            <Route path="/Technology" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="Technology" country="in" category="Technology" />} />
            <Route path="/Business" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="Business" country="in" category="Business" />} />
            <Route path="/Sports" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="Sports" country="in" category="Sports" />} />
            <Route path="/Health" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="Health" country="in" category="Health" />} />
            <Route path="/Entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="Entertainment" country="in" category="Entertainment" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
