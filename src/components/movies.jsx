import React, { Component } from "react";
import Movie from "./Movie";
import Pagination from "./common/pagination";
class Movies extends Component {
  renderComponents() {
    const {
      onDelete,
      movies,
      titles,
      onLike,
      active_page,
      nbPage,
      set_active_page,
      itemsCount,
    } = this.props;
    if (movies.length !== 0) {
      return (
        <div className="d-block w-100">
          <table className="table">
            <thead>
              <tr>
                {titles.map((title) => (
                  <th scope="col" key={title}>
                    {title}
                  </th>
                ))}
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <Movie
                  key={movie._id}
                  movie={movie}
                  onDelete={onDelete}
                  liked={true}
                  onLike={onLike}
                />
              ))}
            </tbody>
          </table>
          <Pagination
            className="row"
            nbPage={nbPage}
            set_active_page={set_active_page}
            active_page={active_page}
            itemsCount={itemsCount}
          />
        </div>
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
