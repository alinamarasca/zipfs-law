import React, { useContext } from "react";
import StatsContext from "../context/StatsContext";

function WordChart() {
  const { stats } = useContext(StatsContext);
  const chart = stats.wordChart;

  return (
    <div className="one-word">
      <h3>Words frequency:</h3>
      {chart.map(w => (
        <p key={w.word}>
          {w.word}: <span>{w.occurrences}</span>
        </p>
      ))}
    </div>
  );
}

export default WordChart;
