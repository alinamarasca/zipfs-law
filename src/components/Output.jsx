import React, { useContext } from "react";
import StatsContext from "../context/StatsContext";
import WordChart from "./WordChart";
// import { CopyToClipboard } from "react-copy-to-clipboard";

function Output() {
  const { stats } = useContext(StatsContext);

  return (
    <div className="output-area">
      <p className="section-title">Your text has:</p>
      <div className="results" id="results">
        <p>
          Total letters:<span>{stats.totalLetters}</span>
        </p>
        <p>
          Total digits:<span>{stats.totalDigits}</span>
        </p>
        <p>
          Total words: <span>{stats.totalWords}</span>
        </p>
        <p>
          The shortest words are <span>{stats.shortestWord}</span> character
          long: {stats.shortestWords.join(", ")}
        </p>
        <p>
          The longest words are <span>{stats.longestWord}</span> character long:{" "}
          {stats.longestWords.join(", ")}
        </p>
        <WordChart />
      </div>

      <div className="control output-control">
        <button id="copy" className="submit">
          {" "}
          Copy{" "}
        </button>
      </div>
    </div>
  );
}

export default Output;
