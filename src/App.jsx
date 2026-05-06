import CarouselC from "./components/CarouselC";
import FooterC from "./components/FooterC";
import HeaderC from "./components/HeaderC";
function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <header>
        <HeaderC />
      </header>
      <main className="flex-grow-1">
        <CarouselC head="Avengers" searchQuery="Avengers" />
        <CarouselC head="Star Wars" searchQuery="Star Wars" />
        <CarouselC head="Harry Potter" searchQuery="Harry Potter" />
        <CarouselC head="Mission Impossible" searchQuery="Mission Impossible" />
      </main>
      <footer>
        <FooterC />
      </footer>
    </div>
  );
}

export default App;
