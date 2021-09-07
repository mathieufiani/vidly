import React, { Component } from "react";
import Movie from "./Movie";
class Movies extends Component {
  renderComponents() {
    const { onDelete, movies, titles } = this.props;
    if (movies.length !== 0) {
      return (
        <React.Fragment>
          <table className="table">
            <thead>
              <tr>
                {titles.map((title) => (
                  <th scope="col" key={title}>
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <Movie key={movie._id} movie={movie} onDelete={onDelete} />
              ))}
            </tbody>
          </table>
        </React.Fragment>
      );
    } else {
      return <React.Fragment></React.Fragment>;
    }
  }
  render() {
    return this.renderComponents();
  }
}

export default Movies;
