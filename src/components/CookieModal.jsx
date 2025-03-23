import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const CookieModal = () => {
  return (
      {/* Footer & Cookie Banner */}
      <Box
        sx={{
          position: "fixed",
          bottom: 10,
          right: 10,
          bgcolor: "white",
          padding: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="body2">
          This website uses cookies to enhance user experience.
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{ mt: 1, bgcolor: "#611f69" }}
        >
          Accept All
        </Button>
      </Box>
  )
}

export default CookieModal