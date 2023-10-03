import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function Todo() {
  return (
    <>
      <Card
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
              <Typography variant="h5" sx={{ textAlign: "right" }}>
                المهمة الاولى
              </Typography>
            </Grid>
            {/* Action Button */}
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <IconButton
                aria-label="delete"
                style={{
                  color: "#8bc34a",
                  background: "white",
                  border: "solid #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                style={{
                  color: "#8bc34a",
                  background: "white",
                  border: "solid #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                style={{
                  color: "#8bc34a",
                  background: "white",
                  border: "solid #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>
            </Grid>
            {/* ===Action Button=== */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
