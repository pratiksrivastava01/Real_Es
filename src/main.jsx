import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Flats from "../src/components/Flats.jsx";
import "./index.css";
import About from "./components/About.jsx";
import Hostels from "./components/Hostels.jsx";
import Test from "./components/Test.jsx";
import Test2 from "./components/Test2.jsx";
import Test3 from "./components/Test3.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Test3 />,
  },
  {
    path: "/flats",
    element: <Flats />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/hostels",
    element: <Hostels />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/test2",
    element: <Test2 />,
  },
  {
    path: "/test3",
    element: <Test3 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
