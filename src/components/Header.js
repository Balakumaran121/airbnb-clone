import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "./Logo";
import { dFlex, flexBetweenCenter } from "../themes/commonStyles";

const Header = () => {
  return (
    <Box sx={{ ...dFlex, minHeight: 70, borderBottom: "1px solid #ddd" }}>
      <Container maxWidth="xl">
        <Box sx={{ ...flexBetweenCenter, minHeight: 70, px: 4 }}>
          <Logo />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
