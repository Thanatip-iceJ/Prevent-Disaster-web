import React from "react";

function Edit() {
  const bold = "font-semibold text-xl";
  const regular = "text-xl";

  return (
    <div className="flex flex-col items-center mt-[3rem] gap-[3rem]">
      <h1 className="text-3xl font-semibold">รายละเอียดของรายงาน id: 1</h1>
      <div className="flex justify-between w-[70%]">
        <div id="left" className="flex flex-col gap-[3rem] w-full px-7">
          <div className="flex justify-between">
            <span className={bold}>ประเภท : </span>
            <input
              type="text"
              value={""}
              onChange={""}
              className="border outline-none text-xl px-2"
            />
          </div>
          <div className="flex justify-between">
            <span className={bold}>รายละเอียด : </span>
            <input
              type="text"
              value={""}
              onChange={""}
              className="border outline-none text-xl px-2"
            />
          </div>
          <div className="flex justify-between">
            <span className={bold}>จังหวัด : </span>
            <input
              type="text"
              value={""}
              onChange={""}
              className="border outline-none text-xl px-2"
            />
          </div>
          <div className="flex justify-between">
            <span className={bold}>เขตตำบล : </span>
            <input
              type="text"
              value={""}
              onChange={""}
              className="border outline-none text-xl px-2"
            />
          </div>
          <div className="flex justify-between">
            <span className={bold}>หมู่บ้าน : </span>
            <input
              type="text"
              value={""}
              onChange={""}
              className="border outline-none text-xl px-2"
            />
          </div>
        </div>
        <div id="right" className="flex flex-col gap-[3rem] w-full px-[4rem]">
          <div>
            <span className={bold}>วันที่เริ่ม : </span>
            <span className={regular}> test test test</span>
          </div>
          <div>
            <span className={bold}>วันที่สิ้นสุด : </span>
            <span className={regular}> test test test</span>
          </div>
          <div>
            <span className={bold}>สถานะ : </span>
            <span className={regular}> test test test</span>
          </div>
          <div className="flex justify-between">
            <span className={bold}>สถานะ?? : </span>
            <input
              type="text"
              value={""}
              onChange={""}
              className="border outline-none text-xl px-2"
            />
          </div>
          <div>
            <span className={bold}>แก้ไขล่าสุด : </span>
            <span className={regular}> test test test</span>
          </div>
        </div>
      </div>
      <button className="font-semibold text-lg border border-blue-500 text-blue-500 py-2 px-5 rounded-sm hover:bg-blue-500/[15%] transition-all duration-200">
        Submit
      </button>
    </div>
  );
}

export default Edit;
