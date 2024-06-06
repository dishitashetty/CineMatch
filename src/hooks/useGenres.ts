import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    genres: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {

    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchGenresResponse>(
        "/genre/movie/list", { signal: controller.signal }
      )
      .then ((res) => {
        setGenres(res.data.genres);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })

      return () => controller.abort();
  }, []);

  return {genres, loading, error };
}

export default useGenres