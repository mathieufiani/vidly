import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ nbPage, active_page, set_active_page }) => {
  if (nbPage === 1) return null;
  return (
    <React.Fragment>
      <ul className="pagination">
        {_.range(1, nbPage + 1).map((element, index) => (
          <li
            key={index}
            className={"page-item " + (active_page === index && "active")}
          >
            <button
              className="page-link"
              onClick={() => set_active_page(index)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

Pagination.propTypes = {
  nbPage: PropTypes.number.isRequired,
  active_page: PropTypes.number.isRequired,
  set_active_page: PropTypes.func.isRequired,
};
export default Pagination;
