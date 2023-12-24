import React from "react";
import { useDisaster } from "../../context/DisasterContext";

function DeleteCancel() {
  const { setIsOpenDelete } = useDisaster();
  return (
    <button
      className="border border-gray-500 text-gray-500 py-2 hover:bg-gray-500/[15%] transition-all duration-200 w-[7rem] text-center text-lg rounded-sm"
      onClick={() => setIsOpenDelete(false)}
    >
      ยกเลิก
    </button>
  );
}

export default DeleteCancel;
