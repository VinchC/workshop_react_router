import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Practice from "./pages/Practice";
import "./index.css";
import Article from "./pages/Article.jsx";

// const getWeatherOfTheDay = () => {
//   return "rainy";
// };

const getSomeData = (id) => {
  const allData = {
    1: {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet",
    },
    2: {
      title: "Schnapsum",
      content: "Lorem Elsass ipsum Salut bisamme",
    },
    3: {
      title: "Cupcake Ipsum",
      content: "Tiramisu pastry wafer brownie soufflé",
    },
  };

  return allData[id];
};

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      const weather = "sunny";
      return weather;
    },
    id: "app",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/practice",
        element: <Practice />,
        id: "practice",
        loader: () => {
          const hello = "Hello Machin";
          return hello;
        },
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles",
        element: <Article />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
        loader: ({ params }) => {
          return getSomeData(params.id);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
