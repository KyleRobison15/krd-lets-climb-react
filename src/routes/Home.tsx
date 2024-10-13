import { Stack } from "@chakra-ui/react";
import ClimbsGrid from "../components/ClimbsGrid";
import useAuth from "../hooks/useAuth";
import useLoading from "../hooks/useLoading";

const Home = () => {
  const { user } = useAuth();
  const { isLoading } = useLoading();

  return isLoading ? (
    <div>Loading.....</div>
  ) : (
    <Stack>
      <div>{`Welcome ${user?.firstName}!`}</div>
      <ClimbsGrid />
    </Stack>
  );
};

export default Home;
