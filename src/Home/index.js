import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import vmap from '../coupleimg.png';
import map from '../shared image (6).png';

const MyW = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
        sx={{
          width: "100%",
          height: "100vh",
          background: "linear-gradient(to bottom right, #ffcccb, #fff0f5)",  // Soft gradient for background
          textAlign: "center",
          padding: 2,
        }}
      >
        {/* Name Faizan */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginBottom: { xs: 2, md: 0 },
            fontFamily: "'Great Vibes', cursive", // Elegant font for names
            fontSize: { xs: "60px", md: "100px" },
            color: "#d47474",
          }}
        >
          Faizan
        </Box>

        {/* Divider/Decoration between Names */}
        <Divider
          sx={{
            width: "70%",
            maxWidth: { xs: "200px", md: "400px" },
            borderBottomWidth: 2,
            borderColor: "#d47474",
            marginY: 3,
          }}
        >
          <Typography sx={{ fontSize: { xs: "24px", md: "40px" }, color: "#d47474", fontFamily: "'Great Vibes', cursive" }}>
            &amp;
          </Typography>
        </Divider>

        {/* Name Arshiya */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            marginTop: { xs: 2, md: 0 },
            fontFamily: "'Great Vibes', cursive",
            fontSize: { xs: "60px", md: "100px" },
            color: "#d47474",
          }}
        >
          Arshiya
        </Box>
      </Box>

      {/* Image Section with Text */}
      <Box sx={{ textAlign: "center", marginTop: { xs: 3, md: 6 } }}>
        <img
          src={vmap}
          alt="Couple Image"
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        />

        {/* Invitation Text */}
        <Typography
          sx={{
            color: "grey",
            fontSize: { xs: "16px", md: "22px" },
            marginTop: 3,
            fontFamily: "'Dancing Script', cursive", // A celebratory script font
          }}
        >
          Solicits your gracious presence on the occasion of their marriage
        </Typography>

        {/* Date & Venue */}
        <Typography
          sx={{
            color: "#d47474",
            fontSize: { xs: "18px", md: "24px" },
            marginTop: 2,
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          Nikah
        </Typography>
        <Typography
          sx={{
            color: "#d47474",
            fontSize: { xs: "18px", md: "24px" },
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          
        </Typography>

        {/* Map Image */}
        <Box>
          <img
            src={map}
            alt="Map"
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              marginTop: 20,
              borderRadius: "10px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default MyW;
