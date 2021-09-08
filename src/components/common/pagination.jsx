import React from "react";

const Pagination = ({ nbPage, active_page, set_active_page }) => {
  //const numPage = nbPage.nbPage;
  //const [activePage, setActivePage] = useState(1);

  return (
    <React.Fragment>
      <ul className="pagination">
        {[...Array(nbPage)].map((element, index) => (
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
