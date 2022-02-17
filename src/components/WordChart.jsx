import React, { useContext } from "react";
import StatsContext from "../context/StatsContext";
import {
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaSortAmountDownAlt,
  FaSortAmountDown
} from "react-icons/fa";
import countWords from "../logic/countWords";

function WordChart() {
  const { stats, chart, setChart } = useContext(StatsContext);

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
    let sorted = [];
    if (sortBy === "low-high") {
      sorted = lowToHighOccurrence(countWords(stats));
    }
    if (sortBy === "high-low") {
      sorted = highToLowOccurrence(countWords(stats));
    }
    if (sortBy === "a-z") {
      sorted = alphabeticalOrder(countWords(stats));
    }
    if (sortBy === "z-a") {
      sorted = reversedAlphabeticalOrder(countWords(stats));
    }
    setChart(sorted);
  };

  return (
    <div className="word-frequency">
      <h3 className="sub-header" id="frequency-header">
        Words frequency:
      </h3>
      <div
        className="sorting-options"
        onClick={e => {
          sortResults(e);
        }}
      >
        <button className="sort-btn" value="low-high">
          <FaSortAmountDownAlt /> frequency
        </button>
        <button className="sort-btn" value="high-low">
          <FaSortAmountDown /> frequency
        </button>
        <button className="sort-btn" value="a-z">
          <FaSortAlphaDown /> alphabetical
        </button>
        <button className="sort-btn" value="z-a">
          <FaSortAlphaDownAlt /> alphabetical
        </button>
      </div>
      <div className="word-chart" id="word-chart">
        {chart
          ? chart.map(w => (
              <p key={w.word}>
                {w.word}: <span>{w.occurrences}</span>
              </p>
            ))
          : null}
      </div>
    </div>
  );
}

export default WordChart;
