import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Info from "../components/Info";
import Add from "../components/Add";
import Edit from "../components/Edit";
import Home from "../components/Home";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "info/:disId", element: <Info /> },
        { path: "add", element: <Add /> },
        { path: "edit/:disId", element: <Edit /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
