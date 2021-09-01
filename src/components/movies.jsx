import React, { Component } from "react";
import { deleteMovie, getMovies } from "../fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    titles: ["title", "Genre", "Stock", "rate"],
  };

  handleDelete = (movie) => {
    console.log(movie.target.id);
    deleteMovie(movie.target.id);
    this.setState({ movies: getMovies() });
  };
  renderComponents() {
    if (this.state.movies.length === 0) {
      return (
        <React.Fragment>
          <h1>There are no movies in the database</h1>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Showing {this.state.movies.length} movies in the database</h1>
          <table>
            <thead>
              <tr>
                {this.state.titles.map((title) => (
                  <th className="table-primary col-2" key={title}>
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => (
                <tr key={movie.title}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      id={movie._id}
                      key={movie._id}
                      onClick={this.handleDelete}
                      className="btn btn-secondary btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      );
    }
  }
  render() {
    return this.renderComponents();
  }
}

export default Movies;
