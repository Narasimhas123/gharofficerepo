import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Body from "/Body"
function Movie() {
  const [data, setData] = useState([
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }
  ]);
  let navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        boxShadow: "1px 1px 1px 1px solid black"
      }}
    >
      {data.map((movie) => (
        <div>
          <div
            style={{
              backgroundColor: "white",
              boxShadow: "1px 1px 1px 1px gray",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "18px",
              justifyContent: "center",
              height: "600px",
              width: "300px",
              gap: "8px"
            }}
          >
            <div style={{ width: "80%" }}>
              <h3>{movie.Title}</h3>
            </div>

            <img
              width="250px"
              height="80%"
              src={movie.Poster}
              alt="not found"
            />
            <button
              onClick={() => navigate(`/Body/${movie}`)}
              style={{
                backgroundColor: "green",
                height: "50px",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer"
              }}
            >
              BOOKING
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movie;
