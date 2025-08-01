"use client";

import { Grid, Box, Typography } from "@mui/material";

const Stats = () => {
  // Dynamic stats data
  const statsData = [
    {
      id: "1",
      title: "Total Value of all Crypto",
      value: "$597.655B",
    },
    {
      id: "2",
      title: "First Trade Volume",
      value: "$21.953M",
      description: "(1 Jan, 2025)",
    },
    {
      id: "3",
      title: "Last Trade Volume",
      value: "$25.965B",
      description: "(1 Nov, 2025)",
    },
    {
      id: "4",
      title: "Crypto Total Market Cap",
      value: "$1.36T",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: "url(/images/sparklines/sparkline-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        borderRadius: "7px",
        mb: "25px",
        paddingTop: { xs: "18px", sm: "20px", lg: "25px" },
        paddingX: { xs: "18px", sm: "20px", lg: "25px" },
        paddingBottom: { sm: "5px", lg: "10px" },
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        {statsData.map((stat) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={stat.id}>
            <Box
              className="bg-white"
              sx={{
                borderRadius: "7px",
                padding: { xs: "18px", sm: "20px", lg: "25px" },
                mb: "15px",
              }}
            >
              <Typography sx={{ mb: "8px" }}>{stat.title}</Typography>

              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "17px", md: "20px" }, fontWeight: 700 }}
              >
                {stat.value}
                {stat.description && (
                  <Typography
                    component="span"
                    className="text-body"
                    fontWeight={400}
                  >
                    {` ${stat.description}`}
                  </Typography>
                )}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stats;
