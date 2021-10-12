import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";

export default function RegisterForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlerChange = (event) => {
    const {
      target: { value, name },
    } = event;

    dispatch({
      name: name,
      value: value,
    });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
    >
      <input
        type="text"
        name="login"
        value={state.login}
        onChange={handlerChange}
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handlerChange}
      />
      <input
        type="password"
        name="confPassword"
        value={state.confPassword}
        onChange={handlerChange}
      />
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={handlerChange}
      />
      <input
        type="date"
        name="birthdate"
        value={state.birthdate}
        onChange={handlerChange}
      />
      <input
        type="text"
        name="address"
        value={state.address}
        onChange={handlerChange}
      />
    </div>
  );
}
