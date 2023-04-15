import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const UpArrowFab = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const FabArrow = isBottom ? (
    <Fab
      disableRipple
      size="small"
      color="primary"
      aria-label="scroll-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      sx={{
        bgcolor:"warning.dark",
        color:"white",
        mb:2,
        mx:"auto"
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  ) : null;

  return FabArrow;
};
