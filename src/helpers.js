// simple validation that each item value exists
const isValidItem = (item) => {
  const {name, description, price, availableDate} = item;
  return name !== "" && description !== "" && price > 0 && availableDate !== "";
};

// return copy of `store` array with `item` as last element
const addItemToStore = (item, store) => {
  return [...store, item];
};

module.exports = {
  isValidItem,
  addItemToStore
};