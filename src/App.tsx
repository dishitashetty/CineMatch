import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import Aside from "./components/Aside";
import { useState } from "react";
import { MovieFilters } from "./hooks/useMovies";

function App() {
  const [filters, setFilters] = useState<MovieFilters>({});

  const handleFiltersChange = (newFilters: Partial<MovieFilters>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters
    }));
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        sm: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="sm">
        <GridItem area="aside">
          <Aside onFiltersChange={handleFiltersChange}></Aside>
        </GridItem>
      </Show>
      <GridItem area="main">
        <MovieGrid filters={filters}></MovieGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
