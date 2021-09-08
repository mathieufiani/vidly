function filtering(items, activeGenre) {
  if (activeGenre === "0") {
    console.log(items);
    return items;
  }
  let filterItem = items.filter((m) => m.genre._id === activeGenre);
  console.log(filterItem);
  return filterItem;
}

export default filtering;
