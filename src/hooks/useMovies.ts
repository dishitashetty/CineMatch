import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";

 interface Service {
  provider_id: number; // id of provider
  provider_name: string; // name of provider
  logo_path: string; // logo of provider
}

export interface Movie {
    id: number; // id
    title: string; // title of movie
    poster_path: string; // poster pic
    services: Service[]; // streaming servvices
  }
  
  interface FetchMoviesResponse {
    count: number;
    results: Movie[];
  }

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {

    const controller = new AbortController();

    apiClient
      .get<FetchMoviesResponse>(
        "/popular?api_key=7ca98b08beebf0d76c27b0bc5bf8579b", { signal: controller.signal }
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });

      return () => controller.abort();
  }, []);

  return {movies, error };
}

export default useMovies