import React from "react";
import Loading from "../loading/loading.component";

import "./table.styles.scss";

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
                <tr key={i}>
                  <td>{item.fullname}</td>
                  <td>{item !== null && item.dateofbirth.slice(0, 10)} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  };
  
  return (
    <section>
      <h1>Fixed Table header</h1>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            {console.log(data)}
            <tr>
              <th>Fullname</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">{renderTable()}</div>
    </section>
  );
};

export default Table;
