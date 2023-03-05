import React, { useReducer } from "react";
import "./styles.css";

const App = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <p>{state}</p>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec </button>
      </div>
    </>
  );
};

export default App;
