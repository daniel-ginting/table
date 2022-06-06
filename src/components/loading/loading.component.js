import React from "react";

import "./loading.styles.scss";

const Loading = ({marginTop}) => {
  return (
    <div class="loading" style={{marginTop: marginTop}}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
