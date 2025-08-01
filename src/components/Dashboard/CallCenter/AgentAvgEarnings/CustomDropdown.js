import React, { useState } from "react";
import {
  Box,
  Button,
  Popper,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  ClickAwayListener,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomDropdown = ({ options, onSelect, defaultLabel }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState(defaultLabel);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value) => {
    setSelectedLabel(value);
    onSelect(value);
    handleClose();
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{
          borderRadius: "0.375rem",
          fontSize: "14px",
          p: "0",
          textTransform: "capitalize",
          fontWeight: "400",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          "&:hover": { opacity: "0.9" },
        }}
        className="border-none text-body"
      >
        {selectedLabel} <KeyboardArrowDownIcon />
      </Button>

      <Popper
        open={open}
        anchorEl={anchorEl}
        transition
        disablePortal
        sx={{
          zIndex: 1300,
          position: "absolute !important",
          top: "0 !important",
        }}
        className="left-auto po-right-0"
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper
            sx={{
              mt: "30px",
              minWidth: 195,
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              borderRadius: "7px",
              backgroundColor: "background.paper",
              overflow: "hidden",
              py: "15px",
            }}
          >
            <List disablePadding>
              {["This Day", "This Week", "This Month", "This Year"].map(
                (option) => (
                  <ListItemButton
                    key={option}
                    onClick={() => handleSelect(option)}
                    sx={{
                      px: "20px",
                      py: "4px",
                      "&:hover": { opacity: "0.9" },
                    }}
                    className="text-start"
                  >
                    <ListItemText primary={option} className="text-black" />
                  </ListItemButton>
                )
              )}
            </List>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export default CustomDropdown;
