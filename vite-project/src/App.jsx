import MovieHeader from "./components/MovieHeader";
import MoviesHome from "./components/MoviesHome";
import About from "./components/About";
import Contact from "./components/Contact";
import MoviesContextProvider from "./context/providers/MoviesContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/providers/AuthContextProvider";
import ProtectedRouteWrapper from "./auth/ProtectedRouteWrapper";
import MovieDetail from "./components/MovieDetail";
function App() {
  return (
    <BrowserRouter>
      <MoviesContextProvider>
        <AuthContextProvider>
          <MovieHeader />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRouteWrapper>
                  <MoviesHome />
                </ProtectedRouteWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRouteWrapper>
                  <About />
                </ProtectedRouteWrapper>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/movie/:movieId/detail" element={<MovieDetail />} />
          </Routes>
        </AuthContextProvider>
      </MoviesContextProvider>
    </BrowserRouter>
  );
}

export default App;
