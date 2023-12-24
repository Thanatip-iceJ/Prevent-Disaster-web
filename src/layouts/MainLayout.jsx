import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import DeleteModal from "../components/modal/DeleteModal";
import { useDisaster } from "../context/DisasterContext";

function MainLayout() {
  const { setIsOpenDelete, isOpenDelete } = useDisaster();
  return (
    <>
      <div className={`mb-[3rem] mt-[6rem] ${isOpenDelete && "blur-md"}`}>
        <Header />
        <div id="container" className="container m-auto">
          <Outlet />
        </div>
      </div>
      {isOpenDelete && <DeleteModal />}
    </>
  );
}

export default MainLayout;
