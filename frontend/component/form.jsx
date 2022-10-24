import React from "react";
import { Box, Button, TextField } from "@mui/material";

export function KeyboardForm(props) {
  const { values, handleChange, formSubmit, isEdit } = props;
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
        <Button variant="contained" fullWidth={true} onClick={formSubmit}>
          {isEdit ? "수정" : "생성"}
        </Button>
      </Box>
    </Box>
  );
}
