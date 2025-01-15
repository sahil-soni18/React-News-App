import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={<News setProgress={setProgress} country="in" category="General" />}
          />
          <Route
            path="/:category"
            element={<News setProgress={setProgress} country="in" />}
          />
          {/* Additional routes for categories can be added here */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
