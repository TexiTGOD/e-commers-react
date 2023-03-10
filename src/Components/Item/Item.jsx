import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Margin } from "@mui/icons-material";
import Button from "@mui/material/Button";

const Item = ({ e }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
          <Button
            style={{
              marginTop: "10px",
            }}
            variant="contained"
            color="secondary"
          >
            Ver detalle
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
