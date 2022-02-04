import React, { useContext } from "react";
import StatsContext from "../context/StatsContext";
// import sortResults from "../logic/sortingOptions";

function WordChart() {
  const { stats } = useContext(StatsContext);
  let chart = stats.wordChart;

  const highToLowOccurrence = arr => {
    const sorted = arr.sort((a, b) => (a.occurrences < b.occurrences ? 1 : -1));
    return sorted;
  };

  const lowToHighOccurrence = arr => {
    const sorted = arr.sort((a, b) => (a.occurrences > b.occurrences ? 1 : -1));
    return sorted;
  };

  const alphabeticalOrder = arr => {
    const sorted = arr.sort((a, b) => (a.word > b.word ? 1 : -1));
    return sorted;
  };

  const reversedAlphabeticalOrder = arr => {
    const sorted = arr.sort((a, b) => (a.word < b.word ? 1 : -1));
    return sorted;
  };

  const sortResults = e => {
    const sortBy = e.target.value;
    console.log(sortBy);

    if (sortBy === "low-high") {
      chart = lowToHighOccurrence(chart);
    }
    if (sortBy === "high-low") {
      chart = highToLowOccurrence(chart);
    }
    if (sortBy === "a-z") {
      chart = alphabeticalOrder(chart);
    }
    if (sortBy === "z-a") {
      chart = reversedAlphabeticalOrder(chart);
    }
    console.log(chart);
    return chart;
  };

  return (
    <div className="one-word">
      <h3>Words frequency:</h3>
      <div
        className="sorting-options"
        onClick={e => {
          sortResults(e);
        }}
      >
        <button value="low-high">low high</button>
        <button value="high-low">high low</button>
        <button value="a-z">a-z</button>
        <button value="z-a">z-a</button>
      </div>
      <div className="calc">
        {chart.map(w => (
          <p key={w.word}>
            {w.word}: <span>{w.occurrences}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default WordChart;
