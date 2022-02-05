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

import textLength from "./logic/textLength";
import totalLetters from "./logic/totalLetters";
import shortestWord from "./logic/shortestWord";
import shortestWords from "./logic/shortestWords";
import longestWord from "./logic/longestWord";
import longestWords from "./logic/longestWords";
import countWords from "./logic/countWords";

function App() {
  const [stats, setStats] = useState({
    totalLetters: 0,
    totalWords: 0,
    shortestWord: 0,
    shortestWords: [],
    longestWord: 0,
    longestWords: [],
    wordChart: []
  });

  const updateStats = text => {
    setStats({
      totalWords: textLength(text),
      totalLetters: totalLetters(text),
      shortestWord: shortestWord(text),
      shortestWords: shortestWords(text),
      longestWord: longestWord(text),
      longestWords: longestWords(text),
      wordChart: countWords(text)
    });
  };

  return (
    <>
      <StatsContext.Provider value={{ stats, updateStats }}>
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
    </>
  );
}

export default App;
