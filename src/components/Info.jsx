import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";

function Info() {
  const bold = "font-semibold text-xl";
  const regular = "text-xl";
  return (
    <div className="flex flex-col items-center mt-[3rem] gap-[3rem]">
      <h1 className="text-3xl font-semibold">รายละเอียดของรายงาน id: 1</h1>
      <div className="flex justify-between w-[50%] gap-[4rem]">
        <div id="left" className="flex flex-col w-full gap-[2.5rem] px-[2rem]">
          <div className="flex justify-between">
            <span className={bold}>ประเภท : </span>
            <span className={regular}>test test test</span>
          </div>
          <div className="flex justify-between">
            <span className={bold}>รายละเอียด : </span>
            <span className={regular}>test test test</span>
          </div>
          <div className="flex justify-between">
            <span className={bold}>จังหวัด : </span>
            <span className={regular}>test test test</span>
          </div>
          <div className="flex justify-between">
            <span className={bold}>เขตตำบล : </span>
            <span className={regular}>test test test</span>
          </div>
          <div className="flex justify-between">
            <span className={bold}>หมู่บ้าน : </span>
            <span className={regular}>test test test</span>
          </div>
        </div>
        <div id="right" className="flex flex-col w-full px-[2.5rem] gap-[2rem]">
          <div className="flex justify-between">
            <span className={bold}>วันที่เริ่ม : </span>
            <span className={regular}>test test test</span>
          </div>
          <div className="flex justify-between">
            <span className={bold}>วันที่สิ้นสุด : </span>
            <span className={regular}>test test test</span>
          </div>
          <div className="flex justify-between">
            <span className={bold}>สถานะ : </span>
            <span className={regular}>test test test</span>
          </div>
          <div className="flex justify-between">
            <span className={bold}>สถานะ?? : </span>
            <span className={regular}>test test test</span>
          </div>
          <div className="flex justify-between">
            <span className={bold}>แก้ไขล่าสุด : </span>
            <span className={regular}>test test test</span>
          </div>
        </div>
      </div>
      <div className="flex gap-[2rem]">
        <Link to={"/edit/gg"}>
          <button className="border border-gray-500 text-gray-500 px-5 py-3 rounded-sm font-semibold text-xl hover:bg-gray-500/[15%] transition-all duration-200">
            <div className="flex items-center gap-2">
              <MdOutlineEdit />
              <p>แก้ไข</p>
            </div>
          </button>
        </Link>
        <Link>
          <button className="border border-red-500 text-red-500 px-6 py-3 rounded-sm font-semibold text-xl hover:bg-red-500/[15%] transition-all duration-200">
            <div className="flex items-center gap-2">
              <MdDeleteOutline />
              <p>ลบ</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Info;
