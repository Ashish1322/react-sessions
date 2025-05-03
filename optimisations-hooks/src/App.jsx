import "./App.css";
import { useState, useMemo, useCallback } from "react";
import Dummy from "./component/Dummy";

function App() {
  const [counter, setCounter] = useState(0);
  const [temp, setTemp] = useState(0);

  const doingSomeHeavyComputation = () => {
    console.log("Doing Heavy Calculatoin");
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += i;
    }
    return sum;
  };

  const res = useMemo(() => {
    let res = doingSomeHeavyComputation();
    return res;
  }, [temp]);

  const sayHI = useCallback(() => {
    return () => {
      alert("HI");
    };
  }, []);

  return (
    <div>
      <h1>Count : {counter}</h1>
      <p>Total Sum : {res}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setTemp(temp + 1)}>Increase Temp</button>
      <Dummy sayHI={sayHI} />
    </div>
  );
}

export default App;
