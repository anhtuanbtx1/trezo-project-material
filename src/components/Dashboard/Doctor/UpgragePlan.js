"use client";

import { Grid, Box, Typography } from "@mui/material";

const UpgragePlan = () => {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(90deg, #4936F5 0%, #4737D6 100%)",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "25px" },
        }}
      >
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
          justifyContent="center"
          alignItems={"center"}
        >
          <Grid size={{ xs: 12 }}>
            <Typography
              variant="h3"
              sx={{
                color: "#fff !important",
                fontWeight: 600,
                mb: "0",
                fontSize: { xs: "16px", md: "20px" },
                maxWidth: "250px",
                lineHeight: 1.5,
              }}
            >
              Upgrage Plan To Manage 20K+ Patients
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Box
              sx={{
                textAlign: { xs: "center", sm: "right" },
                mt: { xs: "10px", sm: "0" },
              }}
            >
              <img
                src="/images/users.png"
                alt="users-image"
                width={145}
                height={76}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UpgragePlan;
