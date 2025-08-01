"use client";

import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  Button,
} from "@mui/material";

const PrescriptionsContent = () => {
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
            display: { xs: "block", sm: "flex" },
            justifyContent: "space-between",
            paddingX: { xs: "18px", sm: "20px", lg: "25px" },
            paddingBottom: "20px",
            mx: { xs: "-18px", sm: "-20px", lg: "-25px" },
          }}
          className="border-bottom"
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                fontSize: { xs: "17px", md: "20px" },
                mb: "8px",
              }}
            >
              Dr. Walter White
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                mt: "5px !important",
              }}
            >
              MBBS, MD, MS (Reg No: 321456)
            </Typography>

            <Typography
              className="text-black"
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                mt: "5px !important",
              }}
            >
              Mobile No: +321 4567 5643
            </Typography>
          </Box>

          <Box sx={{ mt: { xs: "20px", sm: "0px" } }}>
            <img
              src="/images/logo.svg"
              className="prescriptions-logo"
              alt="logo"
              width={100}
              height={26}
            />

            <img
              src="/images/white-logo.svg"
              className="prescriptions-white-logo"
              alt="logo"
              width={100}
              height={26}
            />

            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                mt: "5px !important",
              }}
            >
              S. Arrowhead Court Branford9
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                mt: "5px !important",
              }}
            >
              +1 444 266 5599
            </Typography>
          </Box>
        </Box>

        <Box sx={{ paddingTop: "20px" }}>
          <img
            src="/images/bar-code.svg"
            alt="bar-code"
            width={145}
            height={47}
            style={{
              marginBottom: "18px",
            }}
            className="bar-code"
          />

          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box sx={{ mb: "6px" }}>
                ID: <span className="text-black">321456</span>
              </Box>
              <Box sx={{ mb: "6px" }}>
                Name: <span className="text-black">Jane Ronan</span>
              </Box>
              <Box sx={{ mb: "6px" }}>
                Address: <span className="text-black">Bradford, UK</span>
              </Box>
              <Box sx={{ mb: "6px" }}>
                Temperature(Farenhite):{" "}
                <span className="text-black">101 degree</span>
              </Box>
              <Box sx={{ mb: "6px" }}>
                Blood Pressure: <span className="text-black">85/123</span>
              </Box>
            </Box>

            <Typography
              variant="h5"
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Date: 07 November, 2025
            </Typography>
          </Box>

          <Typography
            className="text-black"
            sx={{
              fontWeight: "600",
              fontSize: { xs: "17px", md: "20px" },
              paddingTop: { xs: "30px", md: "40px" },
            }}
          >
            R
          </Typography>
        </Box>

        <Box sx={{ mx: { xs: "-18px", sm: "-20px", lg: "-25px" } }}>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              borderRadius: "0",
            }}
            className="rmui-table"
          >
            <Table sx={{ minWidth: 750 }}>
              <TableHead className="bg-f6f7f9">
                <TableRow
                  sx={{
                    "& th": {
                      fontSize: "14px",
                      fontWeight: 400,
                      py: "14px",
                      px: "25px",
                      border: "none",
                    },
                  }}
                >
                  <TableCell>Medicine Name</TableCell>
                  <TableCell>Dosage</TableCell>
                  <TableCell>Duration</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow
                  sx={{
                    "& td": {
                      fontSize: "14px",
                      fontWeight: 600,
                      py: "18px",
                      px: "25px",
                      border: "none",
                    },
                  }}
                >
                  <TableCell className="text-black">
                    1. Tab. Ibuprofen
                  </TableCell>

                  <TableCell className="text-black">
                    1 Morning - 1 Night
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 400,
                        mt: "5px !important",
                      }}
                      className="text-body"
                    >
                      (Before Food)
                    </Typography>
                  </TableCell>

                  <TableCell className="text-black">
                    10 Days
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 400,
                        mt: "5px !important",
                      }}
                      className="text-body"
                    >
                      (Total 20 Tablets)
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{
                    "& td": {
                      fontSize: "14px",
                      fontWeight: 600,
                      py: "14px",
                      px: "25px",
                      border: "none",
                    },
                  }}
                >
                  <TableCell className="text-black">
                    2. Cap. Acetaminophen
                  </TableCell>
                  <TableCell className="text-black">
                    1 Morning - 1 Midday - 1 Night
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 400,
                        mt: "5px !important",
                      }}
                      className="text-body"
                    >
                      (After Food)
                    </Typography>
                  </TableCell>
                  <TableCell className="text-black">
                    10 Days
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 400,
                        mt: "5px !important",
                      }}
                      className="text-body"
                    >
                      (Total 20 Tablets)
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{
                    "& td": {
                      fontSize: "14px",
                      fontWeight: 600,
                      py: "14px",
                      px: "25px",
                      border: "none",
                    },
                  }}
                >
                  <TableCell className="text-black">3. Tab. Naproxen</TableCell>
                  <TableCell className="text-black">
                    1 Morning - 1 Night
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 400,
                        mt: "5px !important",
                      }}
                      className="text-body"
                    >
                      (After Food)
                    </Typography>
                  </TableCell>
                  <TableCell className="text-black">
                    10 Days
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 400,
                        mt: "5px !important",
                      }}
                      className="text-body"
                    >
                      (Total 20 Tablets)
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box
          className="border-top"
          sx={{
            mt: '50px',
            pt: "22px",
            mx: { xs: "-18px", sm: "-20px", lg: "-25px" },
            paddingX: { xs: "18px", sm: "20px", lg: "25px" },
          }}
        >
          <Typography
            className="text-black"
            sx={{
              fontWeight: "600",
            }}
          >
            Advice Given:
          </Typography>

          <Box>
            <Box sx={{ mt: "6px" }}>- Avoid Oily and spicy food.</Box>
          </Box>
        </Box>

        <Box
          sx={{
            maxWidth: "255px",
            mt: "25px",
          }}
          className="ml-auto"
        >
          <Box
            sx={{
              textAlign: "center",
              mb: "20px",
              pb: "5px",
            }}
            className="border-bottom"
          >
            <img
              src="/images/signature.svg"
              alt="signature"
              width={77}
              height={38}
            />
          </Box>

          <Typography className="text-black" sx={{ fontWeight: "600" }}>
            Dr. Walter White
          </Typography>

          <Typography fontSize={"12px"} sx={{ mt: "5px !important" }}>
            MBBS, MD, MS (Reg No: 321456)
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            mt: "25px",
            pb: "50px",
            justifyContent: "center",
          }}
        >
          <Button
            type="button"
            color="error"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              boxShadow: "none",
              fontSize: "16px",
              padding: "10px 22px",
              color: "#fff !important",
            }}
          >
            Print
          </Button>

          <Button
            type="button"
            color="primary"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              boxShadow: "none",
              fontSize: "16px",
              padding: "10px 22px",
              gap: "5px",
              color: "#fff !important",
            }}
          >
            <i className="material-symbols-outlined">download</i>
            Download
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default PrescriptionsContent;
