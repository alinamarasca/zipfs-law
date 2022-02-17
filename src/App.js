import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import StatsContext from "./context/StatsContext";

function App() {
  const [stats, setStats] = useState("");
  const [chart, setChart] = useState("");

  return (
    <>
      <React.StrictMode>
        <StatsContext.Provider value={{ stats, setStats, chart, setChart }}>
          <div className="wrapper">
            <Header />
            <Router>
              <Routes>
                <Route
                  exact
                  path="/zipfs-law/index"
                  element={
                    <>
                      <Input />
                      <Output />
                      {window.location.pathname !== "/zipfs-law/about" && (
                        <AboutIconLink />
                      )}
                    </>
                  }
                ></Route>
                <Route path="/zipfs-law/about" element={<AboutPage />}></Route>
                <Route
                  path="/zipfs-law"
                  element={<Navigate to="/zipfs-law/index" />}
                />
              </Routes>
            </Router>
          </div>
        </StatsContext.Provider>
      </React.StrictMode>
    </>
  );
}

export default App;
