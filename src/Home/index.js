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
          padding: "20px",
        }}
      >
          {/* Islamic Greeting & Verse */}
          <Typography
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            color: "#D47474",
            fontStyle: "italic",
            marginBottom: 2,
          }}
        >
          "And among His signs is that He created for you mates from among yourselves, 
          <br />
          that you may dwell in tranquility with them..."
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "36px" },
            fontWeight: "bold",
            color: "#8B0000",
            fontFamily: "'Dancing Script', cursive",
          }}
        >
           
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
            maxWidth: "250px", // Smaller for mobile
            borderRadius: "10px",
          }}
        />

        {/* Greeting Quote */}
        <Box sx={{ textAlign: "center", marginTop: "15px" }}>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "24px" },
              fontWeight: "bold",
              color: "#8B0000",
            }}
          >
            "Two Souls, One Heart"
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "#696969",
              marginTop: 1,
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
          padding: "15px",
          backgroundColor: "#FFF5F7",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "24px" },
            color: "#8B0000",
            fontWeight: "bold",
          }}
        >
          Faizan
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            color: "#696969",
            marginTop: "10px",
          }}
        >
          Son of Mrs.K B Nazeer Ahmed
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "24px" },
            color: "#8B0000",
            fontWeight: "bold",
          }}
        >
          Arshiya
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            color: "#696969",
            marginTop: "10px",
          }}
        >
          Daughter of Mr. & Mrs. Alahuddin
        </Typography>
      </Box>

      {/* Accordion Section */}
      <Box sx={{ width: "100%", marginTop: 3, paddingX: { xs: 2, md: 5 } }}>
        {/* Accordion: When & Where */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: "18px", md: "22px" } }}
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
                  marginBottom: 2,
                }}
              >
                Nikah Ceremony
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  color: "#696969",
                  marginBottom: 1,
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
                  marginBottom: 2,
                }}
              >
                Valima Reception
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  color: "#696969",
                }}
              >
                Onsame day After Zohar Namaz
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
