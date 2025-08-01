"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const AgentsPerformanceOverview = () => {
  const [data, setData] = useState([]);
  const [topAgent, setTopAgent] = useState(null);
  const [timeRange] = useState("Last Month");

  useEffect(() => {
    const fetchData = async () => {
      const agentsData = [
        {
          id: 1,
          name: "John Smith",
          calls: 380,
          avgCallDuration: "3 mins 45 secs",
          fcr: 92,
          csat: 92,
          statusColor: "success.500",
          image: "/images/users/user61.jpg",
        },
        {
          id: 2,
          name: "Sarah Davis",
          calls: 65,
          avgCallDuration: "4 mins 10 secs",
          fcr: 85,
          csat: 90,
          statusColor: "success.500",
          image: "/images/users/user62.jpg",
        },
        {
          id: 3,
          name: "Michael Brown",
          calls: 58,
          avgCallDuration: "5 mins 20 secs",
          fcr: 82,
          csat: 87,
          statusColor: "orange.500",
          image: "/images/users/user63.jpg",
        },
        {
          id: 4,
          name: "Emily Johnson",
          calls: 72,
          avgCallDuration: "4 mins 30 secs",
          fcr: 88,
          csat: 90,
          statusColor: "success.500",
          image: "/images/users/user64.jpg",
        },
        {
          id: 5,
          name: "David Lee",
          calls: 53,
          avgCallDuration: "3 mins 50 secs",
          fcr: 80,
          csat: 85,
          statusColor: "orange.500",
          image: "/images/users/user65.jpg",
        },
      ];

      setData(agentsData);

      const topAgent = agentsData.reduce((prev, current) =>
        prev.csat > current.csat ? prev : current
      );
      setTopAgent(topAgent);
    };

    fetchData();
  }, [timeRange]);

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
        px: { xs: "18px", sm: "20px", lg: "25px" },
        pt: { xs: "18px", sm: "20px", lg: "25px" },
        pb: { xs: "13px", sm: "15px", lg: "20px" },
      }}
      className="rmui-card"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "25px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
          }}
          className="text-black"
        >
          Agents Performance Overview
        </Typography>

        <Box>
          <CustomDropdown
            options={["This Day", "This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="This Year"
          />
        </Box>
      </Box>

      <Box>
        {topAgent && (
          <Box>
            <Typography
              component={"span"}
              sx={{ display: "block", mb: "10px" }}
            >
              Top Performing Agent
            </Typography>

            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
              <Grid size={{ xs: 12, sm: 12, md: 5 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box sx={{ position: "relative" }}>
                    <img
                      src={topAgent.image}
                      alt={topAgent.name}
                      width={40}
                      height={40}
                      style={{ borderRadius: "4px" }}
                    />

                    <Box
                      className="po-right-0 -mr-4"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        bgcolor: `${topAgent.statusColor}`,
                      }}
                    ></Box>
                  </Box>

                  <Box>
                    <Typography
                      variant="h5"
                      className="text-black"
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        mb: "0",
                      }}
                    >
                      {topAgent.name}
                    </Typography>

                    <Typography className="text-black">
                      {topAgent.calls} Calls
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 7 }}>
                <Box sx={{ mt: { xs: "10px", md: "0" } }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: "5px",
                    }}
                  >
                    <Typography>Customer Satisfaction (CSAT)</Typography>
                    <Typography>{topAgent.csat}%</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "6px",
                      overflow: "hidden",
                      borderRadius: "4px",
                      bgcolor: "grey.100",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: "6px",
                        overflow: "hidden",
                        borderRadius: "4px",
                        bgcolor: `${topAgent.statusColor}`,
                      }}
                      style={{ width: `${topAgent.csat}%` }}
                    ></Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "0",
            mt: { xs: "15px", md: "20px" },
          }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 500 }}>
            <TableBody>
              {data.map((agent) => (
                <React.Fragment key={agent.id}>
                  <TableRow
                    key={agent.id}
                    sx={{
                      td: {
                        padding: "8px 9px",
                        fontSize: { xs: "12px", md: "14px" },
                      },
                    }}
                  >
                    <TableCell className="border-none bg-gray-50">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box sx={{ position: "relative", flexShrink: 0 }}>
                          <img
                            src={agent.image}
                            alt={agent.name}
                            width={40}
                            height={40}
                            style={{ borderRadius: "4px" }}
                          />

                          <Box
                            className="po-right-0 -mr-4"
                            sx={{
                              position: "absolute",
                              top: "50%",
                              transform: "translateY(-50%)",
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              bgcolor: `${agent.statusColor}`,
                            }}
                          ></Box>
                        </Box>

                        <Box>
                          <Typography
                            variant="h5"
                            className="text-black"
                            sx={{
                              fontWeight: 500,
                              fontSize: "14px",
                              mb: "0",
                            }}
                          >
                            {agent.name}
                          </Typography>
                          <Typography className="text-black">
                            {agent.calls} Calls
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell className="border-none bg-gray-50">
                      <Typography>Avg. Call Duration</Typography>

                      <Typography
                        className="text-black"
                        sx={{ fontWeight: 500 }}
                      >
                        {agent.avgCallDuration}
                      </Typography>
                    </TableCell>

                    <TableCell className="border-none bg-gray-50">
                      <Typography>FCR</Typography>

                      <Typography
                        className="text-black"
                        sx={{ fontWeight: 500 }}
                      >
                        {agent.fcr}%
                      </Typography>
                    </TableCell>

                    <TableCell className="border-none bg-gray-50">
                      <Typography>CSAT</Typography>

                      <Typography
                        className="text-black"
                        sx={{ fontWeight: 500 }}
                      >
                        {agent.csat}%
                      </Typography>
                    </TableCell>
                  </TableRow>

                  {/* Empty Row for Gap */}
                  <TableRow
                    sx={{
                      td: {
                        padding: "5px",
                      },
                    }}
                  >
                    <TableCell colSpan={4} className="border-none" />
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Card>
  );
};

export default AgentsPerformanceOverview;
