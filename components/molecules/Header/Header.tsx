import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        py: 2,
        textAlign: "center",
        backgroundColor: "#00000070",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <Typography sx={{ color: "white", fontSize: "1.5rem" }}>
        Innovix
      </Typography>
      <Typography sx={{ color: "white", fontSize: "1.5rem" }}>
        Prueba React
      </Typography>
    </Box>
  );
};

export default Header;
