"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
} from "@mui/material"; 
import Chart from "react-apexcharts";
import CustomDropdown from "./CustomDropdown";

const IndividualAssetPerformance = () => {
  const [assets, setAssets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = () => {
      const mockData = [
        {
          id: 1,
          name: "Bitcoin",
          symbol: "BTC",
          icon: "/images/cryptocurrencies/bitcoin.svg",
          allocation: 35,
          roi: 120,
          currentValue: 35000,
          netGain: 15000,
          oneDayChange: 0.5,
          sevenDayChange: 3.0,
          sparklineData: [60, 40, 80, 70, 50, 90, 60, 85, 55, 75, 65, 95],
        },
        {
          id: 2,
          name: "Ethereum",
          symbol: "ETH",
          icon: "/images/cryptocurrencies/ethereum.svg",
          allocation: 25,
          roi: 80,
          currentValue: 25000,
          netGain: 8000,
          oneDayChange: -1.0,
          sevenDayChange: 1.5,
          sparklineData: [50, 60, 45, 70, 55, 65, 50, 75, 60, 70, 65, 80],
        },
        {
          id: 3,
          name: "Binance",
          symbol: "BNB",
          icon: "/images/cryptocurrencies/binance.svg",
          allocation: 15,
          roi: 30,
          currentValue: 7500,
          netGain: 1500,
          oneDayChange: -2.5,
          sevenDayChange: -5.0,
          sparklineData: [70, 60, 65, 50, 55, 45, 40, 50, 45, 55, 50, 60],
        },
        {
          id: 4,
          name: "Tether",
          symbol: "USDT",
          icon: "/images/cryptocurrencies/tether.svg",
          allocation: 10,
          roi: 45,
          currentValue: 4500,
          netGain: 1000,
          oneDayChange: 0.2,
          sevenDayChange: 2.0,
          sparklineData: [30, 35, 40, 38, 42, 45, 43, 47, 45, 48, 46, 50],
        },
        {
          id: 5,
          name: "XRP",
          symbol: "XRP",
          icon: "/images/cryptocurrencies/xrp.svg",
          allocation: 5,
          roi: 60,
          currentValue: 3000,
          netGain: 1200,
          oneDayChange: 1.5,
          sevenDayChange: 4.5,
          sparklineData: [40, 45, 50, 48, 52, 55, 53, 57, 55, 58, 56, 60],
        },
        {
          id: 6,
          name: "Cardano",
          symbol: "ADA",
          icon: "/images/cryptocurrencies/cardano.png",
          allocation: 8,
          roi: 25,
          currentValue: 2000,
          netGain: 500,
          oneDayChange: 0.8,
          sevenDayChange: 2.5,
          sparklineData: [30, 35, 32, 38, 35, 40, 42, 45, 43, 47, 45, 50],
        },
        {
          id: 7,
          name: "Solana",
          symbol: "SOL",
          icon: "/images/cryptocurrencies/solana.svg",
          allocation: 12,
          roi: 75,
          currentValue: 6000,
          netGain: 2500,
          oneDayChange: -0.5,
          sevenDayChange: 5.0,
          sparklineData: [40, 45, 50, 55, 60, 65, 70, 65, 60, 55, 50, 45],
        },
        {
          id: 8,
          name: "Polkadot",
          symbol: "DOT",
          icon: "/images/cryptocurrencies/polkadot.png",
          allocation: 7,
          roi: 15,
          currentValue: 1500,
          netGain: 200,
          oneDayChange: -1.2,
          sevenDayChange: -2.0,
          sparklineData: [50, 48, 45, 42, 40, 38, 35, 40, 45, 50, 55, 60],
        },
        {
          id: 9,
          name: "Dogecoin",
          symbol: "DOGE",
          icon: "/images/cryptocurrencies/dogecoin.png",
          allocation: 3,
          roi: 10,
          currentValue: 750,
          netGain: 75,
          oneDayChange: 2.0,
          sevenDayChange: 8.0,
          sparklineData: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
        },
        {
          id: 10,
          name: "Litecoin",
          symbol: "LTC",
          icon: "/images/cryptocurrencies/litecoin.png",
          allocation: 5,
          roi: 20,
          currentValue: 1200,
          netGain: 200,
          oneDayChange: -0.3,
          sevenDayChange: 1.5,
          sparklineData: [40, 42, 45, 43, 47, 45, 50, 55, 60, 65, 70, 75],
        },
      ];
      setAssets(mockData);
    };

    fetchData();
  }, []);

  const getChartOptions = (color) => ({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth", // or 'straight', 'stepline', etc. - must be one of the specific allowed values
      width: 1,
    },
    colors: [color],
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
    },
  });

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getChangeColorClass = (value) => {
    return value >= 0 ? "text-success" : "text-danger";
  };

  const formatPercentage = (value) => {
    return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
  };

  // Pagination logic
  const totalItems = assets.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedAssets = assets.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
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
          Individual Asset Performance
        </Typography>

        <Box>
          <CustomDropdown
            options={["Last 7 Days", "Last 15 Days", "Last 30 Days"]} // Need to change the options also in CustomDropdown file
            onSelect={(value) => console.log(value)}
            defaultLabel="Last 30 Days"
          />
        </Box>
      </Box>

      <Box sx={{ marginLeft: "-25px", marginRight: "-25px" }}>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", borderRadius: "0" }}
          className="rmui-table"
        >
          <Table
            sx={{ minWidth: 1000 }}
            aria-label="Individual Asset Performance Table"
          >
            <TableHead className="bg-primary-50">
              <TableRow
                sx={{
                  "& th": {
                    fontWeight: "500",
                    padding: "10px 20px",
                    fontSize: { xs: "13px", md: "14px" },
                  },
                }}
              >
                <TableCell className="text-black border-bottom">
                  Asset
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Allocation %
                </TableCell>
                <TableCell className="text-black border-bottom">ROI</TableCell>
                <TableCell className="text-black border-bottom">
                  Current Value
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Net Gain/Loss
                </TableCell>
                <TableCell className="text-black border-bottom">
                  1D Change
                </TableCell>
                <TableCell className="text-black border-bottom">
                  7D Change
                </TableCell>
                <TableCell className="text-black border-bottom">
                  Sparkline
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {displayedAssets.map((asset) => (
                <TableRow
                  key={asset.id}
                  sx={{
                    "& td": {
                      padding: "20px 20px",
                      fontSize: { xs: "13px", md: "14px" },
                      fontWeight: 500,
                    },
                  }}
                >
                  <TableCell className="text-black border-bottom">
                    <Box
                      sx={{ gap: "8px", display: "flex", alignItems: "center" }}
                    >
                      <img
                        src={asset.icon}
                        alt={asset.symbol.toLowerCase()}
                        width={22}
                        height={22}
                      />
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 500, fontSize: "14px" }}
                      >
                        {asset.name}{" "}
                        <Typography
                          component={"span"}
                          className="text-body"
                          sx={{ fontSize: "12px" }}
                        >
                          ({asset.symbol})
                        </Typography>
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    {asset.allocation}%
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    +{asset.roi}%
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    {formatCurrency(asset.currentValue)}
                  </TableCell>

                  <TableCell className="text-black border-bottom">
                    {formatCurrency(asset.netGain)}
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box className={getChangeColorClass(asset.oneDayChange)}>
                      {formatPercentage(asset.oneDayChange)}
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box className={getChangeColorClass(asset.sevenDayChange)}>
                      {formatPercentage(asset.sevenDayChange)}
                    </Box>
                  </TableCell>

                  <TableCell className="border-bottom">
                    <Box sx={{ position: "relative" }}>
                      <Chart
                        options={getChartOptions(
                          asset.sevenDayChange >= 0 ? "#25b003" : "#ff0000"
                        )}
                        series={[{ data: asset.sparklineData }]}
                        type="line"
                        height={30}
                        width={100}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box
            sx={{
              paddingTop: "15px !important",
              display: "flex",
              justifyContent: { xs: "center", sm: "space-between" },
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
              padding: "15px 20px",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>
              Showing {indexOfFirstItem + 1}-
              {Math.min(indexOfLastItem, totalItems)} of {totalItems} results
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Button
                className="border text-body"
                onClick={prevPage}
                disabled={currentPage === 1}
                sx={{
                  borderRadius: "4px",
                  width: "35px",
                  height: "35px",
                  minWidth: "unset",
                  padding: "0",
                }}
              >
                <i className="material-symbols-outlined">keyboard_arrow_left</i>
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <Button
                    key={number}
                    className={`border ${
                      currentPage === number ? "bg-primary text-white" : "text-body"
                    }`}
                    onClick={() => paginate(number)}
                    sx={{
                      borderRadius: "4px",
                      width: "35px",
                      height: "35px",
                      minWidth: "unset",
                      padding: "0",
                    }}
                  >
                    {number}
                  </Button>
                )
              )}

              <Button
                className="border text-body"
                onClick={nextPage}
                disabled={currentPage === totalPages}
                sx={{
                  borderRadius: "4px",
                  width: "35px",
                  height: "35px",
                  minWidth: "unset",
                  padding: "0",
                }}
              >
                <i className="material-symbols-outlined">
                  keyboard_arrow_right
                </i>
              </Button>
            </Box>
          </Box>
        </TableContainer>
      </Box>
    </Card>
  );
};

export default IndividualAssetPerformance;
