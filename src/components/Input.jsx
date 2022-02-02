import { React, useState, useContext } from "react";
import StatsContext from "../context/StatsContext";

function Input() {
  const [text, setText] = useState("");
  const { updateStats } = useContext(StatsContext);

  return (
    <div className="input-area" id="input-area">
      <p className="section-title">Insert your text here:</p>
      <form id="text">
        <textarea
          onChange={e => setText(e.currentTarget.value)}
          name="input"
          id="input"
        ></textarea>
      </form>
      <input
        onClick={e => {
          e.preventDefault();
          if (text.length !== 0) {
            updateStats(text);
          }
        }}
        form="text"
        type="submit"
        id="submit"
      />
    </div>
  );
}

export default Input;
