"use client";

import { Box, Typography, Card } from "@mui/material";

const NewCustomersThisMonth = () => {
  return (
    <>
      <Card
        sx={{
          position: "relative",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "25px" },
        }}
        className="rmui-card"
        style={{
          background: " linear-gradient(73deg, #23272E 0%, #343A46 100%)",
        }}
      >
        <Box>
          <Typography
            component={"span"}
            className="text-gray-400"
            sx={{
              display: "block",
              mb: "2px",
            }}
          >
            New customers this month
          </Typography>

          <Typography
            component={"h3"}
            className="text-white"
            sx={{
              mb: "20px",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            4,712
          </Typography>

          <Typography
            component={"span"}
            sx={{ display: "block", mb: "10px" }}
            className="text-gray-400"
          >
            Join Today
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/images/users/user36.jpg"
              alt="user-image"
              width={40}
              height={40}
              style={{
                borderRadius: "100%",
                border: "2px solid #fff",
              }}
              className="-mr-10"
            />
            <img
              src="/images/users/user37.jpg"
              alt="user-image"
              width={40}
              height={40}
              style={{
                borderRadius: "100%",
                border: "2px solid #fff",
              }}
              className="-mr-10"
            />
            <img
              src="/images/users/user38.jpg"
              alt="user-image"
              width={40}
              height={40}
              style={{
                borderRadius: "100%",
                border: "2px solid #fff",
              }}
              className="-mr-10"
            />
            <img
              src="/images/users/user39.jpg"
              alt="user-image"
              width={40}
              height={40}
              style={{
                borderRadius: "100%",
                border: "2px solid #fff",
              }}
              className="-mr-10"
            />
            <img
              src="/images/users/user40.jpg"
              alt="user-image"
              width={40}
              height={40}
              style={{
                borderRadius: "100%",
                border: "2px solid #fff",
              }}
              className="-mr-10"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "orange.main",
                border: "1px solid #fff",
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 600,
              }}
              className="-mr-10"
            >
              59
            </Box>
          </Box>
        </Box>

        <img
          src="/images/icons/4dot3.svg"
          alt="4dot"
          width={60}
          height={60}
          style={{
            position: "absolute",
            bottom: "0",
          }}
          className="po-right-0"
        />
      </Card>
    </>
  );
};

export default NewCustomersThisMonth;
