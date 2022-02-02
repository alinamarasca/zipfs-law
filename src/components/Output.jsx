import React, { useContext } from "react";
import StatsContext from "../context/StatsContext";
import WordChart from "./WordChart";

function Output() {
  const { stats } = useContext(StatsContext);

  return (
    <div className="output-area">
      <p className="section-title">Your text has:</p>
      <div className="results" id="results">
        <p>
          <span>{stats.totalWords}</span> words.
        </p>
        <p>
          <span>{stats.totalLetters}</span> letters.
        </p>
        <p>
          <span>{stats.totalDigits}</span> digits.
        </p>
        <p>
          The shortest word is <span>{stats.shortestWord}</span> character long:{" "}
          {stats.shortestWords.join(", ")}
        </p>
        <p>
          The longest word is <span>{stats.longestWord}</span> character long:{" "}
          {stats.longestWords.join(", ")}.
        </p>
        <WordChart />
      </div>
      <button
        onClick={e => {
          console.log("o copy");
        }}
        id="copy"
      >
        {" "}
        Copy{" "}
      </button>
    </div>
  );
}

export default Output;
