import { Component, createRef } from "react";
import SingleFilm from "./SingleFilm";

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
            <SingleFilm movies={movies} carouselRef={this.carouselRef} />
          </div>
        )}
      </div>
    );
  }
}

export default CarouselC;
