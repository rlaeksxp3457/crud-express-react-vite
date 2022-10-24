import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function KeyBoardCard(props) {
  const navigate = useNavigate();
  const { keyboard, setKeyboard } = props;

  const deleteCard = () => {
    axios({
      method: "delete",
      url: "http://127.0.0.1:3000/keyboard",
      data: { id: props.item.id },
    })
      .then((res) => {
        if (res.data === "success") {
          setKeyboard(keyboard.filter((item) => item.id !== props.item.id));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    // card 를 클릭하면 상세 페이지
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.item.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/keyboard/update/${props.item.id}`)}
        >
          수정
        </Button>
        <Button size="small" onClick={deleteCard}>
          삭제
        </Button>
      </CardActions>
    </Card>
  );
}
