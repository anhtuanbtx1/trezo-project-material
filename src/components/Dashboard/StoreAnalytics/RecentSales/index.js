"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  TableHead,
} from "@mui/material"; 
import CustomDropdown from "./CustomDropdown";

const RecentSales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Simulate an API call to fetch recent sales data
    setTimeout(() => {
      const data = [
        {
          ref: "#001",
          customerName: "Johhna Loren",
          customerImage: "/images/store-analytics/user-1.png",
          grandTotal: "$6240",
          paidStatus: "Paid",
          paymentMethod: {
            name: "PayPal",
            logo: "/images/store-analytics/paypal.png",
          },
          status: {
            label: "Completed",
            statusColor: "success",
          },
        },
        {
          ref: "#002",
          customerName: "Skyler White",
          customerImage: "/images/store-analytics/user-2.png",
          grandTotal: "$5135",
          paidStatus: "Due",
          paymentMethod: {
            name: "Wise",
            logo: "/images/store-analytics/wise.png",
          },
          status: {
            label: "Pending",
            statusColor: "purple",
          },
        },
        {
          ref: "#003",
          customerName: "Alice Johnson",
          customerImage: "/images/store-analytics/user-3.png",
          grandTotal: "$4320",
          paidStatus: "Paid",
          paymentMethod: {
            name: "Visa",
            logo: "/images/store-analytics/visa.png",
          },
          status: {
            label: "Failed",
            statusColor: "error",
          },
        },
        {
          ref: "#004",
          customerName: "Bob Smith",
          customerImage: "/images/store-analytics/user-4.png",
          grandTotal: "$2980",
          paidStatus: "Due",
          paymentMethod: {
            name: "Mastercard",
            logo: "/images/store-analytics/mastercard.png",
          },
          status: {
            label: "Pending",
            statusColor: "purple",
          },
        },
        {
          ref: "#005",
          customerName: "Charlie Brown",
          customerImage: "/images/store-analytics/user-5.png",
          grandTotal: "$5590",
          paidStatus: "Paid",
          paymentMethod: {
            name: "American Express",
            logo: "/images/store-analytics/amex.png",
          },
          status: {
            label: "Completed",
            statusColor: "success",
          },
        },
        {
          ref: "#006",
          customerName: "Dana White",
          customerImage: "/images/store-analytics/user-1.png",
          grandTotal: "$6100",
          paidStatus: "Due",
          paymentMethod: {
            name: "Discover",
            logo: "/images/store-analytics/discover.png",
          },
          status: {
            label: "Pending",
            statusColor: "purple",
          },
        },
        {
          ref: "#007",
          customerName: "Eleanor Rigby",
          customerImage: "/images/store-analytics/user-2.png",
          grandTotal: "$4750",
          paidStatus: "Paid",
          paymentMethod: {
            name: "Stripe",
            logo: "/images/store-analytics/stripe.png",
          },
          status: {
            label: "Completed",
            statusColor: "success",
          },
        },
        {
          ref: "#008",
          customerName: "Frank Castle",
          customerImage: "/images/store-analytics/user-3.png",
          grandTotal: "$3890",
          paidStatus: "Due",
          paymentMethod: {
            name: "Payoneer",
            logo: "/images/store-analytics/payoneer.png",
          },
          status: {
            label: "Pending",
            statusColor: "purple",
          },
        },
        {
          ref: "#009",
          customerName: "Grace Hopper",
          customerImage: "/images/store-analytics/user-4.png",
          grandTotal: "$5220",
          paidStatus: "Paid",
          paymentMethod: {
            name: "Google Pay",
            logo: "/images/store-analytics/googlepay.png",
          },
          status: {
            label: "Completed",
            statusColor: "success",
          },
        },
        {
          ref: "#010",
          customerName: "Henry Cavill",
          customerImage: "/images/store-analytics/user-5.png",
          grandTotal: "$4475",
          paidStatus: "Due",
          paymentMethod: {
            name: "Apple Pay",
            logo: "/images/store-analytics/applepay.png",
          },
          status: {
            label: "Pending",
            statusColor: "purple",
          },
        },
      ];

      setSales(data);
      setLoading(false);
    }, 1000);
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(sales.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSales = sales.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  const goToPrevPage = () =>
    currentPage > 1 && setCurrentPage((prev) => prev - 1);
  const goToNextPage = () =>
    currentPage < totalPages && setCurrentPage((prev) => prev + 1);

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
            flexWrap: "wrap",
            gap: "15px",
            mb: "10px",
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
            Recent Sales
          </Typography>

          <CustomDropdown
            options={["This Day", "This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="This Month"
          />
        </Box>

        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              borderRadius: "0",
            }}
            className="rmui-table"
          >
            <Table sx={{ minWidth: 800 }}>
              <TableHead>
                <TableRow
                  className="border-bottom"
                  sx={{
                    "& th": {
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#8695aa",
                      padding: "15px 8px",
                    },
                  }}
                >
                  <th className="text-start">REF</th>

                  <th className="text-start">CUSTOMER</th>

                  <th className="text-start">GRAND TOTAL</th>

                  <th className="text-start">PAID</th>

                  <th className="text-start">PAYMENT METHOD</th>

                  <th className="text-end">STATUS</th>
                </TableRow>
              </TableHead>

              <TableBody>
                {(currentSales.length ? currentSales : sales).map(
                  (sale, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "& td": {
                          padding: "13px 8px",
                          fontSize: "12px",
                          fontWeight: 600,
                        },
                      }}
                    >
                      <TableCell className="border-bottom text-black">
                        {sale.ref}
                      </TableCell>

                      <TableCell className="border-bottom">
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={sale.customerImage}
                            alt={sale.customerName}
                            width={35}
                            height={35}
                            style={{
                              borderRadius: "50%",
                            }}
                          />

                          <Box>
                            <Typography
                              variant="h3"
                              sx={{
                                fontSize: "14px",
                                fontWeight: 600,
                                mb: 0,
                              }}
                            >
                              {sale.customerName}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>

                      <TableCell className="border-bottom text-black">
                        {sale.grandTotal}
                      </TableCell>

                      <TableCell className="border-bottom text-black">
                        {sale.paidStatus}
                      </TableCell>

                      <TableCell className="border-bottom text-black">
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={sale.paymentMethod.logo}
                            alt={sale.paymentMethod.name}
                            width={24}
                            height={24}
                          />

                          <Typography
                            sx={{ fontSize: "12px", fontWeight: 600 }}
                          >
                            {sale.paymentMethod.name}
                          </Typography>
                        </Box>
                      </TableCell>

                      <TableCell className="border-bottom text-end">
                        <Box
                          sx={{
                            fontSize: "12px",
                            fontWeight: "500",
                            padding: "3px 8px",
                            borderRadius: "30px",
                            color: `${sale.status.statusColor}.500`,
                            border: "1px solid",
                            borderColor: `${sale.status.statusColor}.500`,
                            backgroundColor: `${sale.status.statusColor}`,
                            display: "inline-block",
                            lineHeight: 1,
                          }}
                        >
                          {sale.status.label}
                        </Box>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>

            {/* Render pagination only if there are more than itemsPerPage entries */}
            {sales.length > itemsPerPage && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "15px",
                  mt: "15px",
                }}
              >
                <Typography fontSize={"12px"} fontWeight={500} mb={"0"}>
                  Showing {currentSales.length} of {sales.length} Results
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Button
                    className={`border text-body ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    sx={{
                      minWidth: "auto",
                      padding: "0",
                      width: { xs: "28px", md: "34px" },
                      height: { xs: "28px", md: "34px" },
                    }}
                  >
                    <i className="material-symbols-outlined">
                      keyboard_arrow_left
                    </i>
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        className={`border ${
                          currentPage === page ? "bg-primary text-white" : ""
                        }`}
                        onClick={() => goToPage(page)}
                        sx={{
                          minWidth: "auto",
                          padding: "0",
                          width: { xs: "28px", md: "34px" },
                          height: { xs: "28px", md: "34px" },
                        }}
                      >
                        {page}
                      </Button>
                    )
                  )}

                  <Button
                    className={`border text-body ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    sx={{
                      minWidth: "auto",
                      padding: "0",
                      width: { xs: "28px", md: "34px" },
                      height: { xs: "28px", md: "34px" },
                    }}
                  >
                    <i className="material-symbols-outlined">
                      keyboard_arrow_right
                    </i>
                  </Button>
                </Box>
              </Box>
            )}
          </TableContainer>
        )}
      </Card>
    </>
  );
};

export default RecentSales;
