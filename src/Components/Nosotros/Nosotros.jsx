import Typography from "@mui/material/Typography";
import React from "react";

const Nosotros = () => {
  return (
    <div>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
        variant="h4"
        color="text.primary"
      >
        Hola somos MR.Rogel, las mejores tortas en tu casa
      </Typography>
    </div>
  );
};

export default Nosotros;
