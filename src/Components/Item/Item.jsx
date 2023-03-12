import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Margin } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";

const Item = ({ e }) => {
  return (
    <Grid2>
      <Card sx={{ maxWidth: 345, marginTop: 10 }} xs={12} sm={6} md={3}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={e.img} />
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {e.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {e.description}
            </Typography>
            <Link
              to={`/itemDetail/${e.id}`}
              sx={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  marginTop: "10px",
                }}
                variant="contained"
                color="secondary"
              >
                Ver detalle
              </Button>
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid2>
  );
};

export default Item;
