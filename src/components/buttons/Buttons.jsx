import React from "react";
import { MdOutlineEdit, MdDeleteOutline, MdInfoOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDisaster } from "../../context/DisasterContext";

function Buttons({ disId }) {
  const { setCurrentDisId, setIsOpenDelete } = useDisaster();
  const deleteHandle = () => {
    setCurrentDisId(disId);
    setIsOpenDelete(true);
  };
  return (
    <div className="flex items-center gap-2">
      <Link to={`/info/${disId}`}>
        <button className="px-1 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500/[15%] transition-all duration-200">
          <div className="flex items-center gap-1">
            <MdInfoOutline />
            <p>ดูเพิ่มเติม</p>
          </div>
        </button>
      </Link>
      <Link to={`/edit/${disId}`}>
        <button className="px-1 py-1 border border-gray-500 text-gray-500 rounded-md hover:bg-gray-500/[15%] transition-all duration-200">
          <div className="flex items-center">
            <MdOutlineEdit />
            <p>แก้ไข</p>
          </div>
        </button>
      </Link>
      <button
        onClick={deleteHandle}
        className="px-1 py-1 border border-red-500 text-red-500 rounded-md hover:bg-red-500/[15%] transition-all duration-200"
      >
        <div className="flex items-center">
          <MdDeleteOutline />
          <p>ลบ</p>
        </div>
      </button>
    </div>
  );
}

export default Buttons;
