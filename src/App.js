import "./App.css";
import Movies from "./components/movies";
import Title from "./components/Title";
import React, { Component } from "react";
import { getMovies } from "./fakeMovieService";
import Pagination from "./components/common/pagination";
import paginate from "./utils/Paginate";
import Filter from "./components/common/filter";
class App extends Component {
  state = {
    movies: getMovies(),
    titles: ["title", "Genre", "Stock", "rate"],
    activePage: 0,
    pageSize: 4,
  };

  setActivePage = (index) => {
    this.setState({ activePage: index });
  };
  handlePagination = () => {
    const len = this.state.movies.length;
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
    const { movies: allMovies, titles, activePage, pageSize } = this.state;
    const movies = paginate(allMovies, pageSize, activePage + 1);
    return (
      <div>
        <Title movies={allMovies} />
        <Filter></Filter>
        <Movies
          movies={movies}
          titles={titles}
          onDelete={this.handleDelete}
          onLike={this.handleLike}
        ></Movies>
        <Pagination
          nbPage={this.handlePagination()}
          set_active_page={this.setActivePage}
          active_page={activePage}
          itemsCount={allMovies.length}
        ></Pagination>
      </div>
    );
  }
}

export default App;
