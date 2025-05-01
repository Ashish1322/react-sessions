import Contact from "./components/Contact";
import About from "./components/About";
import MovieCard from "./components/MovieCard";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {/* 
      <Contact />
      <About />
    
      <MovieCard
        img="https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_.jpg"
        title="Harry Potter"
        abcd="TEmp"
        abd2="dflkjdsf"
      />
      <MovieCard />
      */}
      <Counter />
    </div>
  );
}

function AppV2() {
  return (
    <div>
      <h1>I am app V2</h1>
    </div>
  );
}

function AppV3() {
  return (
    <div>
      <h1>I am app V3</h1>
    </div>
  );
}

// named export
export { App, AppV2 };
// default
export default AppV3;
