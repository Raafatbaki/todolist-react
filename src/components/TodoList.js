import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

// Components
import Todo from "./Todo";

// OTHERS
import { v4 as uuidv4 } from 'uuid';


const todos = [
  {
    id: uuidv4(),
    titel:"قراءةكتاب",
    details: "سسسسسسسسسسششب",
    isComplated: false
  },
  {
    id: uuidv4(),
    titel:"قراءةكتاب",
    details: "سسسسسسسسسسشffddشب",
    isComplated: false
  },  
  {
    id: uuidv4(),
    titel:"قراءةكتاب",
    details: "سسسسسسسسسسششب",
    isComplated: false
  }
]

export default function TodoList() {
  const todoJsx = todos.map((t) => {
    return <Todo key={t.id} titel={t.titel} details={t.details}/>
  })
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            مهامي
          </Typography>
          <Divider />

          {/* {Filter Button} */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            // value={alignment}
            exclusive
            // onChange={handleChange}
            aria-label="text alignment"
          >
            <ToggleButton value="">غير المنجز</ToggleButton>
            <ToggleButton value="">المنجز</ToggleButton>
            <ToggleButton value="">الكل</ToggleButton>
          </ToggleButtonGroup>
          {/* ===Filter Button=== */}

          {/* All Todo */}
          {todoJsx}

          {/* ===All Todo */}

          {/* INPUT + ADD BUTTON */}
          <Grid
            container
            style={{ marginTop: "20px"}}
            spacing={0}
          >
            <Grid
              xs={8}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="عنوان المهمة"
                variant="outlined"
              />
            </Grid>

            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                style={{ width: "100%", height: "100%" }}
                variant="contained"
              >
                إضافة
              </Button>
            </Grid>
          </Grid>
          {/*== INPUT + ADD BUTTON == */}

        </CardContent>
      </Card>
    </Container>
  );
}



{/* <Grid container spacing={0} style={{ marginTop: "20px" }}>
<Grid
  xs={8}
  display="flex"
  justifyContent="space-around"
  alignItems="center"
>
  <TextField
    style={{ width: "100%" }}
    id="outlined-basic"
    label="عنوان المهمة"
    variant="outlined"
  />
</Grid>
<Grid
  xs={4}
  display="flex"
  justifyContent="space-around"
  alignItems="center"
  style={{ background: "orange" }}
>
  sssssss
</Grid>
</Grid> */}