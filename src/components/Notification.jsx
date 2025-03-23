import { IconButton, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const Notification = () => {
  return (
    <div
      className="notification_container"
      style={{
        backgroundColor: "#00659F",
        borderRadius: 30,
        display: "flex",
        padding: 18,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography style={{ color: "white" }}>
        Slack is your digital HQ.Meet the new features teams connected in
        work-from-anywhere world. Lets go
      </Typography>
      <CloseIcon sx={{ color: "white" }} />
    </div>
  );
};

export default Notification;
