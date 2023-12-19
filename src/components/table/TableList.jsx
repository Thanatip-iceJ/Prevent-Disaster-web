import React from "react";
import "./Table.css";
import TableItem from "./TableItem";

function TableList() {
  return (
    <div>
      <table className="table-fixed border-collapse border w-full">
        <thead>
          <tr>
            <th>id</th>
            <th colSpan={2}>รายละเอียด</th>
            <th>ประเภท</th>
            <th>สถานะ</th>
            <th>วันที่</th>
            <th>สถานะ?</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <TableItem />
        <TableItem />
        <TableItem />
      </table>
    </div>
  );
}

export default TableList;
