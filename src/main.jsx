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
import MovieList from "./components/movieList/MovieList.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="movie/:id" element={<h1>Movie detail page</h1>} />
      <Route path="movies/:type" element={<MovieList />} />
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
