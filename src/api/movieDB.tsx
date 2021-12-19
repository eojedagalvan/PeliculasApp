import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "2eb3b16e782e95e916bfaba1e569f408",
    language: "es-ES",
    adult: false,
  },
});

export default movieDB;
