import useAuth from "../hooks/useAuth";
import useLoading from "../hooks/useLoading";

const Home = () => {
  const { user } = useAuth();
  const { isLoading } = useLoading();

  return isLoading ? (
    <div>Loading.....</div>
  ) : (
    <div>{`Welcome ${user?.firstName}!`}</div>
  );
};

export default Home;
