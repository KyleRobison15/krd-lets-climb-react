import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import useLoading from "../hooks/useLoading";

const Home = () => {
  const { auth: {user} } = useAuth();
  const { isLoading } = useLoading();

  return isLoading ? (
    <div>Loading.....</div>
  ) : (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      p="10px 30px"
    >
      <Show above="lg">
        <GridItem area="aside" bg="gray.50"></GridItem>
      </Show>
      <GridItem area="main" bg="gray.100" w="100%">
        Test
      </GridItem>
    </Grid>
  );
};

export default Home;
