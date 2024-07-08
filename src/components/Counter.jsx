"use client";

import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>{counter}</h3>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-primary"
      >
        +
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className="btn btn-primary"
      >
        -
      </button>
    </div>
  );
}

export default Counter;
