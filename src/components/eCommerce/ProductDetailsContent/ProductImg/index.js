"use client";

import React, { useState } from "react";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";

const ProductImg = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <SwiperReact
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="product-details-image"
      >
        <SwiperSlide>
          <img
            src="/images/products/product-details1.jpg"
            alt="product1"
            width={714}
            height={714}
            style={{ borderRadius: "7px" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/images/products/product-details2.jpg"
            alt="product2"
            width={714}
            height={714}
            style={{ borderRadius: "7px" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/images/products/product-details3.jpg"
            alt="product3"
            width={714}
            height={714}
            style={{ borderRadius: "7px" }}
          />
        </SwiperSlide>
      </SwiperReact>

      <SwiperReact
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/images/products/product-details1.jpg"
            alt="product-thumbnail1"
            width={714}
            height={714}
            style={{ borderRadius: "7px", cursor: "pointer" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/images/products/product-details2.jpg"
            alt="product-thumbnail2"
            width={714}
            height={714}
            style={{ borderRadius: "7px", cursor: "pointer" }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/images/products/product-details3.jpg"
            alt="product-thumbnail3"
            width={714}
            height={714}
            style={{ borderRadius: "7px", cursor: "pointer" }}
          />
        </SwiperSlide>
      </SwiperReact>
    </>
  );
};

export default ProductImg;
