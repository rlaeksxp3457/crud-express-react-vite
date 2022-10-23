import React from "react";
import { createTheme, CssBaseline, Fab, ThemeProvider } from "@mui/material";
import { Appbar } from "../layout/appbar.jsx";
import { Index } from "../pages/index.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import { KeyboardDetail } from "../pages/keyboard/detail.jsx";
import { KeyboardUpdate } from "../pages/keyboard/update.jsx";
import AddIcon from "@mui/icons-material/Add";
import { KeyboardCreate } from "../pages/keyboard/create.jsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

function App() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Appbar></Appbar>
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/keyboard">
            <Route
              path=":keyboardId"
              element={<KeyboardDetail></KeyboardDetail>}
            />
            <Route path="create" element={<KeyboardCreate></KeyboardCreate>} />
            <Route
              path="update/:keyboardId"
              element={<KeyboardUpdate></KeyboardUpdate>}
            />
          </Route>
        </Routes>
        <Fab
          sx={fabStyle}
          aria-label={"add"}
          onClick={() => navigate("/keyboard/create")}
        >
          {<AddIcon />}
        </Fab>
      </main>
    </ThemeProvider>
  );
}

export default App;
