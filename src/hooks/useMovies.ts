import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export interface MovieFilters {
  language?: string;
  certification?: string;
  vote_average_gte?: number;
  vote_average_lte?: number;
  with_genres?: string;
  with_cast?: string;
  release_date_gte?: string;
  release_date_lte?: string;
  with_runtime_gte?: number;
  with_runtime_lte?: number;
  with_watch_providers?: string;
  with_keywords?: string;
  region?: string;
  watch_region?: string;
}

const useMovies = (filters: MovieFilters) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const controller = new AbortController();
      const params = {
        ...filters,
        api_key: '7ca98b08beebf0d76c27b0bc5bf8579b', // Added API key here for simplicity
        region: 'US',
        watch_region: 'US',
        language: 'en-US'
      };

      try {
        const response = await apiClient.get('/discover/movie', { params, signal: controller.signal });
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError('Failed to fetch movies');
        setLoading(false);
      }

      return () => {
        controller.abort();
      };
    };

    fetchMovies();
  }, [filters]); // Dependency array to trigger re-fetch when filters change

  return { movies, loading, error };
};

export default useMovies;
