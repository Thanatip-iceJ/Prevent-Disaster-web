import React from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ReturnBtn({ onClick }) {
  return (
    <div className="text-[3rem] cursor-pointer" onClick={onClick}>
      <MdArrowBack />
    </div>
  );
}

export default ReturnBtn;
