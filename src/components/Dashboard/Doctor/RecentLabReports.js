"use client";

import { Box, Typography, Card, Button } from "@mui/material";

const reports = [
  { fileName: "Blood Report.pdf", submittedBy: "Andrew", fileType: "pdf" },
  { fileName: "X-ray Report.jpg", submittedBy: "Joanna", fileType: "jpg" },
  { fileName: "Creatinine Report.pdf", submittedBy: "David", fileType: "pdf" },
  { fileName: "Blood Report.pdf", submittedBy: "Zinia", fileType: "pdf" },
  { fileName: "ECG Report.doc", submittedBy: "Bella", fileType: "doc" },
  { fileName: "Blood Report.pdf", submittedBy: "Jonathon", fileType: "pdf" },
];

const RecentLabReports = () => {
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "20px",
          }}
          className="text-black"
        >
          Recent Lab Reports
        </Typography>

        <Box>
          {reports.map((report, index) => (
            <Box
              key={index}
              className="border-bottom lcbpm-none"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pb: "15.5px",
                mb: "15.5px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Box>
                  <img
                    src={`/images/icons/${report.fileType}.png`}
                    alt={`${report.fileType}-icon`}
                    width={28}
                    height={28}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "600", fontSize: "14px", mb: "3px" }}
                  >
                    {report.fileName}
                  </Typography>

                  <Typography sx={{ fontSize: "12px" }}>
                    submitted by{" "}
                    <span className="text-black">{report.submittedBy}</span>
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Button
                  type="button"
                  className="text-primary"
                  sx={{
                    minWidth: "auto",
                    fontSize: "20px",
                    lineHeight: 1,
                    padding: 0,
                  }}
                >
                  <i className="ri-download-2-line"></i>
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default RecentLabReports;
