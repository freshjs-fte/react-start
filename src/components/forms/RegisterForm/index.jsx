import React, { useState } from "react";

export default function RegisterForm() {
  const [state, setState] = useState({
    login: "",
    password: "",
    confPassword: "",
    email: "",
    birthdate: "",
    address: "",
  });

  const handlerChange = (event) => {
    const {
      target: { value, name },
    } = event;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(state);

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
