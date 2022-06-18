import React, { useState } from "react";
import { ReactComponent as Delete } from "../../assets/delete.svg";

const TableColumn = ({ item, setLoading }) => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnterHandler = () => {
    setIsHover(true);
  };

  const onMouseLeaveHandler = () => {
    setIsHover(false);
  };

  const onDeleteHandler = () => {
    setLoading(true)
    fetch(
      "https://agile-garden-36934.herokuapp.com/delete-student",
      // "http://localhost:3000/delete-student",
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: item.id,
        }),
      }
    ).then(() => window.location.reload());
  };
  return (
    <tr
      className="table-list"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <td>{item.fullname}</td>
      <td>{item !== null && item.dateofbirth.slice(0, 10)}</td>
      <td style={{ width: "5%", height: "45px" }}>
        {isHover && (
          <Delete onClick={onDeleteHandler} className="delete-icon" />
        )}
      </td>
    </tr>
  );
};

export default TableColumn;
