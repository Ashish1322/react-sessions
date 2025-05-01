export default function Movie({ poster, title, year }) {
  return (
    <div className="movie">
      <img src={poster} />
      <h3>{title}</h3>
      <h2>Release Year : {year}</h2>
    </div>
  );
}
