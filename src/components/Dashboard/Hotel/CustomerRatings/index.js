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
  IconButton,
} from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const CustomerRatings = () => {
  const [ratings, setRatings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page

  useEffect(() => {
    // Simulated API call
    const fetchRatings = async () => {
      const mockRatings = [
        {
          id: "1",
          userId: "#001",
          customerName: "Joanna Watson",
          customerImage: "/images/users/user58.jpg",
          rating: 5.0,
          reviewTitle: "Amazing Ambiance and Delicious Food!",
          reviewText:
            "Trezo was a fantastic dining experience. The ambiance is warm and inviting, perfect for a date night or celebration. I ordered the truffle pasta, which was rich and perfectly seasoned. The service was impeccable, and the staff made us feel like family. Highly recommend!",
          date: "13 Nov, 25",
        },
        {
          id: "2",
          userId: "#002",
          customerName: "John Doe",
          customerImage: "/images/users/user59.jpg",
          rating: 4.5,
          reviewTitle: "Great Service and Tasty Dishes!",
          reviewText:
            "The food was delicious, and the service was excellent. The staff was very attentive and made sure we had everything we needed. The atmosphere was cozy and perfect for a family dinner.",
          date: "12 Nov, 25",
        },
        {
          id: "3",
          userId: "#003",
          customerName: "Jane Smith",
          customerImage: "/images/users/user60.jpg",
          rating: 4.0,
          reviewTitle: "Lovely Place for a Casual Meal",
          reviewText:
            "I had a great time at Trezo. The food was good, and the ambiance was relaxing. It's a great place to unwind after a long day. I especially enjoyed the dessert!",
          date: "11 Nov, 25",
        },
        {
          id: "4",
          userId: "#004",
          customerName: "Michael Brown",
          customerImage: "/images/users/user61.jpg",
          rating: 4.8,
          reviewTitle: "Exceptional Service!",
          reviewText:
            "Everything was perfect. The food, the atmosphere, and the hospitality. Will definitely come again!",
          date: "10 Nov, 25",
        },
        {
          id: "5",
          userId: "#005",
          customerName: "Emily White",
          customerImage: "/images/users/user62.jpg",
          rating: 3.9,
          reviewTitle: "Decent Experience",
          reviewText:
            "Food was okay, but the wait time was longer than expected. Service was friendly though!",
          date: "9 Nov, 25",
        },
        {
          id: "6",
          userId: "#006",
          customerName: "Daniel Green",
          customerImage: "/images/users/user63.jpg",
          rating: 4.3,
          reviewTitle: "Loved It!",
          reviewText:
            "Had an amazing time here. The food was delicious, and the staff was super friendly.",
          date: "8 Nov, 25",
        },
      ];
      setRatings(mockRatings);
    };

    fetchRatings();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(ratings.length / itemsPerPage);
  const paginatedRatings = ratings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
            Customer Ratings
          </Typography>

          <CustomDropdown
            options={["Weekly", "Monthly", "Yearly"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="Monthly"
          />
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "0",
          }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 1100 }}>
            <TableHead>
              <TableRow
                className="border-bottom"
                sx={{
                  "& th": {
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "text.primary",
                    padding: "15px 8px",
                  },
                }}
              >
                <th className="text-start">USER ID</th>

                <th className="text-start">CUSTOMAR NAME</th>

                <th className="text-start">RATING</th>

                <th className="text-start">REVIEWS</th>

                <th className="text-start">DATE</th>

                <th className="text-end">ACTION</th>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedRatings.map((rating) => (
                <TableRow
                  key={rating.id}
                  sx={{
                    "& td": {
                      padding: "13px 8px",
                      fontSize: "12px",
                      fontWeight: 600,
                    },
                  }}
                >
                  <TableCell className="border-bottom">
                    {rating.userId}
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
                        src={rating.customerImage}
                        alt={rating.customerName}
                        width={30}
                        height={30}
                        style={{
                          borderRadius: "50%",
                        }}
                      />

                      <Box>
                        <Typography
                          variant="h3"
                          sx={{
                            fontSize: { xs: "13px", md: "14px" },
                            fontWeight: 600,
                            mb: 0,
                          }}
                        >
                          {rating.customerName}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                        lineHeight: 1,
                      }}
                    >
                      <i
                        className="ri-star-fill"
                        style={{
                          color: "#fe7a36",
                          fontSize: "14px",
                          position: "relative",
                          top: "-2px",
                        }}
                      ></i>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 500,
                          lineHeight: 1,
                        }}
                      >
                        {rating.rating}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box sx={{ width: "620px", whiteSpace: "normar" }}>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "13px", fontWeight: "600", mb: "5px" }}
                      >
                        {rating.reviewTitle}
                      </Typography>
                      <Typography sx={{ fontSize: "12px", my: "5px" }}>
                        {rating.reviewText}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">{rating.date}</TableCell>

                  <TableCell className="border-bottom">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
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
            </TableBody>
          </Table>
        </TableContainer>

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
            Showing {itemsPerPage} of {ratings.length} results
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Button
              className="border text-body"
              sx={{
                minWidth: "auto",
                padding: "0",
                width: { xs: "28px", md: "34px" },
                height: { xs: "28px", md: "34px" },
              }}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <i className="material-symbols-outlined">keyboard_arrow_left</i>
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                className="border"
                sx={{
                  minWidth: "auto",
                  padding: "0",
                  width: { xs: "28px", md: "34px" },
                  height: { xs: "28px", md: "34px" },
                  backgroundColor:
                    page === currentPage ? "primary.main" : "transparent",
                  color: page === currentPage ? "white !important" : "text.primary",
                }}
              >
                {page}
              </Button>
            ))}

            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="border text-body"
              sx={{
                minWidth: "auto",
                padding: "0",
                width: { xs: "28px", md: "34px" },
                height: { xs: "28px", md: "34px" },
              }}
            >
              <i className="material-symbols-outlined">keyboard_arrow_right</i>
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default CustomerRatings;
