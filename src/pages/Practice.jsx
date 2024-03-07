import { useRouteLoaderData } from "react-router-dom";

function Practice() {
  const myArray = [1, 2, 3, 4];

  const myArrayTwo = [5, 6, 7, 8];

  const arraysCombined = [...myArray, ...myArrayTwo];

  // console.log(arraysCombined);

  const people = [
    {
      id: 1,
      userName: "Pops",
      age: "42",
      address11: {
        city: "Houston",
        state11: "Texas",
        country: "USA",
      },
    },
    {
      id: 2,
      userName: "Machin",
      age: "36",
      address11: {
        city: "Paris",
        state11: "Ile-de-France",
        country: "France",
      },
    },
  ];

  // const helloName = prompt("What's your name ?");

  function sayHello(helloName) {
    return helloName ? `Hello ${helloName}` : "Hello Machin";
  }

  console.log(sayHello());

  function displayMessage({ state11 }) {
    const message = "I live in " + state11 + ".";
    return <p>{message}</p>;
  }

  const helloMachin = useRouteLoaderData("practice");

  const helloPops = () => "Hello Pops";

  const bands = ["Iron Maiden", "Wu-Tang Clan", "Miles Davis"];

  const [, , best] = bands;

  // console.log(best);

  const [heavy, rap, jazz] = bands;

  // console.log(heavy, rap);

  return (
    <>
      {myArray.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
          </div>
        );
      })}
      <ul>
        {people.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.userName}</li>
              <li>{item.age}</li>
              <li>{displayMessage(item.address11)}</li>
            </div>
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
