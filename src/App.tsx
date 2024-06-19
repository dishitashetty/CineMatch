import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import Aside from "./components/Aside";

function App() {
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
          <Aside></Aside>
        </GridItem>
      </Show>
      <GridItem area="main">
        <MovieGrid></MovieGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
