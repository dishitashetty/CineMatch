import React, { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import axios from "axios";
import { Text } from "@chakra-ui/react";

interface Movie {
  id: number;
  title: string;
}

interface FetchMoviesResponse {
  count: number;
  results: Movie[];
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<FetchMoviesResponse>(
        "https://api.themoviedb.org/3/movie/popular?api_key=7ca98b08beebf0d76c27b0bc5bf8579b"
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieGrid;
