import axios from "axios";

const apiKey = "14922494-aee89178795b078ccc72cd443";
export const searchByQuery = (query = "", page = 1) => {
  return axios.get(
    `https://pixabay.com/api/?key=${apiKey}&orientation=horizontal&q=${query}&per_page=12&page=${page}`
  );
};
export const w = 123;
