export const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
};

export const fetchProductDetail = async productId => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
  );
  const data = await response.json();
  return data;
};
