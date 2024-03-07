import { useRouteLoaderData } from "react-router-dom";

function Practice() {
  const myArray = [1, 2, 3, 4];
  const myArrayObject = [
    { userName: "Pops", age: "42" },
    { userName: "Machin", age: "36" },
  ];
  const helloMachin = useRouteLoaderData("practice");
  const helloPops = () => "Hello Pops";
  return (
    <>
      {myArray.map((item) => {
        return (
          <>
            <p>{item}</p>
          </>
        );
      })}
      <ul>
        {myArrayObject.map((item) => {
          return (
            <>
              <li>{item.userName}</li>
              <li>{item.age}</li>
            </>
          );
        })}
      </ul>
      <h1>Hello from Practice</h1>
      <p>{helloPops()}</p>
      <p>{helloMachin}</p>
    </>
  );
}

export default Practice;
