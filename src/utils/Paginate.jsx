import _ from "lodash";
import PropTypes from "prop-types";
function Paginate(items, pageSize, activePage) {
  const startIndex = (activePage - 1) * pageSize;
  //_.slice(items, startIndex)
  // _.take
  return _(items).slice(startIndex).take(pageSize).value();
}

Paginate.propTypes = {
  items: PropTypes.array,
  pageSize: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
};

export default Paginate;
