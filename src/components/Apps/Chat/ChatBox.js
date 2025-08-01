"use client";

import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  TextField,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";

const ChatBox = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card
        className="chat-card"
        sx={{
          boxShadow: "none",
          bgcolor: "#fff",
          mb: "25px",
          borderRadius: "7px",
          padding: { xs: "20px", sm: "25px" },
          position: "relative",
        }}
      >
        <Box>
          <Box
            className="chat-header"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Box position="relative">
                <img
                  src="/images/users/user31.jpg"
                  alt="user-image"
                  width={75}
                  height={75}
                  style={{ borderRadius: "100px" }}
                />
                <Box
                  bgcolor="success.main"
                  sx={{
                    width: "10px",
                    height: "10px",
                    border: "2px solid #fff",
                    borderRadius: "100px",
                    position: "absolute",
                    bottom: "10px",
                    right: "5px",
                  }}
                ></Box>
              </Box>

              <Box>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  className="text-black"
                  sx={{
                    fontSize: { xs: "13px", sm: "16px" },
                  }}
                >
                  Sarah Smith
                </Typography>

                <Typography
                  component="span"
                  sx={{
                    display: "block",
                    fontSize: { xs: "12px", sm: "14px" },
                  }}
                >
                  Active Now
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton aria-label="call" size="small">
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "17px" }}
                >
                  call
                </i>
              </IconButton>

              <IconButton aria-label="video" size="small">
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "17px" }}
                >
                  videocam
                </i>
              </IconButton>

              <Box>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "17px" }}
                  >
                    more_horiz
                  </i>
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
                  <MenuItem>Mute Chat</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Block</MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>

          <Box
            className="border-top"
            sx={{ marginTop: "15px", marginBottom: "15px" }}
          ></Box>
          <Typography sx={{ fontSize: "12px", mb: "10px !important" }}>
            2023-11-10 09:15 AM
          </Typography>

          <Box className="t-chat-body">
            <ul>
              <li>
                <img
                  src="/images/users/user31.jpg"
                  width={35}
                  height={35}
                  alt="user"
                  className="user"
                />
                <Box className="message">
                  <Box>
                    <Typography>
                      Hey Olivia, have you had a chance to check out the new
                      admin dashboard?
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      Oh, they've got this Kanban board for task management. You
                      can drag and drop tasks between columns – it's so
                      intuitive. Makes managing tasks a breeze. 🔥
                    </Typography>
                  </Box>
                </Box>
                <Typography component="span" className="time">
                  09:10 AM
                </Typography>
              </li>

              <li className="right">
                <Box className="message">
                  <Box>
                    <Typography>
                      Oh, you mean the one for project management?
                    </Typography>
                  </Box>
                </Box>
                <Typography component="span" className="time">
                  09:20 AM
                </Typography>
              </li>

              <li>
                <img
                  src="/images/users/user31.jpg"
                  width={35}
                  height={35}
                  alt="user"
                  className="user"
                />
                <Box className="message">
                  <Box>
                    <Typography>
                      Yeah, that's the one! It's got a sleek Material Design,
                      and the features are pretty robust.
                    </Typography>
                  </Box>
                </Box>
                <Typography component="span" className="time">
                  09:20 AM
                </Typography>
              </li>

              <li className="right">
                <Box className="message">
                  <Box>
                    <Typography>
                      Nice! What features are you finding interesting?
                    </Typography>
                  </Box>
                </Box>
                <Typography component="span" className="time">
                  09:21 AM
                </Typography>
              </li>

              <li>
                <img
                  src="/images/users/user31.jpg"
                  width={35}
                  height={35}
                  alt="user"
                  className="user"
                />
                <Box className="message">
                  <Box>
                    <Typography>
                      Well, it has a project overview with all the key metrics
                      on the landing page – project
                    </Typography>
                  </Box>
                </Box>
                <Typography component="span" className="time">
                  09:22 AM
                </Typography>
              </li>

              <li className="right">
                <Box className="message">
                  <Box>
                    <Typography>
                      That sounds handy. How about the task management features?
                    </Typography>
                  </Box>
                </Box>
                <Typography component="span" className="time">
                  09:25 AM
                </Typography>
              </li>

              <li>
                <img
                  src="/images/users/user31.jpg"
                  width={35}
                  height={35}
                  alt="user"
                  className="user"
                />
                <Box className="message">
                  <Box>
                    <Typography>
                      Well, it has a project overview with all the key metrics
                      on the landing page – project
                    </Typography>
                  </Box>
                </Box>
                <Typography component="span" className="time">
                  09:22 AM
                </Typography>
              </li>

              <li className="right">
                <Box className="message">
                  <Box>
                    <Typography>
                      That sounds handy. How about the task management features?
                    </Typography>
                  </Box>
                </Box>
                <Typography component="span" className="time">
                  09:25 AM
                </Typography>
              </li>

              <li>
                <img
                  src="/images/users/user31.jpg"
                  width={35}
                  height={35}
                  alt="user"
                  className="user"
                />
                <Box className="message">
                  <Box>
                    <Typography>
                      Well, it has a project overview with all the key metrics
                      on the landing page – project
                    </Typography>
                  </Box>
                </Box>
                <Typography component="span" className="time">
                  09:22 AM
                </Typography>
              </li>

              <li className="right">
                <Box className="message">
                  <Box>
                    <Typography>
                      That sounds handy. How about the task management features?
                    </Typography>
                  </Box>
                </Box>
                <Typography component="span" className="time">
                  09:25 AM
                </Typography>
              </li>

              <li>
                <img
                  src="/images/users/user31.jpg"
                  width={35}
                  height={35}
                  alt="user"
                  className="user"
                />
                <Box className="message">
                  <Box>
                    <Typography>
                      Oh, they've got this Kanban board for task management. You
                      can drag and drop tasks between columns – it's so
                      intuitive.
                    </Typography>
                  </Box>
                </Box>
                <Typography component="span" className="time">
                  09:30 AM
                </Typography>
              </li>

              <li className="right">
                <Box className="message">
                  <Box>
                    <Typography>
                      Sweet! What about team collaboration?
                    </Typography>
                  </Box>
                </Box>
                <Typography component="span" className="time">
                  09:31 AM
                </Typography>
              </li>
            </ul>
          </Box>

          <Box
            className="chat-footer bg-f6f7f9"
            sx={{
              padding: "20px",
              display: { sm: "flex" },
              borderRadius: "7px",
              alignItems: "center",
              gap: "20px",
              mt: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: { xs: "10px", sm: "0" },
              }}
            >
              <IconButton aria-label="call" size="small">
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "16px" }}
                >
                  sentiment_satisfied
                </i>
              </IconButton>

              <IconButton aria-label="video" size="small">
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "16px" }}
                >
                  attach_file
                </i>
              </IconButton>

              <IconButton aria-label="video" size="small">
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "16px" }}
                >
                  mic_none
                </i>
              </IconButton>

              <IconButton aria-label="video" size="small">
                <i
                  className="material-symbols-outlined"
                  style={{ fontSize: "16px" }}
                >
                  image
                </i>
              </IconButton>
            </Box>

            <Box sx={{ flex: "1 1 auto" }}>
              <form>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <TextField
                      autoComplete="message"
                      name="message"
                      required
                      fullWidth
                      id="message"
                      label="Type your message"
                      autoFocus
                      InputProps={{
                        style: {
                          borderRadius: "7px",
                        },
                      }}
                      sx={{
                        borderRadius: "7px",
                      }}
                      className="bg-white"
                    />
                  </Box>

                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "primary.main",
                        padding: "14px 10px",
                      }}
                      className="text-white"
                    >
                      <i className="material-symbols-outlined">send</i>
                    </Button>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default ChatBox;
