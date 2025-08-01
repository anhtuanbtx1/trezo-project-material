"use client";

import { Grid, Box, Typography, Card } from "@mui/material";
import { Link } from "react-router-dom";
import CustomDropdown from "./CustomDropdown";

// Dynamic top-selling items data
const topSellingItemsData = [
  {
    id: "1",
    image: "/images/products/product28.jpg",
    name: "Thai Bean Soup",
    viewLink: "/restaurant/dish-details",
    rating: 5.0,
    sold: 1235,
  },
  {
    id: "2",
    image: "/images/products/product29.jpg",
    name: "Spicy Chicken Pizza",
    viewLink: "/restaurant/dish-details",
    rating: 4.8,
    sold: 987,
  },
  {
    id: "3",
    image: "/images/products/product30.jpg",
    name: "Vegetable Pasta",
    viewLink: "/restaurant/dish-details",
    rating: 4.7,
    sold: 876,
  },
  {
    id: "4",
    image: "/images/products/product31.jpg",
    name: "Grilled Salmon",
    viewLink: "/restaurant/dish-details",
    rating: 4.9,
    sold: 765,
  },
];

const TopSellingItems = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
          position: "relative",
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "5px",
            gap: "5px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
          >
            Top Selling Items
          </Typography>

          <CustomDropdown
            options={["Weekly", "Monthly", "Yearly"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="Weekly"
          />
        </Box>

        <Box>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
            {topSellingItemsData.slice(0, 4).map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ position: "relative", mt: "20px" }}>
                  <Box
                    className="bg-dark text-white po-right-3"
                    sx={{
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "30px",
                      position: "absolute",
                      top: "3px",
                      gap: "3px",
                      fontSize: "12px",
                      padding: "1.5px 5px",
                    }}
                  >
                    <i
                      className="ri-star-fill"
                      style={{ fontSize: "14px", color: "#FD5812" }}
                    ></i>
                    {item.rating}
                  </Box>

                  <Link
                    to={item.viewLink}
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "137px",
                      marginBottom: "15px",
                      borderRadius: "10px",
                      display: "block",
                    }}
                  ></Link>

                  <Link to={item.viewLink}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, fontSize: "14px" }}
                    >
                      {item.name}
                    </Typography>
                  </Link>

                  <Typography fontSize={"12px"}>{item.sold} sold</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default TopSellingItems;
