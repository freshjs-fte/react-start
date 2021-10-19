import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "increment": {
      return { counter: state.counter + 1 };
    }
    case "decrement": {
      return { counter: state.counter - 1 };
    }
    default: {
      return state;
    }
  }
};

export default function CounterFunc(props) {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <>
      <div>{state.counter}</div>

      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
    </>
  );
}
