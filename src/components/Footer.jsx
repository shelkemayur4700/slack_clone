import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#F4ECE6", py: 6, px: 4 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left Side - video */}
        <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/X6Rg98WTzcQ?si=gdkTckxZDZbrhQO3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ borderRadius: "10px" }}
          ></iframe>
        </div>

        {/* Right Side - Text & Button */}
        <div style={{ flex: "1", padding: "20px" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Now is your moment to build a better tomorrow
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            We've seen what the future can be. Now it's time to decide what it
            will be.
          </Typography>
          <Button
            variant="outlined"
            sx={{ color: "#611f69", borderColor: "#611f69" }}
          >
            Watch video
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
