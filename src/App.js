import "./App.css";
import Movies from "./components/movies";
import Title from "./components/Title";
import React, { Component } from "react";
import { getMovies } from "./fakeMovieService";
import Pagination from "./components/common/pagination";

class App extends Component {
  state = {
    movies: getMovies(),
    titles: ["title", "Genre", "Stock", "rate"],
    activePage: 0,
    pageSize: 4,
  };
  setActivePage = (index) => {
    let activePage = this.state.activePage;
    activePage = index;
    this.setState({ activePage });
  };
  handlePagination = () => {
    const len = this.state.movies.length;
    const nbPage = this.state.pageSize;
    return Math.ceil(len / nbPage);
  };
  handlePageChange = (page) => {
    console.log(page);
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
  setMoviesToShow = () => {
    const indexToget = this.state.activePage;
    const numFilmOnPage = this.state.pageSize;
    const currentMovies = this.state.movies.slice(
      indexToget * numFilmOnPage,
      (indexToget + 1) * numFilmOnPage
    );
    return currentMovies;
  };
  render() {
    return (
      <div>
        <Title movies={this.state.movies} />
        <Movies
          movies={this.setMoviesToShow()}
          titles={this.state.titles}
          onDelete={this.handleDelete}
          onLike={this.handleLike}
        ></Movies>
        <Pagination
          nbPage={this.handlePagination()}
          set_active_page={this.setActivePage}
          active_page={this.state.activePage}
          itemsCount={this.state.movies.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          key={this.state.rendered}
        ></Pagination>
      </div>
    );
  }
}

export default App;
