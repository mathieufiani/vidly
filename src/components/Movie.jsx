import React, { Component } from "react";
import Like from "./common/Like";
class Movie extends Component {
  render() {
    const { movie, onLike } = this.props;
    return (
      <tr key={movie.title}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Like
            movie={movie}
            liked={movie.liked}
            onClick={() => onLike(movie)}
          />
        </td>
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
