import React, { useState } from "react";

const Form = ({ setLoading }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onDateChange = (event) => {
    setDate(event.target.value);
  };

  const onSubmit = () => {
    setLoading(true);
    fetch(
      "https://students-list-server.herokuapp.com/insert-student",
      // "http://localhost:3000/insert-student",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: name,
          dateofbirth: date,
        }),
      }
    )
    .then(() => window.location.reload());
  };

  return (
    <div>
      <fieldset>
        <input
          onChange={onNameChange}
          type="text"
          name="fullname"
          placeholder="Enter name"
        />
        <input
          onChange={onDateChange}
          type="text"
          name="dateofbirth"
          placeholder="Enter date of birth"
        />
        <button
          type="submit"
          onClick={onSubmit}
        >
          Add Student
        </button>
      </fieldset>
    </div>
  );
};

export default Form;
