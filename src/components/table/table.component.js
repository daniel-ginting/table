import React from "react";

import "./table.styles.scss";

const Table = ({ data }) => {
  return (
    <section>
      <h1>Fixed Table header</h1>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th>Fullname</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.fullname}</td>
                  <td>{item.dateofbirth} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
