import axios from "axios";

export const getAllCategoriesProducts = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const data = await res?.data.slice(0, 5);

  return data;
};

export const getAllProducts = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const data = await res?.data;

  return data;
};
