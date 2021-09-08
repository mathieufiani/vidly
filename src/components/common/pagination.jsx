import React from "react";
import _ from "lodash";
const Pagination = ({
  nbPage,
  active_page,
  set_active_page,
  itemsCount,
  pageSize,
}) => {
  const pagesCount = itemsCount / pageSize;
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

export default Pagination;
