import * as React from "react";
import { styled, keyframes } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const shootLaser = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0) scaleX(0);
  }
  50% {
    opacity: 1;
    transform: translateX(100px) scaleX(1);
  }
  100% {
    opacity: 0;
    transform: translateX(300px) scaleX(0.5);
  }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.5),
                 0 0 20px rgba(255, 0, 0, 0.3),
                 0 0 30px rgba(255, 0, 0, 0.2);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 0, 0, 0.8),
                 0 0 30px rgba(255, 0, 0, 0.6),
                 0 0 40px rgba(255, 0, 0, 0.4),
                 0 0 50px rgba(255, 0, 0, 0.2);
  }
`;

const LaserContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  padding: theme.spacing(2),
}));

const LaserBeam = styled("div")<{ delay: number }>(({ delay }) => ({
  position: "absolute",
  right: "-20px",
  top: "50%",
  width: "300px",
  height: "3px",
  background: "linear-gradient(90deg, #ff0000, #ff6600, transparent)",
  transformOrigin: "left center",
  animation: `${shootLaser} 1.5s ease-in-out ${delay}s infinite`,
  pointerEvents: "none",
  boxShadow: "0 0 10px #ff0000, 0 0 20px #ff3300",
}));

const GlowingText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "3rem",
  background: "linear-gradient(45deg, #ff0000, #ff6600, #ff0000)",
  backgroundSize: "200% 200%",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: `${glow} 2s ease-in-out infinite`,
  position: "relative",
  display: "inline-block",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

export default function LaserTitle() {
  return (
    <LaserContainer>
      <GlowingText variant="h1" component="h1">
        HELLO
      </GlowingText>
      <LaserBeam delay={0} style={{ top: "35%" }} />
      <LaserBeam delay={0.3} style={{ top: "50%" }} />
      <LaserBeam delay={0.6} style={{ top: "65%" }} />
    </LaserContainer>
  );
}
