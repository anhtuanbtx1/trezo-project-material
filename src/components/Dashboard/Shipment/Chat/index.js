"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  IconButton,
  InputBase,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Chat = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
        padding: { xs: "18px", sm: "20px", lg: "25px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "20px",
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
          Chat
        </Typography>

        <Box>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{
              padding: "0",
            }}
          >
            <MoreHorizIcon sx={{ fontSize: "25px" }} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,

              sx: {
                overflow: "visible",
                boxShadow: "0 4px 45px #0000001a",
                mt: 0,
                width: "150px",

                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>This Day</MenuItem>
            <MenuItem>This Week</MenuItem>
            <MenuItem>This Month</MenuItem>
            <MenuItem>This Year</MenuItem>
          </Menu>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            height: "202px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column-reverse",
          }}
          className="pr-15"
        >
          {/* left message */}
          <Box
            sx={{
              mb: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Box sx={{ width: "35px", height: "35px", flexShrink: 0 }}>
                <img
                  src="/images/users/user31.jpg"
                  alt="user"
                  style={{ borderRadius: "50%" }}
                  width={35}
                  height={35}
                />
              </Box>

              <Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      backgroundColor: "grey.50",
                      p: "8px 15px",
                      borderRadius: "5px",
                      maxWidth: "90%",
                      mb: "5px",
                    }}
                    className="for-dark-bg"
                  >
                    Hey Olivia, have you had a chance to check out the new admin
                    dashboard?
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "13px",
                      backgroundColor: "grey.50",
                      p: "8px 15px",
                      borderRadius: "5px",
                      maxWidth: "90%",
                      mb: "5px",
                    }}
                    className="for-dark-bg"
                  >
                    Oh, they've got this Kanban board for task management. You
                    can drag and drop tasks between columns – it's so intuitive.
                    Makes managing tasks a breeze. 🔥
                  </Typography>
                </Box>

                <Typography
                  component={"span"}
                  sx={{ fontSize: "12px", mt: "6px", display: "block" }}
                >
                  09:10 AM
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* right message  */}
          <Box sx={{ textAlign: "right", mb: "15px" }}>
            <Box
              sx={{
                backgroundColor: "primary.main",
                color: "white !important",
                p: "8px 15px",
                borderRadius: "5px",
                display: "inline-block",
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "white !important" }}>
                Oh, you mean the one for project?
              </Typography>
            </Box>
            <Typography
              component={"span"}
              sx={{ fontSize: "12px", mt: "6px", display: "block" }}
            >
              09:11 AM
            </Typography>
          </Box>

          {/* left message */}
          <Box
            sx={{
              mb: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Box sx={{ width: "35px", height: "35px", flexShrink: 0 }}>
                <img
                  src="/images/users/user31.jpg"
                  alt="user"
                  style={{ borderRadius: "50%" }}
                  width={35}
                  height={35}
                />
              </Box>

              <Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      backgroundColor: "grey.50",
                      p: "8px 15px",
                      borderRadius: "5px",
                      maxWidth: "90%",
                      mb: "5px",
                    }}
                    className="for-dark-bg"
                  >
                    Yeah, that's the one! It's got a sleek Material Design, and
                    the features are pretty robust.
                  </Typography>
                </Box>

                <Typography
                  component={"span"}
                  sx={{ fontSize: "12px", mt: "6px", display: "block" }}
                >
                  09:12 AM
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* right message  */}
          <Box sx={{ textAlign: "right", mb: "15px" }}>
            <Box
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                p: "8px 15px",
                borderRadius: "5px",
                display: "inline-block",
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "white !important" }}>
                Nice! What features are you finding?
              </Typography>
            </Box>
            <Typography
              component={"span"}
              sx={{ fontSize: "12px", mt: "6px", display: "block" }}
            >
              09:13 AM
            </Typography>
          </Box>

          {/* left message */}
          <Box
            sx={{
              mb: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Box sx={{ width: "35px", height: "35px", flexShrink: 0 }}>
                <img
                  src="/images/users/user31.jpg"
                  alt="user"
                  style={{ borderRadius: "50%" }}
                  width={35}
                  height={35}
                />
              </Box>

              <Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      backgroundColor: "grey.50",
                      p: "8px 15px",
                      borderRadius: "5px",
                      maxWidth: "90%",
                      mb: "5px",
                    }}
                    className="for-dark-bg"
                  >
                    Well, it has a project overview with all the key metrics on
                    the landing page – project
                  </Typography>
                </Box>

                <Typography
                  component={"span"}
                  sx={{ fontSize: "12px", mt: "6px", display: "block" }}
                >
                  09:14 AM
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* right message  */}
          <Box sx={{ textAlign: "right", mb: "15px" }}>
            <Box
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                p: "8px 15px",
                borderRadius: "5px",
                display: "inline-block",
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "white !important" }}>
                That sounds handy. How about the task management features?
              </Typography>
            </Box>
            <Typography
              component={"span"}
              sx={{ fontSize: "12px", mt: "6px", display: "block" }}
            >
              09:15 AM
            </Typography>
          </Box>

          {/* left message */}
          <Box
            sx={{
              mb: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Box sx={{ width: "35px", height: "35px", flexShrink: 0 }}>
                <img
                  src="/images/users/user31.jpg"
                  alt="user"
                  style={{ borderRadius: "50%" }}
                  width={35}
                  height={35}
                />
              </Box>

              <Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      backgroundColor: "grey.50",
                      p: "8px 15px",
                      borderRadius: "5px",
                      maxWidth: "90%",
                      mb: "5px",
                    }}
                    className="for-dark-bg"
                  >
                    Oh, they've got this Kanban board for task management. You
                    can drag and drop tasks between columns – it's so intuitive.
                    Makes tasks a breeze. 🔥
                  </Typography>
                </Box>

                <Typography
                  component={"span"}
                  sx={{ fontSize: "12px", mt: "6px", display: "block" }}
                >
                  09:16 AM
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* right message  */}
          <Box sx={{ textAlign: "right", mb: "15px" }}>
            <Box
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                p: "8px 15px",
                borderRadius: "5px",
                display: "inline-block",
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "white !important" }}>
                Sweet! What about team collaboration?
              </Typography>
            </Box>
            <Typography
              component={"span"}
              sx={{ fontSize: "12px", mt: "6px", display: "block" }}
            >
              09:17 AM
            </Typography>
          </Box>
        </Box>

        {/* Chat input section */}
        <Box sx={{ display: "flex", gap: "15px", mt: "15px" }}>
          <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <IconButton sx={{ padding: "0" }}>
              <SentimentSatisfiedIcon sx={{ fontSize: "16px" }} />
            </IconButton>
            <IconButton sx={{ padding: "0" }}>
              <AttachFileIcon sx={{ fontSize: "16px" }} />
            </IconButton>
          </Box>

          <Box sx={{ position: "relative", flexGrow: 1 }}>
            <InputBase
              placeholder="Write your message..."
              fullWidth
              sx={{
                backgroundColor: "grey.50",
                borderRadius: "5px",
                px: "15px",
                height: "45px",
                color: "text.primary",
                pr: "45px",
                fontSize: "13px",
              }}
              className="for-dark-bg"
            />

            <Button
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                px: "15px",
                minWidth: "auto",
              }}
              className="po-right-0"
            >
              <SendIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Chat;
