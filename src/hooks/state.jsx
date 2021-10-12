import React, { useEffect, useState } from "react";

export default function StateHook(props) {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
    // console.log();
  };

  // did mount
  useEffect(() => {
    alert("did mount");
  }, []);

  // did mount + will unmount
  useEffect(() => {
    alert("did mount");

    return () => {
      alert("will mount");
    };
  }, []);

  // did mount / did update - with dep-s
  useEffect(() => {
    document.title = `Вы нажали ${counter} раз`;
    alert("did mount / did update - with dep-s ");
  }, [counter]);

  // did mount / did update
  useEffect(() => {
    //effect
    console.log("callback");
    // alert("did mount / did update");
  });

  // (did mount / did update) + (Before Did Update / Will unmount)
  useEffect(() => {
    //effect
    console.log("callback");
    // alert("did mount / did update");

    return () => {
      //cleanup
      console.log("return func");
      // alert("Before Did Update / Will unmount");
    };
  });

  console.log("render");

  return (
    <div>
      Counter: {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
