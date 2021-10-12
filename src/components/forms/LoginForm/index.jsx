import React, { useState } from "react";

export default function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handlerChange = (event) => {
    const {
      target: { value, name },
    } = event;
    switch (name) {
      case "login": {
        setLogin(value);
        break;
      }
      case "password": {
        setPassword(value);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div>
      <input type="text" name="login" value={login} onChange={handlerChange} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlerChange}
      />
    </div>
  );
}
