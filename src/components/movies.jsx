import React, { Component } from "react";
import { getMovies } from "../fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    titles: ["title", "Genre", "Stock", "rate"],
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
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
          <table className="table">
            <thead>
              <tr>
                {this.state.titles.map((title) => (
                  <th scope="col" key={title}>
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
                      key={movie._id}
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
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
