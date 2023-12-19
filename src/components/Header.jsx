import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-blue-500 py-2">
      <div className="container m-auto flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-white font-bold text-[2rem]">Prevent Disaster</h1>
        </Link>
        <Link to={"/"} className="font-semibold text-white text-xl">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Header;
