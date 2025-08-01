"use client";

import * as React from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

const Timeline = () => {
  return (
    <>
      <CreatePost />

      <Posts />
    </>
  );
};

export default Timeline;
