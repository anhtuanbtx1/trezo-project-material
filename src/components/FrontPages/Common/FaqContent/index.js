"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FaqContent = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box
        sx={{
          pb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
        }}
        className="faq-area"
      >
        <Box className="section-title text-center">
          <div className="sub-title">
            <span className="text-purple">FAQ's</span>
          </div>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "24px", md: "28px", lg: "34px", xl: "36px" },
            }}
          >
            Do You Have Questions? We Have Answers (Well, Most of the Time!)
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: "738px",
            px: "15px",
            mx: "auto",
          }}
        >
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className="toc-accordion bg-white"
            sx={{
              border: "none",
              borderRadius: "7px",
              mt: "10px",
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="bg-white"
              sx={{
                padding: "9px 25px",
                borderRadius: "7px",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                fontSize="14px"
                className="text-black"
              >
                What is Trezo?
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                border: "none",
                padding: "0 25px 5px",
              }}
            >
              <Typography sx={{ lineHeight: "1.8" }} mb="15px">
                Trezo is a comprehensive project management software designed to
                help teams streamline their workflow, collaborate effectively,
                and achieve project success.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className="toc-accordion bg-white"
            sx={{
              border: "none",
              borderRadius: "7px",
              mt: "10px",
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="bg-white"
              sx={{
                padding: "9px 25px",
                borderRadius: "7px",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                fontSize="14px"
                className="text-black"
              >
                What features does Trezo offer?
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                border: "none",
                padding: "0 25px 5px",
              }}
            >
              <Typography sx={{ lineHeight: "1.8" }} mb="15px">
                Trezo is a comprehensive project management software designed to
                help teams streamline their workflow, collaborate effectively,
                and achieve project success.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            className="toc-accordion bg-white"
            sx={{
              border: "none",
              borderRadius: "7px",
              mt: "10px",
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="bg-white"
              sx={{
                padding: "9px 25px",
                borderRadius: "7px",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                fontSize="14px"
                className="text-black"
              >
                How can Trezo benefit my team?
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                border: "none",
                padding: "0 25px 5px",
              }}
            >
              <Typography sx={{ lineHeight: "1.8" }} mb="15px">
                Trezo is a comprehensive project management software designed to
                help teams streamline their workflow, collaborate effectively,
                and achieve project success.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            className="toc-accordion bg-white"
            sx={{
              border: "none",
              borderRadius: "7px",
              mt: "10px",
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="bg-white"
              sx={{
                padding: "9px 25px",
                borderRadius: "7px",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                fontSize="14px"
                className="text-black"
              >
                Is Trezo suitable for small businesses?
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                border: "none",
                padding: "0 25px 5px",
              }}
            >
              <Typography sx={{ lineHeight: "1.8" }} mb="15px">
                Trezo is a comprehensive project management software designed to
                help teams streamline their workflow, collaborate effectively,
                and achieve project success.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            className="toc-accordion bg-white"
            sx={{
              border: "none",
              borderRadius: "7px",
              mt: "10px",
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="bg-white"
              sx={{
                padding: "9px 25px",
                borderRadius: "7px",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                fontSize="14px"
                className="text-black"
              >
                Can I customize Trezo to fit my team's specific needs?
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                border: "none",
                padding: "0 25px 5px",
              }}
            >
              <Typography sx={{ lineHeight: "1.8" }} mb="15px">
                Trezo is a comprehensive project management software designed to
                help teams streamline their workflow, collaborate effectively,
                and achieve project success.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
            className="toc-accordion bg-white"
            sx={{
              border: "none",
              borderRadius: "7px",
              mt: "10px",
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="bg-white"
              sx={{
                padding: "9px 25px",
                borderRadius: "7px",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                fontSize="14px"
                className="text-black"
              >
                Is Trezo cloud-based or on-premises?
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                border: "none",
                padding: "0 25px 5px",
              }}
            >
              <Typography sx={{ lineHeight: "1.8" }} mb="15px">
                Trezo is a comprehensive project management software designed to
                help teams streamline their workflow, collaborate effectively,
                and achieve project success.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
            className="toc-accordion bg-white"
            sx={{
              border: "none",
              borderRadius: "7px",
              mt: "10px",
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="bg-white"
              sx={{
                padding: "9px 25px",
                borderRadius: "7px",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                fontSize="14px"
                className="text-black"
              >
                Does Trezo integrate with other tools?
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                border: "none",
                padding: "0 25px 5px",
              }}
            >
              <Typography sx={{ lineHeight: "1.8" }} mb="15px">
                Trezo is a comprehensive project management software designed to
                help teams streamline their workflow, collaborate effectively,
                and achieve project success.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default FaqContent;
