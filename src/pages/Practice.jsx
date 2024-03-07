import { useRouteLoaderData } from "react-router-dom";

function Practice() {
  const helloMachin = useRouteLoaderData("practice");
  const helloPops = () => "Hello Pops";
  return (
    <>
      <h1>Hello from Practice</h1>
      <p>{helloPops()}</p>
      <p>{helloMachin}</p>
    </>
  );
}

export default Practice;
