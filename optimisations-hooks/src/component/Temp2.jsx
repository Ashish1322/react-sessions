import React, { useEffect, useState } from "react";

export default function Temp2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component Temp2 is Mounted");
    return () => {
      console.log("Component Temp2 is Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count changed so component is getting updated");
    return () => {
      console.log("Removing Listners");
    };
  }, [count]);

  return (
    <div>
      Temp 2<h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increae</button>
    </div>
  );
}
