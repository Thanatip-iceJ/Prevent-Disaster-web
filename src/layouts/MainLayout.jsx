import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Header />
      <div id="container" className="container m-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
