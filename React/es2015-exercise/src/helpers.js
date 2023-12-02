const choice = (items) => {
  const random = Math.floor(Math.random() * items.length) + 1;
  return items[random];
};

const remove = (items, remove) => {
  const found = items.find((item) => item === remove);
  if (found) {
    items = items.filter((item) => item != remove);
    return items;
  }
  return undefined;
};

export { choice, remove };
