import React, { useContext, useState } from "react";
import StatsContext from "../context/StatsContext";
import {
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaSortAmountDownAlt,
  FaSortAmountDown
} from "react-icons/fa";

function WordChart() {
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

  const { stats } = useContext(StatsContext);
  let chart = stats.wordChart;
  const [data, setData] = useState([...chart]);

  const sortResults = e => {
    const sortBy = e.target.value;
    let sorted = [];

    if (sortBy === "low-high") {
      sorted = lowToHighOccurrence(chart);
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
    setData(sorted);
  };

  return (
    <div className="one-word">
      <h3 className="sub-header">Words frequency:</h3>
      <div
        className="sorting-options"
        onClick={e => {
          sortResults(e);
        }}
      >
        <button className="sort" value="low-high">
          <FaSortAmountDownAlt /> frequency
        </button>
        <button className="sort" value="high-low">
          <FaSortAmountDown /> frequency
        </button>
        <button className="sort" value="a-z">
          <FaSortAlphaDown /> alphabetical
        </button>
        <button className="sort" value="z-a">
          <FaSortAlphaDownAlt /> alphabetical
        </button>
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
