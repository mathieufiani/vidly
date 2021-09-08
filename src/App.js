import "./App.css";
import Movies from "./components/movies";
import Title from "./components/Title";
import React, { Component } from "react";
import { getMovies } from "./fakeMovieService";
import paginate from "./utils/Paginate";
import Filter from "./components/common/filter";
import { getGenres } from "./fakeGenreService";
import filtering from "./utils/filtering";
class App extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    titles: ["title", "Genre", "Stock", "rate"],
    activePage: 0,
    pageSize: 4,
    activeGenre: "0",
    filteredMovies: getMovies(),
  };
  setActivePage = (index) => {
    this.setState({ activePage: index });
  };
  setActiveGenre = (id) => {
    this.setState({ activeGenre: id });
    let movies = filtering(this.state.movies, this.state.activeGenre);
    this.setState({ filteredMovies: movies });
  };
  handlePagination = () => {
    const len = this.state.filteredMovies.length;
    const nbPage = this.state.pageSize;
    return Math.ceil(len / nbPage);
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    const {
      movies: allMovies,
      titles,
      activePage,
      pageSize,
      genres,
      activeGenre,
      filteredMovies,
    } = this.state;
    let moviesPag = paginate(filteredMovies, pageSize, activePage + 1);
    return (
      <div className="container row row-cols-2">
        <Title movies={filteredMovies} />
        <div className="d-flex w-100">
          <Filter
            set_active_genre={this.setActiveGenre}
            genres={genres}
            active_genre={activeGenre}
          />
          <Movies
            movies={moviesPag}
            titles={titles}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            nbPage={this.handlePagination()}
            set_active_page={this.setActivePage}
            active_page={activePage}
            itemsCount={allMovies.length}
          />
        </div>
      </div>
    );
  }
}

export default App;
