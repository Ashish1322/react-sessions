import { useState, useEffect } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const increaseCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  // Updating
  useEffect(() => {
    console.log("Counter 1 value", counter);
  }, [counter, counter2]);

  // Mounting
  useEffect(() => {
    console.log("Counter 2 value", counter2);
  }, []);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <h1>Counter2 : {counter2}</h1>
      <button onClick={increaseCounter}>Increase counter</button>
      <button onClick={increaseCounter2}>Increase counter 2</button>
    </div>
  );
}
