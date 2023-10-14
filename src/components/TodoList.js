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

// Components
import Todo from "./Todo";

export default function TodoList() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>مهامي</Typography>
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
          <Todo />
          {/* ===All Todo */}
        </CardContent>
      </Card>
    </Container>
  );
}
