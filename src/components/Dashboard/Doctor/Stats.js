"use client";

import { Grid, Box, Typography, Card } from "@mui/material";

const stats = [
  {
    title: "Appointments",
    value: "32",
    change: "-0.04%",
    icon: "/images/icons/add-event.svg",
  },
  {
    title: "Patients",
    value: "334",
    change: "+7%",
    icon: "/images/icons/examination.svg",
  },
  {
    title: "Operations",
    value: "12",
    change: "5.4%",
    icon: "/images/icons/scissors.svg",
  },
  {
    title: "Earnings",
    value: "$312",
    change: "-1.4%",
    icon: "/images/icons/money-bag.svg",
  },
];

const parseChange = (change) => {
  const numStr = change.replace("%", "").replace("+", "");
  return parseFloat(numStr);
};

const Stats = () => {
  return (
    <>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        {stats.map((stat) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} key={stat.title}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "7px",
                mb: "25px",
                padding: { xs: "25px" },
              }}
              className="rmui-card"
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography sx={{ mb: "5px" }}>{stat.title}</Typography>

                  <Typography
                    variant="h2"
                    sx={{
                      mb: "8px",
                      fontWeight: "900",
                      fontSize: { xs: "22px", md: "24px", lg: "28px" },
                    }}
                  >
                    {stat.value}
                  </Typography>

                  <Box
                    sx={{
                      background:
                        parseChange(stat.change) < 0 ? "#FFE8D4" : "#D8FFC8",
                      color:
                        parseChange(stat.change) < 0
                          ? "error.main"
                          : "success.main",
                      border: "1px solid",
                      borderColor:
                        parseChange(stat.change) < 0
                          ? "error.300"
                          : "success.300",
                      fontSize: "12px",
                      display: "inline-block",
                      borderRadius: "30px",
                      lineHeight: 1,
                      padding: "3px 10px",
                    }}
                  >
                    {stat.change}
                  </Box>
                </Box>
                <Box>
                  <img
                    src={stat.icon}
                    alt={stat.title}
                    width={46}
                    height={46}
                  />
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Stats;
