"use client";

import {
  Box,
  Typography,
  Card,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
} from "@mui/material";

const teachers = [
  {
    id: "1",
    image: "/images/users/user53.jpg",
    name: "Sarah W.",
    email: "sarah@trezo.com",
    subject: "Mathematics",
  },
  {
    id: "2",
    image: "/images/users/user54.jpg",
    name: "Michael T.",
    email: "michael@trezo.com",
    subject: "English",
  },
  {
    id: "3",
    image: "/images/users/user55.jpg",
    name: "Emily J.",
    email: "emily@trezo.com",
    subject: "History",
  },
  {
    id: "4",
    image: "/images/users/user56.jpg",
    name: "David A.",
    email: "david@trezo.com",
    subject: "Art",
  },
  {
    id: "5",
    image: "/images/users/user57.jpg",
    name: "Jessica M.",
    email: "jessica@trezo.com",
    subject: "Music",
  },
];

const Teachers = () => {
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
            Teachers
          </Typography>

          <Link
            href="/dashboard/school/"
            className="text-body"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3px",
            }}
          >
            View All{" "}
            <i
              className="ri-arrow-right-s-line lh-1"
              style={{ fontSize: "20px" }}
            ></i>
          </Link>
        </Box>

        {/* Table */}
        <Box
          sx={{
            marginLeft: "-25px",
            marginRight: "-25px",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              borderRadius: "0",
            }}
            className="rmui-table"
          >
            <Table sx={{ minWidth: 400 }}>
              <TableHead>
                <TableRow
                  sx={{
                    th: {
                      fontWeight: "400",
                      padding: "11px 20px",
                      fontSize: "14px",
                    },
                  }}
                >
                  <TableCell className="border-top border-bottom">
                    Name
                  </TableCell>
                  <TableCell className="border-top border-bottom text-end">
                    Subject
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {teachers.map((teacher) => (
                  <TableRow
                    key={teacher.id}
                    sx={{
                      td: {
                        padding: "10.6px 20px",
                        fontSize: "14px",
                      },
                    }}
                    className="tlc-td-bp-none"
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
                          src={teacher.image}
                          alt="teacher"
                          width={40}
                          height={40}
                          style={{
                            display: "inline-block",
                            borderRadius: "100px",
                          }}
                        />
                        <Box>
                          <Typography
                            component={"span"}
                            sx={{ display: "block", fontWeight: "500" }}
                            className="text-black"
                          >
                            {teacher.name}
                          </Typography>

                          <Typography
                            component={"span"}
                            sx={{ display: "block", fontSize: "12px" }}
                          >
                            {teacher.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      className="border-bottom text-black text-end"
                      sx={{ fontWeight: "500" }}
                    >
                      {teacher.subject}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </>
  );
};

export default Teachers;
