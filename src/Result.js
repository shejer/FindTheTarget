import React, { useState } from "react";

export default function Result({ result, showTarget = true }) {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className={result.success ? "SUCCESS" : ""}>
      <span onClick={() => setVisible(!isVisible)} className="base-result">
        {showTarget ? result.target : result.success ? "SUCCESS" : "FAIL"}
      </span>
      {isVisible && result.success && (
        <ol>
          {result.steps.map((step, index) => (
            <li key={index}>
              <pre>{step}</pre>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
