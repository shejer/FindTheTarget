import React, { useState } from "react";
import ReactDOM from "react-dom";
//import "./test.js";

import Result from "./Result";

import "./styles.css";

import hiddenNumber from "./hiddenNumber";

const TARGETS_TO_TEST = [
  "396",
  "12922",
  "693",
  "129225",
  "69",
  "22912",
  "39",
  "229125",
  "36",
  "495",
  "96",
  "594",
  "93"
];

function App() {
  const [state, setState] = useState({ target: "", host: "" });

  const onChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const results = [];
  let result;

  if (state.host) {
    result =
      state.target && hiddenNumber(state.target, state.host, false, true);

    TARGETS_TO_TEST.forEach(target => {
      results.push(hiddenNumber(target, state.host, false, true));
    });
  }

  return (
    <>
      <h1>Find The Target</h1>
      <div className="form">
        <label>
          <span>Target:</span>
          <input
            type="number"
            name="target"
            value={state.target}
            onChange={onChange}
            autoFocus={true}
          />
        </label>
        <label>
          <span>Host:</span>
          <input
            type="number"
            name="host"
            value={state.host}
            onChange={onChange}
          />
        </label>
        {result && (
          <Result key={result.target} result={result} showTarget={false} />
        )}
      </div>
      <div className="grid">
        {results.map(result => (
          <Result key={result.target} result={result} />
        ))}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
