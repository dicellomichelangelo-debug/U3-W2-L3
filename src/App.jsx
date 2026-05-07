import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarouselC from "./components/CarouselC";
import FooterC from "./components/FooterC";
import HeaderC from "./components/HeaderC";
import NotFound from "./components/NotFound";
import Account from "./components/Account";
import MovieDetails from "./components/MovieDetails";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 bg-dark text-white">
        <header>
          <HeaderC />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <main className="flex-grow-1">
                <CarouselC head="Avengers" searchQuery="Avengers" />
                <CarouselC head="Star Wars" searchQuery="Star Wars" />
                <CarouselC head="Harry Potter" searchQuery="Harry Potter" />
                <CarouselC
                  head="Mission Impossible"
                  searchQuery="Mission Impossible"
                />
              </main>
            }
          ></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
        <footer>
          <FooterC />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
