"use client";

import * as React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  MenuItem,
  IconButton,
  Menu,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const UpcomingEpisodes = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // State to hold the fetched episodes
  const [episodes, setEpisodes] = React.useState([]);

  React.useEffect(() => {
    // Simulating API fetch
    const fetchEpisodes = async () => {
      const data = [
        {
          id: 1,
          title: "AI for Content Strategy",
          host: "Amanda Garcia",
          date: "October 20, 2024",
          image: "/images/podcast/notice-board-icon-1.svg",
          color: "purple.main",
        },
        {
          id: 2,
          title: "Secrets to Viral Marketing",
          host: "Sarah Johnson",
          date: "October 25, 2024",
          image: "/images/podcast/notice-board-icon-2.svg",
          color: "primary.main",
        },
        {
          id: 3,
          title: "Social Media Strategy",
          host: "David Chen",
          date: "October 28, 2024",
          image: "/images/podcast/notice-board-icon-3.svg",
          color: "orange.main",
        },
        {
          id: 4,
          title: "Content Trends for 2025",
          host: "Tom Richards",
          date: "November 3, 2024",
          image: "/images/podcast/notice-board-icon-4.svg",
          color: "info.main",
        },
      ];
      setEpisodes(data);
    };

    fetchEpisodes();
  }, []);

  return (
    <>
      <Box
        className="bg-white border"
        sx={{
          boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "7px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
          position: "relative",
          mb: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            mb: "15px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              mb: "0",
              fontWeight: 600,
            }}
          >
            Upcoming Episodes
          </Typography>

          <Box className="-mr-10">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                padding: "0",
              }}
            >
              <MoreVertIcon sx={{ fontSize: "22px" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,

                sx: {
                  overflow: "visible",
                  boxShadow: "0 4px 45px #0000001a",
                  mt: 0,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>Today</MenuItem>
              <MenuItem>Last 7 Days</MenuItem>
              <MenuItem>Last Month</MenuItem>
              <MenuItem>Last 1 Year</MenuItem>
              <MenuItem>All Time</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box
          sx={{
            marginLeft: { xs: "-18px", sm: "-20px", lg: "-25px" },
            marginRight: { xs: "-18px", sm: "-20px", lg: "-25px" },
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              borderRadius: "0",
            }}
            className="rmui-table"
          >
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableBody>
                {episodes.map((episode) => (
                  <TableRow
                    key={episode.id}
                    className="tlc-td-bp-none"
                    sx={{
                      td: {
                        padding: "13.2px 25px",
                      },
                    }}
                  >
                    <TableCell className="border-bottom">
                      <Box sx={{ display: "flex", gap: "10px" }}>
                        <Box
                          sx={{
                            backgroundColor: episode.color,
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={episode.image}
                            alt={episode.title}
                            width={20}
                            height={20}
                          />
                        </Box>

                        <Box>
                          <Typography
                            variant="h3"
                            sx={{
                              fontSize: "14px",
                              fontWeight: 500,
                              mb: "3px",
                            }}
                          >
                            {episode.title}
                          </Typography>

                          <Typography fontSize={12} mb={0}>
                            {episode.host}
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                              mt: "5px",
                            }}
                          >
                            <i className="ri-calendar-line text-primary"></i>

                            <Typography
                              sx={{ fontSize: "12px", fontWeight: 500 }}
                              className="text-primary"
                            >
                              {episode.date}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell className="text-end border-bottom">
                      <Button
                        className="border"
                        sx={{
                          width: "43px",
                          height: "43px",
                          minWidth: "auto",
                          borderRadius: "50%",
                          backgroundColor: "transparent",
                          color: "#B1BBC8",
                          fontSize: "22px",

                          "&:hover": {
                            backgroundColor: "primary.main",
                            borderColor: "primary.main",
                            color: "#fff !important",
                          },
                        }}
                      >
                        <i className="ri-arrow-right-up-line fs-24"></i>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default UpcomingEpisodes;
