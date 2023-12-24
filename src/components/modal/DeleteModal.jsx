import React from "react";
import DeleteBtn from "./DeleteBtn";
import DeleteCancel from "./DeleteCancel";
import { useDisaster } from "../../context/DisasterContext";

function DeleteModal() {
  const { currentDisId } = useDisaster();
  return (
    <div className="flex flex-col items-center bg-white z-[100] fixed top-[30%] left-[50%] translate-x-[-50%] px-[5rem] py-[5rem] gap-[2.5rem] font-semibold rounded-md shadow-md shadow-gray-700">
      <h1 className="text-2xl">ยืนยันการลบรายงาน id#{currentDisId}</h1>
      <div className="flex gap-5">
        <DeleteBtn />
        <DeleteCancel />
      </div>
    </div>
  );
}

export default DeleteModal;
