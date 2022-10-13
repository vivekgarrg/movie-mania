import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { Stack } from "@mui/system";

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" sx={{ background: "#000051" }}>
      <Toolbar disableGutters sx={{ padding: "0 2rem" }}>
        <LiveTvIcon color="inherit" sx={{ marginRight: "1rem" }} />
        <Typography
          variant="h6"
          sx={{
            letterSpacing: "0.05em",
            fontFamily: "Poppins",
            display: "flex",
            flex: 1
          }}
        >
          Movie Mania
        </Typography>
        <Stack direction={"row"} spacing={1}>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              Home
            </Link>
          </Button>
          <Button sx={{ color: "white", display: "flex", alignItems: "center" }}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/favourites"
            >
              Favourites
            </Link>
            <FavoriteTwoToneIcon sx={{ color: "error.main", fontSize: "20px" }} />
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
