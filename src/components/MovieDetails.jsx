import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=b35f136b&i=${movieId}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWY5ZTA1ZDU0YTMxNTAwMTU1OGIxYTgiLCJpYXQiOjE3NzgxMTUyNTQsImV4cCI6MTc3OTMyNDg1NH0.O1iEDfe9RL7EaH-OF9wKd0BN4lf2LPGFcfIgTOEC4jI",
      },
    })
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [movieId]);

  if (!movie) return <p className="text-light">Caricamento...</p>;

  return (
    <div className="container text-light mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h1>
            {movie.Title} ({movie.Year})
          </h1>
          <p>{movie.Plot}</p>
          <hr />
          <h3>Commenti:</h3>
          <ul>
            {comments.map((c) => (
              <li key={c._id}>
                {c.comment} - ⭐ {c.rate}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
