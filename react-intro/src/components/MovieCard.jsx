export default function MovieCard({ img, title }) {
  return (
    <div
      style={{ backgroundColor: "black", borderRadius: "10px", width: "200px" }}
    >
      <img
        style={{
          backgroundColor: "black",
          borderRadius: "10px",
          width: "200px",
        }}
        src={img}
      />
      <h1 style={{ color: "white" }}>{title}</h1>
    </div>
  );
}
