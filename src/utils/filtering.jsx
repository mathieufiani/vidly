function filtering(items, activeGenre) {
  if (activeGenre === "0") {
    console.log(items);
    return items;
  }
  return items.filter((m) => m.genre._id === activeGenre);
}

export default filtering;
