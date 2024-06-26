import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies, { MovieFilters } from "../hooks/useMovies";
import MovieCard from "./MovieCard";

interface MovieGridProps {
  filters: MovieFilters;
}

const MovieGrid = ({ filters }: MovieGridProps) => {
  const { movies, loading, error } = useMovies(filters);

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
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
