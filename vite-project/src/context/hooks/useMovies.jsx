import { useContext } from "react";
import { MoviesContext } from "../MoviesContext";

export default function useMovies() {
  const values = useContext(MoviesContext);
  return values;
}
