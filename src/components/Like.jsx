import React, { Component } from "react";
import Movies from "./movies";

class Like extends Component {
  render() {
    return (
      <button
        className="btn btn-default"
        onClick={() => this.props.onLike(this.props.movie)}
      >
        <i
          className={this.props.movie.like ? "fa fa-heart" : "fa fa-heart-o"}
          aria-hidden="true"
        ></i>
      </button>
    );
  }
}

export default Like;
