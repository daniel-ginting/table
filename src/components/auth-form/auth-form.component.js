import React, { useState } from "react";

import "./auth-form.styles.scss";

const AuthForm = ({ submitHandler }) => {
  const [code, setCode] = useState("");

  const onChangeHandler = (event) => {
    setCode(event.target.value);
  };

  const onSubmitHandler = () => {
    submitHandler(code);
  };
  return (
    <div className="form">
      <div className="title">Welcome!</div>
      <div className="subtitle">Fill in the secret code</div>
      <div className="input-container ic1">
        <input
          id="firstname"
          className="input"
          type="text"
          placeholder=" "
          onChange={onChangeHandler}
        />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">
          Secret code
        </label>
      </div>
      <button type="text" className="submit" onClick={onSubmitHandler}>
        Authenticate
      </button>
    </div>
  );
};

export default AuthForm;
