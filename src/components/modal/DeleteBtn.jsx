import React from "react";
import { useDisaster } from "../../context/DisasterContext";
import axios from "../../config/axios";
import dateFormat from "dateformat";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function DeleteBtn() {
  const navigate = useNavigate();
  const { currentDisId, setIsOpenDelete, allDisaster, setAllDisaster } =
    useDisaster();
  const handleDelete = async () => {
    try {
      const now = new Date();
      const format = dateFormat(now, "dd/mm/yyyy hh:MM");
      const res = await axios.patch(`/disaster/softDel/${currentDisId}`, {
        deleteDate: format,
      });
      setAllDisaster(
        allDisaster.filter((x) => x.obstacleId !== res.data.obstacleId)
      );
      setIsOpenDelete(false);
      navigate("/");

      toast.success(`ลบรายงาน id#${res.data.obstacleId} สำเร็จ`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="border border-red-500 text-red-500 py-2 hover:bg-red-500/[15%] transition-all duration-200 w-[7rem] text-center text-lg rounded-sm"
    >
      ลบ
    </button>
  );
}

export default DeleteBtn;
