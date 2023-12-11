import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Flats from "../src/components/Flats.jsx";
import "./index.css";
import About from "./components/About.jsx";
import Hostels from "./components/Hostels.jsx";
import Test from "./components/Test.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
