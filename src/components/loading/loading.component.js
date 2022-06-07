import React from "react";

import "./loading.styles.scss";

const Loading = ({marginTop}) => {
  return (
    <div className="loading" style={{marginTop: marginTop}}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
