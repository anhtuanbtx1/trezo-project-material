"use client";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

const placeBids = [
  {
    id: "0",
    image: "/images/nfts/auction1.gif",
    name: "Christmas Eve",
    username: "John Lira",
    openPrice: "11.75 ETH",
    yourOffer: "10.00 ETH",
    time: "30 mins ago",
  },
  {
    id: "1",
    image: "/images/nfts/auction2.gif",
    name: "WalterW.",
    username: "John Lira",
    openPrice: "9.25 ETH",
    yourOffer: "6.10 ETH",
    time: "1 hr ago",
  },
  {
    id: "2",
    image: "/images/nfts/auction3.jpg",
    name: "Windows Art",
    username: "Christino",
    openPrice: "17.24 ETH",
    yourOffer: "11.75 ETH",
    time: "1.30 hr ago",
  },
  {
    id: "3",
    image: "/images/nfts/auction4.jpg",
    name: "3D Logo",
    username: "Hater",
    openPrice: "12.12 ETH",
    yourOffer: "10.24 ETH",
    time: "35 mins ago",
  },
  {
    id: "4",
    image: "/images/nfts/auction5.jpg",
    name: "Awesome Bird",
    username: "Liveslong",
    openPrice: "8.15 ETH",
    yourOffer: "7.15 ETH",
    time: "2 hrs ago",
  },
];

const PlaceBids = () => {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          borderRadius: "0",
        }}
        className="rmui-table table-th-td-lcpx-0"
      >
        <Table sx={{ minWidth: 500 }}>
          <TableBody>
            {placeBids.map((bids, index) => (
              <TableRow
                key={index}
                sx={{
                  td: {
                    py: "10px",
                    px: "20px",
                  },
                }}
                className="tlc-td-bp-none border-top"
              >
                <TableCell className="border-bottom">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src={bids.image}
                      alt={bids.name}
                      width={50}
                      height={50}
                      style={{ borderRadius: "5px" }}
                    />
                    <Box>
                      <Typography
                        component="h5"
                        sx={{ fontWeight: "600", display: "inline-block" }}
                      >
                        {bids.name}
                      </Typography>
                      <Typography
                        component="span"
                        sx={{ fontSize: "12px", display: "block" }}
                      >
                        by {bids.username}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell className="border-bottom text-black">
                  <Typography
                    component="span"
                    sx={{
                      display: "block",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    {bids.openPrice}
                  </Typography>
                </TableCell>

                <TableCell className="border-bottom text-black">
                  <Typography
                    component="span"
                    sx={{
                      display: "block",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    {bids.yourOffer}
                  </Typography>
                </TableCell>

                <TableCell className="border-bottom text-black">
                  <Typography
                    component="span"
                    sx={{
                      display: "block",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    {bids.time}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PlaceBids;
