import React from "react";
import { DisasterType } from "../mockups/mockups";
import { useDisaster } from "../context/DisasterContext";
import amphoe from "../mockups/amphoe.json";
import province from "../mockups/province.json";
import tambon from "../mockups/tambon.json";
import CancelBtn from "./buttons/CancelBtn";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import { useState } from "react";
import { toast } from "react-toastify";
import ReturnBtn from "./buttons/ReturnBtn";

function Add() {
  const navigate = useNavigate();
  const bold = "font-semibold text-xl  flex w-[8rem]";
  const regular = "text-xl";
  const {
    input,
    setInput,
    inputHandle,
    provinceOnChange,
    currentProvinceId,
    currentAmphoeId,
    amphoeOnChange,
    dateTimeOnChange,
    setAllDisaster,
    allDisaster,
  } = useDisaster();
  console.log(currentProvinceId);
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/disaster/create", input);
      // setAllDisaster([...allDisaster, res.data]);
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
      toast.success("เพิ่มรายงานสำเร็จ");
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const newAmphoe = amphoe.filter((x) => x.province_id === currentProvinceId);
  const newTambon = tambon.filter((x) => x.amphure_id === currentAmphoeId);

  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div className="flex flex-col items-center mt-[3rem] gap-[3rem]">
      <div className="relative right-[45%] -mb-[3rem]">
        <ReturnBtn onClick={() => navigate("/")} />
      </div>

      <h1 className="text-3xl font-semibold">เพิ่มรายงาน</h1>
      <div className="flex justify-between w-[70%]">
        <div id="left" className="flex flex-col gap-[3rem] w-full px-7">
          <div className="flex">
            <span className={bold}>ประเภท : </span>
            <select
              type=""
              value={input.obstacleTypeId}
              name="obstacleTypeId"
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: +e.target.value })
              }
              className="border outline-none text-xl px-2 w-[14rem]"
            >
              <option value="">---select---</option>
              {DisasterType.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex">
            <span className={bold}>รายละเอียด : </span>
            <input
              type="text"
              value={input.title}
              name="title"
              onChange={inputHandle}
              className="border outline-none text-xl px-2"
            />
          </div>
          <div className="flex">
            <span className={bold}>จังหวัด : </span>
            <select
              type="text"
              onChange={(e) => provinceOnChange(e)}
              className="border outline-none text-xl px-2"
            >
              <option value="">---select---</option>
              {province.map((province) => (
                <option
                  key={province.id}
                  value={JSON.stringify({
                    province: province["name_th"],
                    id: province.id,
                  })}
                >
                  {province["name_th"]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex">
            <span className={bold}>เขต : </span>
            <select
              onChange={(e) => amphoeOnChange(e)}
              className="border outline-none text-xl px-2"
              disabled={currentProvinceId ? false : true}
            >
              <option value="">---select---</option>
              {newAmphoe.map((x) => (
                <option
                  key={x.id}
                  value={JSON.stringify({ name: x.name_th, id: x.id })}
                >
                  {x.name_th}
                </option>
              ))}
            </select>
          </div>
          <div className="flex">
            {" "}
            <span className={`${bold} flex w-[7rem]`}>ตำบล : </span>
            <select
              onChange={inputHandle}
              className="border outline-none text-xl px-2"
              name="tambonName"
              disabled={currentAmphoeId ? false : true}
            >
              <option value="">---select---</option>
              {newTambon.map((x) => (
                <option key={x.id} value={x.name_th}>
                  {x.name_th}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div id="right" className="flex flex-col gap-[3rem] w-full px-[4rem]">
          <div className="flex">
            <span className={`${bold} flex w-[7rem]`}>วันที่เริ่ม :</span>
            <input
              name="startDate"
              type="datetime-local"
              className="border outline-none text-xl px-2"
              onChange={dateTimeOnChange}
            />
          </div>
          <div className="flex">
            <span className={`${bold} flex w-[7rem]`}>วันที่สิ้นสุด : </span>
            <input
              name="endDate"
              type="datetime-local"
              className="border outline-none text-xl px-2"
              onChange={dateTimeOnChange}
            />
          </div>
          <div className="flex">
            <span className={`${bold} flex w-[7rem]`}>สถานะ : </span>
            <select
              name="status"
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: +e.target.value })
              }
              className="border outline-none text-xl px-2"
            >
              <option value="">---select---</option>
              <option value="0">กำลังดำเนินการ</option>
              <option value="1">เสร็จสิ้น</option>
            </select>
          </div>
          <div className="flex">
            <span className={bold}>หมู่บ้าน : </span>
            <input
              type="text"
              value={input.moobanName}
              name="moobanName"
              onChange={inputHandle}
              className="border outline-none text-xl px-2"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <button
          className="font-semibold text-lg border border-blue-500 text-blue-500 py-2 px-5 rounded-sm hover:bg-blue-500/[15%] transition-all duration-200"
          onClick={handleAdd}
        >
          Submit
        </button>
        <CancelBtn />
      </div>
    </div>
  );
}

export default Add;
