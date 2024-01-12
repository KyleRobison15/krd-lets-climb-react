import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NavBarMobile from "./components/NavBarMobile";

const App = () => {
  return (
    <Grid gridTemplateAreas={`"nav" "main"`} gridTemplateColumns={`"1fr"`}>
      <GridItem area="nav">
        <Show below="md">
          <NavBarMobile />
        </Show>
        <Hide below="md">
          <NavBar />
        </Hide>
      </GridItem>
      <GridItem area="main"></GridItem>
    </Grid>
  );
};

export default App;
