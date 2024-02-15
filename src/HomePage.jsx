// import React from 'react'

import { Button, Typography } from "@mui/material";
// import BgImage from './assets/bg.svg'
import logo from "./assets/PristineLogo.png";

export default function HomePage() {
  const Login = () => {
    window.location.href = "/login";
  };
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <img src={logo} alt="" style={{ height: "100px" }} />
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "900" }}
        >
          Parenting Child Development
          <br />
          Data Collection
        </Typography>
        <br />
        <div
          style={{ width: "98vw", display: "flex", justifyContent: "center" }}
        >
          <Button onClick={Login} variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
