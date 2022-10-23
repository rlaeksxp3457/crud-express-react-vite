import React, { useState } from "react";
import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  TextField,
  ThemeProvider,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      console.log(values);
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
    <Box
      component="form"
      noValidate
      display="flex"
      justifyContent="center"
      sx={{ backgroundColor: "dark" }}
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        width={340}
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
      >
        <div>
          <TextField
            label="Title"
            variant="outlined"
            value={values.title}
            onChange={handleChange("title")}
            fullWidth={true}
          />
        </div>
        <div>
          <TextField
            label="Img"
            variant="outlined"
            value={values.img}
            fullWidth={true}
            onChange={handleChange("img")}
          />
        </div>
        <div>
          <TextField
            id="description"
            label="description"
            variant="outlined"
            value={values.description}
            onChange={handleChange("description")}
            multiline={true}
            fullWidth={true}
          />
        </div>
        <Button variant="contained" fullWidth={true} onClick={createKeyboard}>
          생성
        </Button>
      </Box>
    </Box>
  );
}
