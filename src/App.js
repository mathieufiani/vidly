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

  constructor() {
    super();
    this.createLikeAttr();
  }
  createLikeAttr() {
    this.state.movies.map((movie) => {
      return (movie.like = false);
    });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = this.state.movies;
    console.log(movie);
    movie.like = !movie.like;
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
