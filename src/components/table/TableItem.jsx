import React from "react";
import Buttons from "../buttons/Buttons";
import "./Table.css";

function TableItem() {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td colSpan={2}>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td colSpan={2}>
          <div className="flex justify-center">
            <Buttons />
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default TableItem;
