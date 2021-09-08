import React from "react";
const filter = (props) => {
  const { genres, active_genre, set_active_genre } = props;
  const allGenres = [{ _id: "0", name: "all Genre" }, ...genres];
  return (
    <ul className="list-group">
      {allGenres.map((genre, index) => {
        return (
          <li
            key={genre._id}
            className={
              "list-group-item " + (active_genre === genre._id && "active")
            }
            onClick={() => set_active_genre(genre._id)}
            style={{ cursor: "pointer" }}
          >
            {genre.name}
          </li>
        );
      })}
    </ul>
  );
};

export default filter;
