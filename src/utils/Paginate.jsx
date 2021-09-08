import _ from "lodash";

function Paginate(items, pageSize, activePage) {
  const startIndex = (activePage - 1) * pageSize;
  //_.slice(items, startIndex)
  // _.take
  return _(items).slice(startIndex).take(pageSize).value();
}

export default Paginate;
