import { useRouteLoaderData } from "react-router-dom";

function Home() {
  const weather = useRouteLoaderData("app");

  return (
    <>
      <h1>Hello from Home</h1>

      <p>Today is a {weather} day</p>
    </>
  );
}

export default Home;
