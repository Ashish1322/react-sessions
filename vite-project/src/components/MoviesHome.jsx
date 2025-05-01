import Movie from "./Movie";
import "../App.css";
import useMovies from "../context/hooks/useMovies";
import useAuth from "../context/hooks/useAuth";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function MoviesHome() {
  const { movies } = useMovies();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       navigate("/about");
  //     }
  //   }, []);
  return (
    <div className="movies">
      {movies.map((element, index) => {
        return (
          <Link to={`/movie/${element["imdbID"]}/detail`}>
            <Movie
              poster={element["Poster"]}
              title={element["Title"]}
              year={element["Year"]}
            />
          </Link>
        );
      })}
    </div>
  );
}
