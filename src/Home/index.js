import {
  Box,
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import coupleImage from '../coupleimg.png'; // Couple Image
import qrCodeImage from '../qrcode.png';   // QR Code Image

const WeddingInvitation = () => {
  return (
    <>
      {/* Main Heading */}
      <Box
        sx={{
          textAlign: "center",
          background: "linear-gradient(to right, #FFD5E5, #FFF0F5)",
          padding: "30px",
        }}
      >
        {/* Islamic Greeting & Verse */}
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "22px" },
            color: "#D47474",
            fontStyle: "italic",
            fontFamily: "'Great Vibes', cursive",
            marginBottom: 2,
            lineHeight: "1.5em",
          }}
        >
          "And among His signs is that He created for you mates from among yourselves, 
          <br />
          that you may dwell in tranquility with them..."
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "40px" },
            fontWeight: "bold",
            color: "#B22222",
            fontFamily: "'Dancing Script', cursive",
          }}
        >
          Wedding Invitation
        </Typography>
      </Box>

      {/* Couple Image and Greeting */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ width: "100%", padding: "20px", textAlign: "center" }}
      >
        {/* Reduced Couple Image */}
        <img
          src={coupleImage}
          alt="Couple"
          style={{
            width: "100%",
            maxWidth: "280px", // Slightly larger for emphasis
            borderRadius: "15px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />

        {/* Greeting Quote */}
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Typography
            sx={{
              fontSize: { xs: "22px", md: "26px" },
              fontWeight: "bold",
              color: "#8B0000",
              fontFamily: "'Dancing Script', cursive",
            }}
          >
            "Two Souls, One Heart"
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "#696969",
              marginTop: 1,
              fontFamily: "'Lora', serif",
            }}
          >
            We invite you to join us as we embark on this journey of love and togetherness (Nikah).
          </Typography>
        </Box>
      </Box>

      {/* Faizan & Arshiya Names in Box */}
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          padding: "20px",
          backgroundColor: "#FFF5F7",
          borderRadius: "12px",
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "22px", md: "26px" },
            color: "#8B0000",
            fontWeight: "bold",
            fontFamily: "'Dancing Script', cursive",
          }}
        >
          Faizan
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            color: "#696969",
            marginTop: "10px",
            fontFamily: "'Lora', serif",
          }}
        >
          Son of Lt. K B Nazeer Ahmed
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography
          sx={{
            fontSize: { xs: "22px", md: "26px" },
            color: "#8B0000",
            fontWeight: "bold",
            fontFamily: "'Dancing Script', cursive",
          }}
        >
          Arshiya
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            color: "#696969",
            marginTop: "10px",
            fontFamily: "'Lora', serif",
          }}
        >
          Daughter of Mr. Alahuddin
        </Typography>
      </Box>

      {/* Accordion Section */}
      <Box sx={{ width: "100%", marginTop: 3, paddingX: { xs: 2, md: 5 } }}>
        {/* Accordion: When & Where */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: "18px", md: "22px" }, fontFamily: "'Lora', serif" }}
            >
              When & Where?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ textAlign: "center" }}>
              {/* Nikah Ceremony */}
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "24px" },
                  color: "#8B0000",
                  fontWeight: "bold",
                  fontFamily: "'Dancing Script', cursive",
                  marginBottom: 2,
                }}
              >
                Nikah Ceremony
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  color: "black",
                  marginBottom: 1,
                  fontFamily: "'Lora', serif",
                }}
              >
                Sunday, November 17, 2024 @ 11:55 AM
                <br />
                Neelifield Masjid, Ambur
              </Typography>

              <Divider sx={{ marginY: 2 }} />

              {/* Valima Reception */}
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "24px" },
                  color: "#8B0000",
                  fontWeight: "bold",
                  fontFamily: "'Dancing Script', cursive",
                  marginBottom: 2,
                }}
              >
                Valima Reception
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  color: "black",
                  fontFamily: "'Lora', serif",
                }}
              >
                on Same day After Zohar Namaz @ 01:30 pm
                <br />
                Jalalia Function Hall, Ambur
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* QR Code Section */}
      <Box sx={{ textAlign: "center", marginTop: 3 }}>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            color: "#8B0000",
            fontWeight: "bold",
            fontFamily: "'Lora', serif",
          }}
        >
          Scan to View Location
        </Typography>
        <img
          src={qrCodeImage}
          alt="QR Code"
          style={{
            width: "100px",
            height: "100px",
            marginTop: "10px",
          }}
        />
      </Box>
    </>
  );
};

export default WeddingInvitation;
