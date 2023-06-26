import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import { pink } from "@mui/material/colors";

const choices = [
  { id: 1, text: "AnyWhere" },
  { id: 2, text: "Any week" },
  { id: 3, text: "Add guest", withIcon: true },
];
const LocationSearch = () => {
  return (
    <Paper
      sx={{
        borderRadius: 20,
        ml: 1,
      }}
      elevation={3}
    >
      <Stack
        sx={{ borderRadius: 20, pl: 2 }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {choices.map((choice) => (
          <Button key={choice.id}>
            <Typography
              sx={{
                color: (theme) => theme.palette.text.primary,
                fontWeight: "bold",
              }}
            >
              {choice.text}
            </Typography>
            {choice.withIcon && (
              <Box sx={{ mr: 1, ml: 1, mt: 1 }}>
                <IoSearchCircleSharp color={pink[500]} size={32} />
              </Box>
            )}
          </Button>
        ))}
      </Stack>
    </Paper>
  );
};

export default LocationSearch;
