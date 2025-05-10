import React, { useEffect } from "react";

export default function Temp() {
  useEffect(() => {
    console.log("Component Temp1 is Mounted");
    return () => {
      console.log("Component Temp1 is Unmounted");
    };
  }, []);
  return <div>Temp</div>;
}
