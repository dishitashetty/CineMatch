import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies, { Movie, MovieFilters } from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const defaultFilters: MovieFilters = {
    region: 'US',
    watch_region: 'US',
    language: 'en-US'
  };

  const { movies, loading, error } = useMovies(defaultFilters); // Pass default filters

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
        {loading ? (
          <Text>Loading...</Text> /* Placeholder for loading state */
        ) : (
          movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
