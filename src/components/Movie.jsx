import React, { Component } from "react";
class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <tr key={movie.title}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            key={movie._id}
            onClick={() => this.props.onDelete(movie)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
