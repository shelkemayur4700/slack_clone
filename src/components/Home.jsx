import React from "react";
import { Button, Typography, Box, IconButton } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Navbar from "./Navbar";
import Notification from "./Notification";
import slack_image from "../assets/slack_image.png";
import Footer from "./Footer";

const Home = () => {
  return (
    <div
      className="mainContainer"
      style={{
        backgroundColor: "#F7EEE9",
        display: "flex",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Notification />

        {/* Hero Section */}
        <div style={{ display: "flex", padding: "40px", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <Typography variant="h3" fontWeight="bold">
              Slack is where the future works
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Transform the way you work with one place for everyone and
              everything you need to get stuff done.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" sx={{ bgcolor: "#611f69", mr: 2 }}>
                Try for Free
              </Button>
              <Button variant="outlined">Sign Up with Google</Button>
            </Box>
          </div>
          <div
            style={{
              flex: 1,
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={slack_image}
              alt="Slack Chat"
              style={{ width: "350px", borderRadius: "10px" }}
            />
            {/* Floating Chips */}
            <IconButton
              sx={{
                position: "absolute",
                top: "-20px",
                right: "200px",
                backgroundColor: "white",
                boxShadow: 2,
                borderRadius: "20px",
              }}
            >
              <ThumbUpAltIcon sx={{ color: "#ff9800" }} />
              <Typography sx={{ fontSize: "12px", marginLeft: "5px" }}>
                3
              </Typography>
            </IconButton>
            <IconButton
              sx={{
                position: "absolute",
                bottom: "50px",
                right: "-15px",
                backgroundColor: "white",
                boxShadow: 2,
                borderRadius: "20px",
              }}
            >
              <EmojiObjectsIcon sx={{ color: "#ffeb3b" }} />
              <Typography sx={{ fontSize: "12px", marginLeft: "5px" }}>
                8
              </Typography>
            </IconButton>
            <IconButton
              sx={{
                position: "absolute",
                top: "150px",
                left: "-10px",
                backgroundColor: "white",
                boxShadow: 2,
                borderRadius: "20px",
              }}
            >
              <CelebrationIcon sx={{ color: "#ff5722" }} />
              <Typography sx={{ fontSize: "12px", marginLeft: "5px" }}>
                5
              </Typography>
            </IconButton>
          </div>
        </div>

        {/* Client Logos */}
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {["FOX", "Lonely Planet", "Intuit", "Carvana", "Kiva", "Target"].map(
            (logo) => (
              <Typography key={logo} variant="h6">
                {logo}
              </Typography>
            )
          )}
        </div>

        <Footer />

        {/* Footer & Cookie Banner */}
        <Box
          sx={{
            position: "fixed",
            bottom: 10,
            right: 10,
            bgcolor: "white",
            padding: 2,
            boxShadow: 3,
            width: "25%",
          }}
        >
          <Typography variant="body2">
            This website uses cookies to enhance user experience, analyze site
            traffic, and personalize content. By continuing to use this site,
            you consent to our use of cookies.
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{ mt: 1, bgcolor: "#611f69" }}
          >
            Accept All
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Home;
