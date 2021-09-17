import React from "react";

const obj = {
  test: {
    deepProp: "test value",
  },
};

const value = obj.test && obj.test.deepProp;

const styles = { fontSize: "24px" };

function Main() {
  return (
    <div title="Test text" className={value} style={styles}>
      Hello From REACT {value}
    </div>
  );
}

export default Main;
