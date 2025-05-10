import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Temp from "./Temp";
import Temp2 from "./Temp2";
export default function Destory() {
  return (
    <div>
      <Link to="/">Temp1</Link>
      <Link to="/temp2">Temp2</Link>
      <Routes>
        <Route path="/" element={<Temp />} />
        <Route path="/temp2" element={<Temp2 />} />
      </Routes>
    </div>
  );
}
