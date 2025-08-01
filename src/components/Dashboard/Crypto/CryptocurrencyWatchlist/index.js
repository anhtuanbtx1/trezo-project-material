"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Bitcoin from "./Bitcoin";
import Ethereum from "./Ethereum";
import Solana from "./Solana";
import Binance from "./Binance";
import Cardano from "./Cardano";

const CryptocurrencyWatchlist = () => {
  return (
    <>
      <Box sx={{ mb: "25px" }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "20px",
          }}
          className="text-black"
        >
          Cryptocurrency Watchlist
        </Typography>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="watchlist-slider"
        >
          <SwiperSlide>
            <Bitcoin />
          </SwiperSlide>

          <SwiperSlide>
            <Ethereum />
          </SwiperSlide>

          <SwiperSlide>
            <Solana />
          </SwiperSlide>

          <SwiperSlide>
            <Binance />
          </SwiperSlide>

          <SwiperSlide>
            <Cardano />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default CryptocurrencyWatchlist;
