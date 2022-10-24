import React, { useEffect, useState } from "react";
import { KeyboardForm } from "../../component/form.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export function KeyboardUpdate() {
  const { keyboardId } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: "",
    title: "",
    img: "",
    description: "",
  });

  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:3000/keyboard" + "/" + keyboardId,
    })
      .then((res) => {
        if (res.status === 200 || res.statusText === "OK") {
          setValues(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange =
    (prop) =>
    ({ target }) => {
      setValues({ ...values, [prop]: target.value });
    };

  const updatedKeyboard = () => {
    axios({
      method: "put",
      url: "http://127.0.0.1:3000/keyboard",
      data: values,
    })
      .then((res) => {
        if (
          (res.status === 200 || res.statusText === "OK") &&
          res.data === "success"
        ) {
          return navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <KeyboardForm
      values={values}
      handleChange={handleChange}
      formSubmit={updatedKeyboard}
      isEdit={true}
    ></KeyboardForm>
  );
}
