import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  useLoaderData,
  redirect
} from "react-router-dom";
//import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./ErrorPage";

import App from "./App";
import About from "./About";

//
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/error",
    element: <ErrorPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/sobre",
    element: <About />,
    errorElement: <ErrorPage />
  }
]);
//

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
