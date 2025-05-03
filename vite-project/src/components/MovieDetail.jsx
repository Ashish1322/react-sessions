import { useParams } from "react-router-dom";
export default function MovieDetail() {
  const { movieId } = useParams();
  
  return (
    <div>
      <h1>Movie : {movieId}</h1>
    </div>
  );
}
