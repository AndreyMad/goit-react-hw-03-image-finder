import axios from "axios";

export const searchQuery = (query = "") => {
  return axios.get(
    `https://pixabay.com/api/?key=14922494-aee89178795b078ccc72cd443&orientation=horizontal&q=${query}`
  );
};
export const w = 123;
