function getLocalStorage() {
  const cachedData = JSON.parse(localStorage.getItem("products"));
  return cachedData;
}

function removeLocalStorage() {
  localStorage.removeItem("products");
}

function setLocalStorage(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

export { getLocalStorage, removeLocalStorage, setLocalStorage };
