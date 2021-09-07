import React, { Component } from "react";
class Movie extends React.Component {
  render() {
    const { movies } = this.props.movies;
    return (
      <div>
        <tr key={movies.title}>
          <td>{movies.title}</td>
          <td>{movies.genre.name}</td>
          <td>{movies.numberInStock}</td>
          <td>{movies.dailyRentalRate}</td>
          <td>
            <button
              key={movies._id}
              onClick={() => this.handleDelete(movies)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      </div>
    );
  }
}

export default Movie;
