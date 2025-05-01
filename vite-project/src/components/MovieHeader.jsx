import { useState } from "react";
import useMovies from "../context/hooks/useMovies";
import { Link } from "react-router-dom";
import useAuth from "../context/hooks/useAuth";
("react-router-dom");
export default function MovieHeader() {
  const [movieName, setMovieName] = useState("");
  const { fetchMovies } = useMovies();
  const { isLoggedIn, logout, login } = useAuth();

  return (
    <div
      className="header"
      style={{
        backgroundColor: "black",
        padding: "10px",
        color: "white",
        margin: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          onChange={(e) => setMovieName(e.currentTarget.value)}
          type="text"
          value={movieName}
        />
        <button onClick={() => fetchMovies(movieName)}>Search</button>
      </div>
      <div style={{ display: "flex", gap: "10px", color: "white" }}>
        <Link style={{ color: "white" }} to="/">
          Home
        </Link>
        <Link style={{ color: "white" }} to="/about">
          About
        </Link>
        <Link style={{ color: "white" }} to="/contact">
          Contact
        </Link>
      </div>

      <div>
        {isLoggedIn == true ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </div>
  );
}
