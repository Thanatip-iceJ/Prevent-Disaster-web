import React from "react";
import "./Table.css";
import TableItem from "./TableItem";
import { useDisaster } from "../../context/DisasterContext";

function TableList() {
  const { allDisaster } = useDisaster();
  return (
    <div>
      <table className="table-fixed border-collapse border w-full">
        <thead>
          <tr className="border border-gray-400">
            <th>id</th>
            <th colSpan={2}>รายละเอียด</th>
            <th>ประเภท</th>
            <th>สถานะ</th>
            <th>วันที่</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        {allDisaster?.map((x) => (
          <TableItem
            key={x.obstacleId}
            id={x.obstacleId}
            title={x.title}
            status={x.status}
            date={x.startDate}
            type={x.obstacleType[0].obstacleTypeName}
          />
        ))}
      </table>
    </div>
  );
}

export default TableList;
