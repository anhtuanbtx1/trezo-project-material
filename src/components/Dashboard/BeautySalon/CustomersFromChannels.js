"use client";

import { Card, Box, Typography } from "@mui/material";

const channelsData = [
  {
    id: 1,
    icon: "/images/beauty-salon/facebook.svg",
    name: "Facebook",
    type: "Community",
    progress: 50,
    progressBarColor: "#757DFF",
    progressBgColor: "#DDE4FF",
  },
  {
    id: 2,
    icon: "/images/beauty-salon/dribbble.svg",
    name: "Dribbble",
    type: "Community",
    progress: 75,
    progressBarColor: "#5DA8FF",
    progressBgColor: "#DAEBFF",
  },
  {
    id: 3,
    icon: "/images/beauty-salon/instagram.svg",
    name: "Instagram",
    type: "Reel",
    progress: 30,
    progressBarColor: "#FE7A36",
    progressBgColor: "#FFE8D4",
  },
  {
    id: 4,
    icon: "/images/beauty-salon/google2.svg",
    name: "Google",
    type: "SEO & PPC",
    progress: 20,
    progressBarColor: "#58F229",
    progressBgColor: "#D8FFC8",
  },
];

const CustomersFromChannels = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Box sx={{ mb: "10px", pb: "10px" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Customers From Channels
          </Typography>
        </Box>

        <>
          {channelsData.map((channel) => (
            <Box
              key={channel.id}
              className="border-bottom lcbpm-none"
              sx={{
                mb: "21px",
                pb: "21px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <Box sx={{ flexShrink: 0 }}>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <img
                      src={channel.icon}
                      alt={channel.name}
                      width={30}
                      height={30}
                    />

                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: 1,
                          mb: "2px",
                        }}
                      >
                        {channel.name}
                      </Typography>

                      <Typography fontSize={"12px"}>{channel.type}</Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: "10px",
                    }}
                  >
                    <Box sx={{ width: { xs: "80px", sm: "120px" } }}>
                      <Box
                        sx={{
                          borderRadius: "30px",
                          height: "8px",
                          backgroundColor: channel.progressBgColor,
                        }}
                      >
                        <Box
                          sx={{
                            width: `${channel.progress}%`,
                            height: "8px",
                            backgroundColor: channel.progressBarColor,
                            borderRadius: "30px",
                          }}
                        ></Box>
                      </Box>
                    </Box>

                    <span className="count text-body fs-12">
                      {channel.progress}%
                    </span>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </>
      </Card>
    </>
  );
};

export default CustomersFromChannels;
