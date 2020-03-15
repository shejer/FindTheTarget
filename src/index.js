import React, { useState } from "react";
import ReactDOM from "react-dom";
//import "./test.js";

import "./styles.css";

import hiddenNumber from "./hiddenNumber";

function App() {
  const [state, setState] = useState({ target: "", host: "" });

  const onChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const result =
    state.target && state.host && hiddenNumber(state.target, state.host, true);
  return (
    <div>
      <h1>Find the target</h1>
      <div>
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
          <div className={`result ${result.success && "SUCCESS"}`}>
            <span>{result.success ? "SUCCESS" : "FAIL"}</span>
            {result.success && (
              <ol>
                {result.steps.map((step, index) => (
                  <li key={index}>
                    <pre>{step}</pre>
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
//
// console.clear();
//
// const tests = [
//   // ["2131", "39422"],
//   // ["419", "10540"],
//   // ["441", "10540"],
//   // ["441", "10934"],
//   // ["518", "10934"],
//   // ["325", "6811"],
//   // ["333", "10061"],
//   // ["596", "5433"],
//   // ["517", "11034"],
//   // ["5", "12"],
//   // ["52", "12"],
//   ["10", "100"],
//   ["100", "10"]
//   // ["12", "5"]
// ];
//
// tests.forEach(([target, host]) => {
//   let result = hiddenNumber(target, host);
//   console.log({ host, target, result });
// });
