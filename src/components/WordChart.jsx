/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import StatsContext from "../context/StatsContext";
import countWords from "../logic/countWords";
import textToArray from "../logic/textToArray";

function WordChart() {
  const { stats } = useContext(StatsContext);
  const chart = stats.wordChart;

  return (
    <div className="one-word">
      {stats.wordChart.map(item => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default WordChart;
