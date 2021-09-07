import React, { Component } from "react";

class Like extends Component {
  render() {
    const { onLike, movie } = this.props;
    return (
      <button className="btn btn-default" onClick={() => onLike(movie)}>
        <i
          className={movie.like ? "fa fa-heart" : "fa fa-heart-o"}
          aria-hidden="true"
        ></i>
      </button>
    );
  }
}

export default Like;
