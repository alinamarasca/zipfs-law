import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import StatsContext from "./context/StatsContext";

import textLength from "./logic/textLength";
import totalLetters from "./logic/totalLetters";
import totalDigits from "./logic/totalDigits";
import shortestWord from "./logic/shortestWord";
import shortestWords from "./logic/shortestWords";
import longestWord from "./logic/longestWord";
import longestWords from "./logic/longestWords";
import countWords from "./logic/countWords";

function App() {
  const [stats, setStats] = useState({
    totalLetters: 0,
    totalWords: 0,
    totalDigits: 0,
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
      totalDigits: totalDigits(text),
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
                path="/"
                element={
                  <>
                    <Input />
                    <Output />
                    {window.location.pathname !== "/about" && <AboutIconLink />}
                  </>
                }
              ></Route>
              <Route path="/about" element={<AboutPage />}></Route>
            </Routes>
          </Router>
        </div>
      </StatsContext.Provider>
    </>
  );
}

export default App;
