import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.REACT_APP_API_KEY;
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "ko-KR",
  },
});

export default instance;
