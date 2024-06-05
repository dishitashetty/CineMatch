import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardLoading from "./MovieCardLoading";

const MovieGrid = () => {
  const { movies, loading, error } = useMovies();
  const loaders = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {loading &&
          loaders.map((loader) => (
            <MovieCardLoading key={loader}></MovieCardLoading>
          ))}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
