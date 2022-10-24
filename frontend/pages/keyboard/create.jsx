import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { KeyboardForm } from "../../component/form.jsx";

export function KeyboardCreate() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    title: "",
    img: "",
    description: "",
  });

  const handleChange =
    (prop) =>
    ({ target }) => {
      setValues({ ...values, [prop]: target.value });
    };
  const createKeyboard = () => {
    axios({
      method: "post",
      url: "http://127.0.0.1:3000/keyboard",
      data: values,
    })
      .then((res) => {
        if (res.data === "success") {
          return navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <KeyboardForm
      values={values}
      handleChange={handleChange}
      formSubmit={createKeyboard}
      isEdit={false}
    ></KeyboardForm>
  );
}
