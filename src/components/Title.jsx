import React, { Component } from "react";
class Title extends Component {
  render() {
    return (
      <div>
        <h1>{this.formatTitle()}</h1>
      </div>
    );
  }

  formatTitle() {
    const { movies } = this.props;
    if (movies.length === 0) {
      return "There is no movies stored in the database";
    } else {
      return "There is " + movies.length + " movies in the database";
    }
  }
}

export default Title;
