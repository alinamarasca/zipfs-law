import { React, useState, useContext } from "react";
import StatsContext from "../context/StatsContext";

function Input() {
  const [text, setText] = useState("here here we we we go go go go again");
  const { setStats } = useContext(StatsContext);

  return (
    <div className="input-area" id="input-area">
      <p className="section-title">Paste text:</p>
      <form id="text">
        <textarea
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
          name="input"
          id="input"
        ></textarea>
      </form>
      <div className="control input-control">
        <input
          onClick={e => {
            e.preventDefault();
            if (text.length !== 0) {
              setStats(text);
              // console.log(text.split(" "));
            }
          }}
          form="text"
          type="submit"
          id="submit"
          className="submit"
        />
      </div>
    </div>
  );
}

export default Input;
