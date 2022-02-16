import React, { useContext, useState } from "react";
import StatsContext from "../context/StatsContext";
import WordChart from "./WordChart";
import longestWord from "../logic/longestWord";
import longestWords from "../logic/longestWords";
import shortestWord from "../logic/shortestWord";
import shortestWords from "../logic/shortestWords";
import totalLetters from "../logic/totalLetters";
import totalDigits from "../logic/totalDigits";
import textLength from "../logic/textLength";
import countWords from "../logic/countWords";

function Output() {
  const { stats, chart } = useContext(StatsContext);
  // const { chart, setChart } = useState(countWords(stats));

  return (
    <div className="output-area" id="output-area">
      <p className="section-title">Your text has:</p>
      <div className="results" id="results">
        <div className="general-stats" id="general-stats">
          <p>
            {" "}
            Total letters:<span>{totalLetters(stats)}</span>{" "}
          </p>
          <p>
            {" "}
            Total digits:<span>{totalDigits(stats)}</span>{" "}
          </p>
          <p>
            Total words: <span>{textLength(stats)}</span>
          </p>
          <p>
            The shortest words are <span>{shortestWord(stats)}</span> character
            long: {shortestWords(stats).join(", ")}
          </p>
          <p>
            The longest words are <span>{longestWord(stats)}</span> character
            long: {longestWords(stats).join(", ")}
          </p>{" "}
        </div>
        <WordChart />
      </div>

      <div className="control output-control">
        <button
          id="copy"
          className="submit"
          onClick={() => {
            navigator.clipboard.writeText(
              document.getElementById("general-stats").innerText +
                "\n\n" +
                document.getElementById("frequency-header").innerText +
                "\n\n" +
                document.getElementById("word-chart").innerText
            );
          }}
        >
          {" "}
          Copy{" "}
        </button>
      </div>
    </div>
  );
}

export default Output;
