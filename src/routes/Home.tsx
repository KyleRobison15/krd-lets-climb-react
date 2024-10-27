import { Flex, Show } from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import useLoading from "../hooks/useLoading";
import ClimbsGrid from "../components/ClimbsGrid";

const Home = () => {
  const { auth: {user} } = useAuth();
  const { isLoading } = useLoading();

  return isLoading ? (
    <div>Loading.....</div>
  ) : (
    <Flex id="home-container" px="30px" w="100%" gap={5}>
      <Show above="lg">
        <Flex
          id="aside-container"
          mt="30px"
          w="200px"
          bg="white"
          borderRadius="10px"
          borderWidth="1px"
        >
          Test
        </Flex>
      </Show>
      <Flex
        id="main-container"
        mt="30px"
        flexGrow={1}
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        justifyContent="center"
      >
        <ClimbsGrid />
      </Flex>
    </Flex>
  );
};

export default Home;
