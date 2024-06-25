import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies, { Movie } from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardLoading from "./MovieCardLoading";

const MovieGrid = () => {
  const { movies, loading, error } = useMovies({}); // Ensure to pass default filters if needed
  const loaders = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        paddingLeft={10}
        paddingRight={10}
        minChildWidth="200px"
      >
        {loading
          ? loaders.map((loader) => <MovieCardLoading key={loader} />)
          : movies.map(
              (
                movie: Movie // Ensure to specify the type of 'movie'
              ) => <MovieCard key={movie.id} movie={movie} />
            )}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
