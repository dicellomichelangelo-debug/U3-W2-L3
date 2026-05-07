import { Link } from "react-router-dom";
const SingleFilm = function (props) {
  const scroll = (direction) => {
    if (props.carouselRef.current) {
      const scrollAmount = 600;
      props.carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <button
        onClick={() => scroll("left")}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 10,
          background: "rgba(0,0,0,0.4)",
          border: "none",
          color: "white",
          width: "40px",
          maxHeight: "100%",
        }}
        className="h-100"
      >
        &#8249;
      </button>

      <div
        // eslint-disable-next-line react-hooks/refs
        ref={props.carouselRef}
        className="d-flex flex-nowrap overflow-hidden pb-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* eslint-disable-next-line react-hooks/refs */}
        {props.movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="col-6-col-md-4 col-lg-2 me-2"
            style={{
              maxWidth: "200px",
              maxHeight: "250px",
              flex: "0 0 auto",
            }}
          >
            <Link to={`/movie-details/${movie.imdbID}`}>
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={movie.Title}
                className="img-fluid rounded shadow"
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 10,
          background: "rgba(0,0,0,0.4)",
          border: "none",
          color: "white",
          width: "40px",
          maxHeight: "100%",
        }}
        className="h-100"
      >
        &#8250;
      </button>
    </>
  );
};
export default SingleFilm;
