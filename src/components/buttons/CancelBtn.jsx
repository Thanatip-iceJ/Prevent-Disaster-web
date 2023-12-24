import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDisaster } from "../../context/DisasterContext";

function CancelBtn() {
  const { setInput, setEditInput } = useDisaster();
  const navigate = useNavigate();
  const onClick = () => {
    setInput({
      obstacleTypeId: 0,
      title: "",
      provinceName: "",
      amphoeName: "",
      tambonName: "",
      moobanName: "",
      startDate: "",
      endDate: "",
      status: 0,
    });
    setEditInput(null);
    navigate("/");
  };
  return (
    <div>
      <button
        onClick={onClick}
        className="font-semibold text-lg border border-gray-500 text-gray-500 py-2 px-5 rounded-sm hover:bg-gray-500/[15%] transition-all duration-200"
      >
        Cancel
      </button>
    </div>
  );
}

export default CancelBtn;
