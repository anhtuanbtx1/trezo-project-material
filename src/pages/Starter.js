import React from "react";
import { Link } from "react-router-dom";
import { Card, Box, Typography, Button } from "@mui/material";

const Starter = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Starter</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Starter</li>
        </ul>
      </div>

      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          paddingX: "25px",
          paddingY: { xs: "40px", sm: "60px", md: "70px", lg: "80px" },
          textAlign: "center",
        }}
        className="rmui-card"
      >
        <Box mb="30px">
          <img
            src="/images/starter.png"
            alt="starter-image"
            width={880}
            height={538}
          />
        </Box>

        <Typography
          variant="h4"
          className="text-black"
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            maxWidth: "550px",
            mb: "30px",
            mx: "auto",
            lineHeight: "1.5",
          }}
        >
          Create something beautiful, like a masterpiece or a really good
          sandwich.
        </Typography>

        <Link to="/dashboard/ecommerce/">
          <Button
            type="button"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: { xs: "13px", sm: "16px" },
              padding: { xs: "10px 20px", sm: "10px 24px" },
              color: "#fff !important",
              boxShadow: "none",
            }}
          >
            Getting Started
          </Button>
        </Link>
      </Card>
    </>
  );
};

export default Starter;
