import React from "react";
const filter = (props) => {
  const { genres, active_genre, set_active_genre } = props;
  const allGenres = [{ _id: "0", name: "all Genre" }, ...genres];
  return (
    <ul className="list-group ml-3 mr-5">
      {allGenres.map((genre) => {
        return (
          <li
            onClick={() => set_active_genre(genre._id)}
            key={genre._id}
            className={
              "list-group-item " + (active_genre === genre._id && "active")
            }
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
