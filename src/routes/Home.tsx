import useAuth from "../hooks/useAuth";

const Home = () => {
  const {user} = useAuth();

  return <div>{`Welcome ${user?.firstName}!`}</div>;
};

export default Home;
