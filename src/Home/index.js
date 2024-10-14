import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import vmap from '../coupleimg.png';
import map from '../thanks.jpg';

const MyW = () => {
  return (
    <>
      {/* Invitation Header */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
          width: "100%",
          background: "linear-gradient(to bottom right, #ffcccb, #fff0f5)",  // Soft gradient for background
          textAlign: "center",
          padding: 2,
          fontFamily: "'Dancing Script'", // A script font for elegance
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "10px", md: "12px" },
            color: "#d47474",
          }}
        >
          In the name of Allah, the Most Gracious, the Most Merciful
        </Typography>
        
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "28px" },
            marginTop: 1,
            color: "grey",
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          We are glad to invite you for the marriage of
        </Typography>
      </Box>

      {/* Couple Names */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
        sx={{
          width: "100%",
          height: "70vh",
          textAlign: "center",
          padding: 1.8,
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
            fontSize: { xs: "58px", md: "100px" },
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
          alt="Couple Imae"
          style={{
            width: "110%",
            maxWidth: "320px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        />
 <Box  sx={{ border:'2px solid grey',borderRadius:'25px'}}>
        {/* Invitation Text */}
        <Typography
          sx={{
            color: "black",
            fontSize: { xs: "16px", md: "22px" },
            marginTop: 3,
            fontFamily: "'Dancing Script', cursive", // A celebratory script font
          }}
        >
          Solicits your gracious presence on the occasion 
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
        
        {/* Map Image */}
       
        <Typography
          sx={{
            color: "black",
            fontSize: { xs: "16px", md: "22px" },
            marginTop: 3,
            fontFamily: "'Dancing Script', cursive", // A celebratory script font
          }}
        >
          on sunday November 17,2024 @ 11.55 am sharp at Neelifield Masjid,Ambur
        </Typography>

        <Typography
          sx={{
            color: "#d47474",
            fontSize: { xs: "18px", md: "24px" },
            marginTop: 2,
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          Valima 
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontSize: { xs: "16px", md: "22px" },
            marginTop: 3,
            fontFamily: "'Dancing Script', cursive", // A celebratory script font
          }}
        >
          on same day after zohar namaz at jalalia function hall,Near Mazhar Uloom High School,Ambur
        </Typography>
        </Box>
          <img
            src={map}
            alt="Map"
            style={{
              width: "110%",
              // maxWidth: "300px",
              height: "auto",
              marginTop: 20,
              borderRadius: "10px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          />
        
      </Box>
    </>
  );
};

export default MyW;
