import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useContext, useState } from "react";
import { useTodos, useTodosDispatch } from "../contexts/todosContext";
import { useToast } from "../contexts/Toastcontext";
import TextField from "@mui/material/TextField";

//Icon
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function Todo({ todo, showDelete, showUpdate }) {
  const todos = useTodos();
	const dispatch = useTodosDispatch();
  
  const { showHideToast } = useToast();

  // EVENT HANDLERS
  function handleCheckClick() {
    dispatch({ type: "toggledCompleted", payload: todo });
    showHideToast("Modified successfully");
  }

  function handleDeleteClick() {
    showDelete(todo);
  }

  function handleUpdateClick() {
    showUpdate(todo);
  }

  // ====== EVENT HANDLERS ======
  return (
    <>
      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          background: "#283593",
          color: "white",
          marginTop: 5,
        }}
      >
        <CardContent>
          <Grid container spacing={2} style={{ padding: "10px" }}>
            <Grid xs={8}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "left",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.title}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "left" }}>
                {todo.details}
              </Typography>
            </Grid>
            {/* Action Button */}
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {/* CHECK ICON BUTTON */}
              <IconButton
                onClick={() => {
                  handleCheckClick();
                }}
                className="iconButton"
                aria-label="delete"
                style={{
                  color: todo.isCompleted ? "white" : "#8bc34a",
                  background: todo.isCompleted ? "#8bc34a" : "white",
                  border: "solid #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>
              {/*== CHECK ICON BUTTON ==*/}

              {/* UPDATE ICON BUTTON */}
              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#1769aa",
                  background: "white",
                  border: "solid #1769aa 3px",
                }}
                onClick={handleUpdateClick}
              >
                <ModeEditOutlinedIcon />
              </IconButton>
              {/*== UPDATE ICON BUTTON ==*/}

              {/* DELETE BUTTON */}
              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  color: "#b23c17",
                  background: "white",
                  border: "solid #b23c17 3px",
                }}
                onClick={handleDeleteClick}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
              {/*=== DELETE BUTTON ===*/}
            </Grid>
            {/* ===Action Button=== */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
