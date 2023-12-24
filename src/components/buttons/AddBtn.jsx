import React from "react";
import { Link } from "react-router-dom";

function AddBtn() {
  return (
    <Link to={"/add"}>
      <button className="bg-blue-500 text-white rounded-md font-semibold px-6 py-1.5 hover:bg-blue-500/80 transition-all duration-200">
        <div className="flex gap-1 items-center">
          <div className="font-bold text-2xl">+</div>
          <div className="text-lg">เพิ่ม</div>
        </div>
      </button>
    </Link>
  );
}

export default AddBtn;
