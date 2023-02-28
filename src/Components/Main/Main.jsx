import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
const Main = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "steelblue",
      }}
    >
      {" "}
      <Grid container>
        <Grid item xs={12} sm={6} md={3} border={5} borderColor={"red"}>
          <h2>hola 1</h2>
        </Grid>
        <Grid item xs={12} sm={6} md={3} border={5} borderColor={"red"}>
          <h2>hola 2</h2>
        </Grid>
        <Grid item xs={12} sm={6} md={3} border={5} borderColor={"red"}>
          <h2>hola 3</h2>
        </Grid>
        <Grid item xs={12} sm={6} md={3} border={5} borderColor={"red"}>
          <h2>hola 4</h2>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
