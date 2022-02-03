import React, { useContext } from "react";
import StatsContext from "../context/StatsContext";

function WordChart() {
  const { stats } = useContext(StatsContext);
  const chart = stats.wordChart;

  return (
    <div className="one-word">
      {chart.map(v => (
        <p key={v.word}>
          {v.word}: {v.occurrences}
        </p>
      ))}
    </div>
  );
}

export default WordChart;
