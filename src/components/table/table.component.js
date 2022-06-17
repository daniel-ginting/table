import React from "react";
import Loading from "../loading/loading.component";


import "./table.styles.scss";
import TableColumn from "../table-column/table-column.component";

const Table = ({ data }) => {
  const renderTable = () => {
    if (data === null) {
      return <Loading marginTop="30px" />;
    } else if (typeof data === "object" && data.length === 0) {
      return "There's currently no data";
    } else {
      return (
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            {data.map((item, i) => {
              return (
                <TableColumn item={item} key={i}/>
              );
            })}
          </tbody>
        </table>
      );
    }
  };

  return (
    <section>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            {console.log(data)}
            <tr>
              <th>Fullname</th>
              <th>Date of Birth</th>
              <th style={{width: '5%'}}></th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">{renderTable()}</div>
    </section>
  );
};

export default Table;
