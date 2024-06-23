import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="text-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
