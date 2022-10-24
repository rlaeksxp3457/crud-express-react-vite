import { Grid } from "@mui/material";
import { KeyBoardCard } from "../component/card.jsx";
import React, { useEffect, useState } from "react";
import axios from "axios";

export function Index() {
  const [keyboard, setKeyboard] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:3000/keyboard",
    })
      .then((res) => {
        if (res.status === 200 || res.statusText === "OK") {
          if (res.data.length === 0) {
            setShow(!show);
          }
          setKeyboard(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid
      container={true}
      justifyContent={"center"}
      alignContent={"center"}
      spacing={4}
      mt={10}
      direction="row"
    >
      {show ? (
        keyboard.map((item, index) => (
          <Grid
            item
            key={index}
            xs={6}
            md={4}
            lg={3}
            mx={"auto"}
            alignItems={"center"}
          >
            <KeyBoardCard
              item={item}
              keyboard={keyboard}
              setKeyboard={setKeyboard}
            ></KeyBoardCard>
          </Grid>
        ))
      ) : (
        <h1>상품이 존재하지 않습니다</h1>
      )}
    </Grid>
  );
}
