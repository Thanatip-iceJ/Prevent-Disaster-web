import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import { useEffect } from "react";
import dateFormat from "dateformat";
import { toast } from "react-toastify";

const DisasterContext = createContext();

function DisasterContextProvider({ children }) {
  const [allDisaster, setAllDisaster] = useState(null);
  const [currentDisaster, setCurrentDisaster] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const [infoLoading, setInfoLoading] = useState(false);
  const [input, setInput] = useState({
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
  const [editInput, setEditInput] = useState(null);
  const [currentProvinceId, setCurrentProvinceId] = useState(null);
  const [currentAmphoeId, setCurrentAmphoeId] = useState(null);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [currentDisId, setCurrentDisId] = useState(null);

  const getById = async (disId) => {
    try {
      setInfoLoading(true);
      const res = await axios.get(`/disaster/${disId}`);
      console.log("Res data =>>", res.data);
      setCurrentDisaster(res.data[0]);
      console.log("CURRENT =>", currentDisaster);
    } catch (err) {
      console.log(err);
    } finally {
      setInfoLoading(false);
    }
  };

  const provinceOnChange = (e) => {
    const target = JSON.parse(e.target.value);
    console.log(target.province, target.id, input);
    setInput({ ...input, provinceName: target.province });
    setCurrentProvinceId(target.id);
  };
  const amphoeOnChange = (e) => {
    const target = JSON.parse(e.target.value);
    console.log(target.name, target.id);
    setInput({ ...input, amphoeName: target.name });
    setCurrentAmphoeId(target.id);
  };
  const editProvinceOnChange = (e) => {
    const target = JSON.parse(e.target.value);
    console.log(target.province, target.id, input);
    setEditInput({ ...editInput, provinceName: target.province });
    setCurrentProvinceId(target.id);
  };
  const editAmphoeOnChange = (e) => {
    const target = JSON.parse(e.target.value);
    console.log(target.name, target.id);
    setEditInput({ ...editInput, amphoeName: target.name });
    setCurrentAmphoeId(target.id);
  };
  console.log("pv ID =>>", currentProvinceId);
  console.log("AMPHOE ID", currentAmphoeId);
  const inputHandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const dateTimeOnChange = (e) => {
    const formatted = dateFormat(e.target.value, "dd/mm/yyyy hh:MM");
    setInput({ ...input, [e.target.name]: formatted });
  };

  const editOnChange = (e) => {
    setEditInput({ ...editInput, [e.target.name]: e.target.value });
  };
  const editIntOnChange = (e) => {
    setEditInput({
      ...editInput,
      [e.target.name]: +e.target.value,
    });
  };
  const editDateTimeOnChange = (e) => {
    const formatted = dateFormat(e.target.value, "dd/mm/yyyy hh:MM");
    setEditInput({ ...editInput, [e.target.name]: formatted });
  };

  const editSubmit = async (id, nav) => {
    try {
      const now = new Date();
      editInput.updateDate = dateFormat(now, "dd/mm/yyyy hh:MM");
      const res = await axios.patch(`/disaster/edit/${id}`, editInput);
      setEditInput(null);
      nav("/");
      toast.success("แก้ไขรายงานเรียบร้อยแล้ว");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const sharedContexts = {
    allDisaster,
    setAllDisaster,
    currentDisaster,
    setCurrentDisaster,
    currentId,
    setCurrentId,
    getById,
    infoLoading,
    setInfoLoading,
    input,
    setInput,
    currentProvinceId,
    setCurrentProvinceId,
    currentAmphoeId,
    setCurrentAmphoeId,
    provinceOnChange,
    inputHandle,
    amphoeOnChange,
    dateTimeOnChange,
    editOnChange,
    editDateTimeOnChange,
    editIntOnChange,
    editInput,
    setEditInput,
    editAmphoeOnChange,
    editProvinceOnChange,
    editSubmit,
    isOpenDelete,
    setIsOpenDelete,
    currentDisId,
    setCurrentDisId,
  };
  return (
    <DisasterContext.Provider value={sharedContexts}>
      {children}
    </DisasterContext.Provider>
  );
}

export default DisasterContextProvider;

export const useDisaster = () => useContext(DisasterContext);
