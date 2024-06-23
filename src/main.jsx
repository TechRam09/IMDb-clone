import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import { DataProvider } from "./context/dataContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="movie/:id" element={<h1>Movie detail page</h1>} />
      <Route path="movies/:type" element={<h1>Movie list page</h1>} />
      <Route path="/*" element={<h1>404 Page not Found</h1>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </DataProvider>
);
