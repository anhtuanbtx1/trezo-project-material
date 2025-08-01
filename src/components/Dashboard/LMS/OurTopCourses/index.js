"use client";

import * as React from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "./OurTopCourses.module.css";

const OurTopCourses = () => {
  return (
    <>
      <Box className={styles.ourTopCoursesCard}>
        <h5 className={styles.heading}>Our Top Courses</h5>

        <Swiper
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="top-courses"
        >
          <SwiperSlide>
            <Box className={styles.sliderContent}>
              <Box
                className="d-flex align-items-center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  className={styles.image}
                  sx={{
                    borderRadius: "7px",
                    flex: "shrink-1",
                  }}
                >
                  <img
                    src="/images/courses/course1.jpg"
                    alt="course-image"
                    width={520}
                    height={520}
                    style={{ borderRadius: "7px" }}
                  />
                </Box>

                <Box className={styles.content}>
                  <span className="d-block text-white">Basic Python</span>
                  <div className={styles.price}>$35.99</div>
                </Box>
              </Box>

              <Box className={styles.info}>
                <span className="text-white">Course content</span>

                <ul>
                  <li>10 sections</li>
                  <li>45 lectures</li>
                  <li>25h 50m</li>
                </ul>

                <Box textAlign="end">
                  <Link to="#">
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#fff !important",	
                        borderColor: "#fff",
                        textTransform: "capitalize",
                      }}
                    >
                      <i className="material-symbols-outlined">add</i>
                      View Details
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box className={styles.sliderContent}>
              <Box
                className="d-flex align-items-center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  className={styles.image}
                  sx={{
                    borderRadius: "7px",
                    flex: "shrink-1",
                  }}
                >
                  <img
                    src="/images/courses/course2.jpg"
                    alt="course-image"
                    width={520}
                    height={520}
                    style={{ borderRadius: "7px" }}
                  />
                </Box>

                <Box className={styles.content}>
                  <span className="d-block text-white">HTML Developer</span>
                  <div className={styles.price}>$49.99</div>
                </Box>
              </Box>

              <Box className={styles.info}>
                <span className="text-white">Course content</span>

                <ul>
                  <li>12 sections</li>
                  <li>54 lectures</li>
                  <li>35h 40m</li>
                </ul>

                <Box textAlign="end">
                  <Link to="#">
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#fff !important",
                        borderColor: "#fff",
                        textTransform: "capitalize",
                      }}
                    >
                      <i className="material-symbols-outlined">add</i>
                      View Details
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box className={styles.sliderContent}>
              <Box
                className="d-flex align-items-center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  className={styles.image}
                  sx={{
                    borderRadius: "7px",
                    flex: "shrink-1",
                  }}
                >
                  <img
                    src="/images/courses/course3.jpg"
                    alt="course-image"
                    width={520}
                    height={520}
                    style={{ borderRadius: "7px" }}
                  />
                </Box>

                <Box className={styles.content}>
                  <span className="d-block text-white">Basic Angular</span>
                  <div className={styles.price}>$55.99</div>
                </Box>
              </Box>

              <Box className={styles.info}>
                <span className="text-white">Course content</span>

                <ul>
                  <li>12 sections</li>
                  <li>48 lectures</li>
                  <li>29h 30m</li>
                </ul>

                <Box textAlign="end">
                  <Link to="#">
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#fff !important",
                        borderColor: "#fff",
                        textTransform: "capitalize",
                      }}
                    >
                      <i className="material-symbols-outlined">add</i>
                      View Details
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default OurTopCourses;
