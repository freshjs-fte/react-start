export const initialState = {
  login: "",
  password: "",
  confPassword: "",
  email: "",
  birthdate: "",
  address: "",
};

function reducer(prevState, action) {
  const { name, value } = action;

  if (name !== "" || name !== undefined) {
      
    const newState = {
      ...prevState,
      [name]: value,
    };
    console.log(newState);

    return newState;
  }

  return prevState;
}

export default reducer;
