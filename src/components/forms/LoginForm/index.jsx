import React from "react";

// написать reducer функцию
function reducer(prevState, action) {
  // ваш код
  return prevState
}

export default function LoginForm() {
  // переписать на useReducer
  // const [login, setLogin] = useState("");
  // const [password, setPassword] = useState("");

  const handlerChange = (event) => {
    const {
      target: { value, name },
    } = event;
    // переписать на dispatch
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
      <input type="text" name="login" /* value={state.login} */ 
      onChange={handlerChange} />
      <input
        type="password"
        name="password"
        // value={state.password}
        onChange={handlerChange}
      />
    </div>
  );
}
