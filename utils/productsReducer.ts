const fetchFromApi = async () => {
  if (window !== undefined && localStorage) {
    const response = await fetch("/api/products").then((res) => res.json());
    localStorage.setItem("products", JSON.stringify(response));
    return response;
  }
};

export const fetchProducts = async () => {
  if (window !== undefined && localStorage) {
    const products = localStorage.getItem("products");
    if (products) {
      return JSON.parse(products);
    }
    return fetchFromApi();
  }
};

export const productsNameFilter = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .join("-");
};
