import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import slack from "../assets/slack.png";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {
  return (
    <div>
      {" "}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // width: "70%",
            // border: "1px solid black",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <img src={slack} alt="slack" className="logo" />
            <Typography className="text">Product</Typography>
            <Typography>Enterprice</Typography>
            <Typography>Resources</Typography>
            <Typography>Pricing</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SearchIcon />
            <Button color="inherit">Sign In</Button>
            <Button variant="contained" sx={{ ml: 2, bgcolor: "#611f69" }}>
              Try for Free
            </Button>
            <Button
              variant="outlined"
              sx={{ ml: 2, color: "#611f69", borderColor: "#611f69" }}
            >
              Try for Free
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
