import { useEffect, useState } from "react";

export interface Service {
  provider_id: number;
  provider_name: string;
  logo_path: string;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  services: Service[];
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
}


const useMovies = (filters: MovieFilters) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams({
      language: filters.language || 'en-US',
      certification: filters.certification || '',
      'vote_average.gte': filters.vote_average_gte?.toString() || '',
      'vote_average.lte': filters.vote_average_lte?.toString() || '',
      with_genres: filters.with_genres || '',
      with_cast: filters.with_cast || '',
      'release_date.gte': filters.release_date_gte || '',
      'release_date.lte': filters.release_date_lte || '',
      'with_runtime.gte': filters.with_runtime_gte?.toString() || '',
      'with_runtime.lte': filters.with_runtime_lte?.toString() || '',
      with_watch_providers: filters.with_watch_providers || '',
      with_keywords: filters.with_keywords || '',
    });

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2E5OGIwOGJlZWJmMGQ3NmMyN2IwYmM1YmY4NTc5YiIsIm5iZiI6MTcxOTI3NDg4NS4wNTU5NzQsInN1YiI6IjY2M2ZkYTIxYzlkNDU4ODlhMGMwODE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._mAHNWy8Nfv_LE0kEzqQZ9SaCXBHheE20mo4R4XG4xk'
      }
    };

    const url = `https://api.themoviedb.org/3/discover/movie?${params.toString()}`;

    setLoading(true);
    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        setMovies(response.results);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to fetch movies");
        setLoading(false);
      });

  }, [filters]);

  return { movies, loading, error };
}

export default useMovies;