import "./App.css";
import Movies from "./components/movies";
import Title from "./components/Title";
import React, { Component } from "react";
import { getMovies } from "./fakeMovieService";

class App extends Component {
  state = {
    movies: getMovies(),
    titles: ["title", "Genre", "Stock", "rate"],
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = this.state.movies;
    movie.like = true;
    this.setState({ movies });
  };
  render() {
    return (
      <div>
        <Title movies={this.state.movies} />
        <Movies
          movies={this.state.movies}
          titles={this.state.titles}
          onDelete={this.handleDelete}
          onLike={this.handleLike}
        ></Movies>
      </div>
    );
  }
}

export default App;
