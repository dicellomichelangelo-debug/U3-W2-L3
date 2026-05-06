import { Component, createRef } from "react";

class CarouselC extends Component {
  state = {
    movies: [],
    isLoading: true,
    error: null,
  };

  carouselRef = createRef();

  componentDidMount() {
    fetch(
      "https://www.omdbapi.com/?apikey=b35f136b&s=" + this.props.searchQuery,
    )
      .then((response) => {
        if (!response.ok) throw new Error("Errore nel recupero dati");
        return response.json();
      })
      .then((data) => {
        if (data.Response === "True") {
          this.setState({ movies: data.Search, isLoading: false });
        } else {
          this.setState({ error: data.Error, isLoading: false });
        }
      })
      .catch((err) => {
        this.setState({ error: err.message, isLoading: false });
      });
  }

  scroll = (direction) => {
    if (this.carouselRef.current) {
      const scrollAmount = 600;
      this.carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  render() {
    const { movies, isLoading, error } = this.state;

    return (
      <div className="container-fluid my-4 text-white position-relative">
        <h4 className="mb-3">{this.props.head}</h4>
        {isLoading && (
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Caricamento...</span>
            </div>
          </div>
        )}
        {error && (
          <div className="alert alert-danger mx-3" role="alert">
            Si è verificato un errore: {error}
          </div>
        )}
        {!isLoading && !error && (
          <div className="position-relative">
            <button
              onClick={() => this.scroll("left")}
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
              ref={this.carouselRef}
              className="d-flex flex-nowrap overflow-hidden pb-4"
              style={{ scrollBehavior: "smooth" }}
            >
              {movies.map((movie) => (
                <div
                  key={movie.imdbID}
                  className="col-6-col-md-4 col-lg-2 me-2"
                  style={{
                    maxWidth: "200px",
                    maxHeight: "250px",
                    flex: "0 0 auto",
                  }}
                >
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
                </div>
              ))}
            </div>
            <button
              onClick={() => this.scroll("right")}
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
          </div>
        )}
      </div>
    );
  }
}

export default CarouselC;
