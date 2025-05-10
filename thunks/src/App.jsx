import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesByName } from "./redux/slices/moviesSlice.js";
import { Routes, Route } from "react-router-dom";

import React, { Suspense, useRef } from "react";
const About = React.lazy(() => import("./components/About.jsx"));
const Contact = React.lazy(() => import("./components/Contact.jsx"));

function App() {
  const { loading } = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  const inputRef = useRef();
  return (
    <div>
      <h1>Movies</h1>
      {loading ? <h1>Fetching Movies</h1> : <h1>Done</h1>}
      <button onClick={() => dispatch(fetchMoviesByName())}>
        Fetch Movies
      </button>
      <input ref={inputRef} style={{ display: "none" }} type="file" />
      <button
        onClick={() => {
          inputRef.current.click();
        }}
      >
        Chooise File
      </button>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
