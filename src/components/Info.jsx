import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { useEffect } from "react";
import { useDisaster } from "../context/DisasterContext";
import { useParams } from "react-router-dom";
import ReturnBtn from "./buttons/ReturnBtn";
import { useNavigate } from "react-router-dom";

function Info() {
  const bold = "font-semibold text-xl flex w-[8rem]";
  const regular = "text-xl";
  const navigate = useNavigate();
  const deleteHandle = () => {
    setCurrentDisId(disId);
    setIsOpenDelete(true);
  };

  const { disId } = useParams();

  const {
    getById,
    setCurrentDisId,
    currentDisaster,
    infoLoading,
    setIsOpenDelete,
  } = useDisaster();

  const newStartDate =
    currentDisaster?.updateDate && currentDisaster.startDate.split(" ")[0];
  const newEndDate =
    currentDisaster?.updateDate && currentDisaster.endDate.split(" ")[0];
  const newUpdateDate =
    currentDisaster?.updateDate && currentDisaster.updateDate.split(" ")[0];

  useEffect(() => {
    getById(disId);
  }, []);
  if (infoLoading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div className="flex flex-col items-center mt-[3rem] gap-[3rem]">
      <div className="relative right-[45%] -mb-[2rem]">
        <ReturnBtn onClick={() => navigate("/")} />
      </div>
      <h1 className="text-3xl font-semibold">{`รายละเอียดของรายงาน id#${currentDisaster?.obstacleId}`}</h1>
      <div className="flex justify-center w-[70%] gap-[4rem] ml-[10rem]">
        <div id="left" className="flex flex-col w-full gap-[2.5rem]">
          <div className="flex">
            <span className={bold}>ประเภท : </span>
            <span className={regular}>
              {currentDisaster?.obstacleType[0].obstacleTypeName}
            </span>
          </div>
          <div className="flex">
            <span className={bold}>รายละเอียด : </span>
            <span className={regular}>{currentDisaster?.title}</span>
          </div>
          <div className="flex">
            <span className={bold}>จังหวัด : </span>
            <span className={regular}>{currentDisaster?.provinceName}</span>
          </div>
          <div className="flex ">
            <span className={bold}>เขต : </span>
            <span className={regular}>{`${currentDisaster?.amphoeName}`}</span>
          </div>
          <div className="flex">
            <span className={bold}>หมู่บ้าน : </span>
            <span className={regular}>{currentDisaster?.moobanName}</span>
          </div>
        </div>
        <div id="right" className="flex flex-col w-full px-[2rem] gap-[2.5rem]">
          <div className="flex">
            <span className={bold}>วันที่เริ่ม : </span>
            <span className={regular}>{newStartDate || "ไม่ระบุ"}</span>
          </div>
          <div className="flex">
            <span className={bold}>วันที่สิ้นสุด : </span>
            <span className={regular}>{newEndDate || "ไม่ระบุ"}</span>
          </div>
          <div className="flex">
            <span className={bold}>สถานะ : </span>
            <span className={regular}>
              {currentDisaster?.status ? "สำเร็จ" : "กำลังดำเนินการ"}
            </span>
          </div>
          <div className="flex">
            <span className={bold}>ตำบล : </span>
            <span className={regular}>{currentDisaster?.tambonName}</span>
          </div>
          <div className="flex">
            <span className={bold}>แก้ไขล่าสุด : </span>
            <span className={regular}>{newUpdateDate || "ไม่ระบุ"}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-[2rem]">
        <Link to={`/edit/${disId}`}>
          <button className="border border-gray-500 text-gray-500 px-5 py-3 rounded-sm font-semibold text-xl hover:bg-gray-500/[15%] transition-all duration-200">
            <div className="flex items-center gap-2">
              <MdOutlineEdit />
              <p>แก้ไข</p>
            </div>
          </button>
        </Link>
        <button
          onClick={deleteHandle}
          className="border border-red-500 text-red-500 px-6 py-3 rounded-sm font-semibold text-xl hover:bg-red-500/[15%] transition-all duration-200"
        >
          <div className="flex items-center gap-2">
            <MdDeleteOutline />
            <p>ลบ</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Info;
