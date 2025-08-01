"use client";

import * as React from "react"; 
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
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
import { MoreVert } from "@mui/icons-material";
import CustomDropdown from "./CustomDropdown.js";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

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
          padding: "6px",
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
          padding: "6px",
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

const defaultCustomers = [
  {
    id: "#001",
    name: "Johhna Loren",
    phone: "+321 427 8690",
    email: "loren123@gmail.com",
    service: "Nail Art",
    lastVisit: "17 Oct, 2024",
    status: "VIP",
    statusColor: "success",
    image: "/images/beauty-salon/user-1.png",
  },
  {
    id: "#002",
    name: "Skyler White",
    phone: "+321 427 3980",
    email: "skyqueen@gmail.com",
    service: "Hair Cut",
    lastVisit: "18 Oct, 2024",
    status: "Royal",
    statusColor: "primary",
    image: "/images/beauty-salon/user-2.png",
  },
  {
    id: "#003",
    name: "Walter Hartwell",
    phone: "+321 427 1122",
    email: "walterh@gmail.com",
    service: "Beard Trim",
    lastVisit: "19 Oct, 2024",
    status: "Gold",
    statusColor: "warning",
    image: "/images/beauty-salon/user-3.png",
  },
  {
    id: "#004",
    name: "Marie Schrader",
    phone: "+321 427 3344",
    email: "mariesch@gmail.com",
    service: "Facial",
    lastVisit: "20 Oct, 2024",
    status: "Silver",
    statusColor: "secondary",
    image: "/images/beauty-salon/user-4.png",
  },
  {
    id: "#005",
    name: "Hank Schrader",
    phone: "+321 427 5566",
    email: "hanksch@gmail.com",
    service: "Massage",
    lastVisit: "21 Oct, 2024",
    status: "VIP",
    statusColor: "success",
    image: "/images/beauty-salon/user-5.png",
  },
  {
    id: "#006",
    name: "Saul Goodman",
    phone: "+321 427 7788",
    email: "saulgoodman@gmail.com",
    service: "Manicure",
    lastVisit: "22 Oct, 2024",
    status: "Platinum",
    statusColor: "info",
    image: "/images/beauty-salon/user-6.png",
  },
  {
    id: "#007",
    name: "Jesse Pinkman",
    phone: "+321 427 9900",
    email: "jessiep@gmail.com",
    service: "Hair Coloring",
    lastVisit: "23 Oct, 2024",
    status: "Gold",
    statusColor: "warning",
    image: "/images/beauty-salon/user-7.png",
  },
  {
    id: "#008",
    name: "Gustavo Fring",
    phone: "+321 427 1234",
    email: "gusfring@gmail.com",
    service: "Shaving",
    lastVisit: "24 Oct, 2024",
    status: "Elite",
    statusColor: "error",
    image: "/images/beauty-salon/user-8.png",
  },
  {
    id: "#009",
    name: "Mike Ehrmantraut",
    phone: "+321 427 5678",
    email: "mikee@gmail.com",
    service: "Hair Cut",
    lastVisit: "25 Oct, 2024",
    status: "Silver",
    statusColor: "secondary",
    image: "/images/beauty-salon/user-9.png",
  },
  {
    id: "#010",
    name: "Lydia Rodarte",
    phone: "+321 427 9101",
    email: "lydiar@gmail.com",
    service: "Spa",
    lastVisit: "26 Oct, 2024",
    status: "Platinum",
    statusColor: "info",
    image: "/images/beauty-salon/user-1.png",
  },
];

const TopCustomers = ({ customers = defaultCustomers }) => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - customers.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
            Top Customers
          </Typography>

          <Box>
            <CustomDropdown
              options={["This Day", "This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="This Month"
            />
          </Box>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "0",
          }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 1050 }}>
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    padding: "0 14px 7px",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    color: "#8695aa",
                    fontWeight: 700,
                    letterSpacing: "1px",
                  },
                }}
              >
                <TableCell className="border-bottom">ID</TableCell>
                <TableCell className="border-bottom">CUSTOMER NAME</TableCell>
                <TableCell className="border-bottom">PHONE NO</TableCell>
                <TableCell className="border-bottom">EMAIL</TableCell>
                <TableCell className="border-bottom">
                  PROFFERED SERVICE
                </TableCell>
                <TableCell className="border-bottom">LAST VISIT</TableCell>
                <TableCell className="border-bottom">STATUS</TableCell>
                <TableCell
                  sx={{
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  ACTION
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? customers.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : customers
              ).map((customer) => (
                <TableRow
                  key={customer.id}
                  sx={{
                    td: {
                      padding: "10px 14px",
                      fontSize: { xs: "12px", md: "13px" },
                      fontWeight: 600,
                    },
                  }}
                >
                  <TableCell className="text-black border-bottom">
                    {customer.id}
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src={customer.image}
                        alt="user"
                        width={32}
                        height={32}
                        style={{ borderRadius: "100px" }}
                      />

                      <Box>
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: { xs: "12px", md: "14px" },
                          }}
                        >
                          {customer.name}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    {customer.phone}
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    {customer.email}
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    {customer.service}
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    {customer.lastVisit}
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box
                      sx={{
                        fontSize: "12px",
                        fontWeight: "500",
                        padding: "3px 8px",
                        borderRadius: "30px",
                        color: `${customer.statusColor}.500`,
                        border: "1px solid",
                        borderColor: `${customer.statusColor}.500`,
                        backgroundColor: `${customer.statusColor}`,
                        display: "inline-block",
                        lineHeight: 1,
                      }}
                    >
                      {customer.status}
                    </Box>
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    <Box className="text-end">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        sx={{ padding: "0" }}
                      >
                        <MoreVert sx={{ fontSize: "25px" }} />
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
                            boxShadow: "none",
                            mt: 0,
                            border: "1px solid #eee",

                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                          },
                        }}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        <MenuItem sx={{ gap: "5px", fontSize: "13px" }}>
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "17px" }}
                          >
                            edit
                          </i>
                          Edit
                        </MenuItem>

                        <MenuItem sx={{ gap: "5px", fontSize: "13px" }}>
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "17px" }}
                          >
                            visibility
                          </i>
                          View
                        </MenuItem>

                        <MenuItem sx={{ gap: "5px", fontSize: "13px" }}>
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "17px" }}
                          >
                            delete
                          </i>
                          Delete
                        </MenuItem>
                      </Menu>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={9} className="border-bottom" />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={9}
                  count={customers.length}
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
                  }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default TopCustomers;