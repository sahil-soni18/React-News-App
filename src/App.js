import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const apikey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="General"
                country="in"
                category="General"
              />
            }
          />
          <Route
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Science"
                country="in"
                category="Science"
              />
            }
          />
          <Route
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Technology"
                country="in"
                category="Technology"
              />
            }
          />
          <Route
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Business"
                country="in"
                category="Business"
              />
            }
          />
          <Route
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Sports"
                country="in"
                category="Sports"
              />
            }
          />
          <Route
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Health"
                country="in"
                category="Health"
              />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Entertainment"
                country="in"
                category="Entertainment"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
