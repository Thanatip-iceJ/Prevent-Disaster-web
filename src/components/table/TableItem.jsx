import React from "react";
import Buttons from "../buttons/Buttons";
import "./Table.css";
import True from "../status/True";
import False from "../status/False";

function TableItem({ id, title, type, status, date }) {
  const newDate = date.split(" ")[0];
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td colSpan={2}>{title}</td>
        <td>{type || "something is wrong"}</td>
        <td>{status ? <True /> : <False />}</td>
        <td>{newDate || "ไม่ระบุ"}</td>
        <td colSpan={2}>
          <div className="flex justify-center">
            <Buttons disId={id} />
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default TableItem;
