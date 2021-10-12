import React, { useState, useEffect } from "react";

export default function CounterFunc(props) {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [error, setError] = useState(0);

  const handleStepChange = ({ target: { value } }) => {
    if (Number(value) > 0 && Number(value) < 10) {
      setStep(Number(value));
    }
    else {
      setError('Больше или меньше разрешенного значения');
    }
  };

  const increment = (count, step, setCount) => {
    setCount(count + step);
    // console.log(count);
  };

  // WIP
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
    }, 1000);

    return () => {
      console.log(interval);
      clearInterval(interval);
      console.log("clear interval");
    };
  }, []);

  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          increment(count, step, setCount);
        }}
      >
        +{step}
      </button>
      <div>{error}</div>
      <input type="range" value={step} onChange={handleStepChange} />
      <input type="number" value={step} onChange={handleStepChange} />
    </>
  );
}
