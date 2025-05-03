import React, { useEffect } from "react";

function Dummy({ sayHI }) {
  useEffect(() => {
    console.log("Dummy component is getting Update");
  });
  return (
    <div>
      Dummy <button onClick={sayHI}>SAy HI </button>
    </div>
  );
}

export default React.memo(Dummy);
