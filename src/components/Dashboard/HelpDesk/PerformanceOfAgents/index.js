"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  TableHead,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CustomDropdown from "./CustomDropdown";

function TablePaginationActions({ count, page, rowsPerPage, onPageChange }) {
  const theme = useTheme();

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        display: "flex",
        gap: "10px",
        padding: "0 20px",
      }}
    >
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        sx={{
          borderRadius: "4px",
          padding: "4px",
        }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>

      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        sx={{
          borderRadius: "4px",
          padding: "4px",
        }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
}

function createData(
  id,
  agentImage,
  agentName,
  totalTickets,
  openTickets,
  resolvedTickets,
  avgResolutionTime,
  satisfactionRate
) {
  return {
    id,
    agentImage,
    agentName,
    totalTickets,
    openTickets,
    resolvedTickets,
    avgResolutionTime,
    satisfactionRate,
  };
}

const rows = [
  createData(
    "#854",
    "/images/users/user12.jpg",
    "Oliver Khan",
    230,
    20,
    75,
    "2.5 hours",
    80
  ),
  createData(
    "#853",
    "/images/users/user13.jpg",
    "Ava Cooper",
    180,
    16,
    35,
    "1.4 hours",
    75
  ),
  createData(
    "#852",
    "/images/users/user14.jpg",
    "Isabella Evans",
    150,
    35,
    45,
    "3.2 hours",
    80
  ),
  createData(
    "#851",
    "/images/users/user15.jpg",
    "Mia Hughes",
    75,
    86,
    25,
    "4.5 hours",
    100
  ),
  createData(
    "#850",
    "/images/users/user16.jpg",
    "Noah Mitchell",
    320,
    90,
    10,
    "3.8 hours",
    80
  ),
  createData(
    "#849",
    "/images/users/user17.jpg",
    "Sophia Carter",
    120,
    55,
    20,
    "5.3 hours",
    60
  ),
  createData(
    "#848",
    "/images/users/user18.jpg",
    "Oliver Jake",
    250,
    20,
    75,
    "2.5 hours",
    80
  ),
  createData(
    "#847",
    "/images/users/user19.jpg",
    "Connor Cooper",
    180,
    16,
    35,
    "1.4 hours",
    75
  ),
  createData(
    "#846",
    "/images/users/user20.jpg",
    "Jacob Evans",
    170,
    35,
    45,
    "3.2 hours",
    45
  ),
  createData(
    "#845",
    "/images/users/user21.jpg",
    "Mia Thomas",
    75,
    90,
    30,
    "4.5 hours",
    67
  ),
  createData(
    "#844",
    "/images/users/user22.jpg",
    "Alexander",
    420,
    90,
    10,
    "2.8 hours",
    50
  ),
  createData(
    "#843",
    "/images/users/user23.jpg",
    "Charles",
    110,
    55,
    20,
    "1.3 hours",
    60
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const PerformanceOfAgents = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
        padding: { xs: "18px", sm: "20px", lg: "25px" },
      }}
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
        >
          Performance Of Agents
        </Typography>

        <CustomDropdown
          options={["This Day", "This Week", "This Month", "This Year"]}
          onSelect={(value) => console.log(value)}
          defaultLabel="This Week"
        />
      </Box>

      {/* Table */}
      <Box
        sx={{
          marginLeft: "-25px",
          marginRight: "-25px",
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
          <Table sx={{ minWidth: 1200 }}>
            <TableHead className="bg-primary-50">
              <TableRow
                sx={{
                  th: {
                    fontWeight: "500",
                    padding: "10px 24px",
                    fontSize: "14px",
                  },
                }}
              >
                {[
                  "ID",
                  "Agent Name",
                  "Total Tickets",
                  "Open Tickets",
                  "Resolved Tickets",
                  "Avg. Resolution Time",
                  "Satisfaction Rate",
                  "Action",
                ].map((header) => (
                  <TableCell key={header} className="text-black border-bottom">
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    td: {
                      padding: "15px 20px",
                      fontSize: "14px",
                    },
                  }}
                >
                  <TableCell className="border-bottom">{row.id}</TableCell>

                  <TableCell className="text-black border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontWeight: "500",
                      }}
                    >
                      <img
                        src={row.agentImage}
                        alt="Agent"
                        width={40}
                        height={40}
                        style={{ borderRadius: "50%" }}
                      />
                      {row.agentName}
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">
                    {row.totalTickets}
                  </TableCell>

                  <TableCell className="border-bottom">
                    {row.openTickets}
                  </TableCell>

                  <TableCell className="border-bottom">
                    {row.resolvedTickets}
                  </TableCell>

                  <TableCell className="border-bottom">
                    {row.avgResolutionTime}
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box
                      sx={{
                        background: `conic-gradient(#605DFF 0% ${row.satisfactionRate}%, #f1f1f1 ${row.satisfactionRate}%)`,
                        position: "relative",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          width: "80%",
                          height: "80%",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "10px",
                          }}
                          color="primary.main"
                        >
                          {row.satisfactionRate}%
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        aria-label="view"
                        color="primary"
                        sx={{ padding: "5px" }}
                      >
                        <i
                          className="material-symbols-outlined"
                          style={{ fontSize: "16px" }}
                        >
                          visibility
                        </i>
                      </IconButton>

                      <IconButton
                        aria-label="edit"
                        color="secondary"
                        sx={{ padding: "5px" }}
                      >
                        <i
                          className="material-symbols-outlined"
                          style={{ fontSize: "16px" }}
                        >
                          edit
                        </i>
                      </IconButton>

                      <IconButton
                        aria-label="delete"
                        color="error"
                        sx={{ padding: "5px" }}
                      >
                        <i
                          className="material-symbols-outlined"
                          style={{ fontSize: "16px" }}
                        >
                          delete
                        </i>
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell className="border-bottom" colSpan={8} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  slotProps={{
                    select: {
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                  sx={{
                    border: "none",

                    ".MuiToolbar-root": {
                      minHeight: "auto",
                      marginTop: "15px",
                    },
                  }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </Card>
  );
};

export default PerformanceOfAgents;
