import React from "react";
import { Link } from "react-router-dom";  
import { Card, Typography } from "@mui/material"; 

const BlankPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Blank Page</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Blank Page</li>
        </ul>
      </div>

      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          p: { xs: "18px", sm: "20px", lg: "25px" }
        }}
        className="rmui-card"
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: '25px'
          }}
          className="text-black"
        >
          Content goes here!
        </Typography>
        
        <Typography>Hello World!</Typography>
      </Card>
    </>
  );
};

export default BlankPage;
