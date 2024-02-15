import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import axios from "axios";
import headers from "./authentication";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import bg from "./assets/PristineLogo.png";

export default function Login() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const login = () => {
    axios
      .post(
        `http://localhost:5001/api/user/login`,
        {
          email: email,
          password: password,
        },
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userId", res.data.user._id);
        // localStorage.setItem("username", res.data.user.username)
        // localStorage.setItem("userRole", res.data.user.userRole)
        let data = {
          username: res.data.user.username,
          userRole: res.data.user.userRole,
          token: res.data.accessToken,
        };
        navigate("/parentData", { state: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Parenting Data Collection
      </Typography>
      <div
        style={{
          width: "400px",
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <img src={bg} alt="" style={{ height: "80px" }} />
        <Typography variant="h5">Login</Typography>
        <TextField
          id="outlined-basic"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineSharpIcon fontSize="small"></PersonOutlineSharpIcon>
              </InputAdornment>
            ),
          }}
          label="User Id"
          variant="outlined"
          sx={{
            backgroundColor: "#EFF1F9",
            borderRadius: "8px",
            marginTop: "20px !important",
          }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          label="Password"
          type="password"
          variant="outlined"
          sx={{
            backgroundColor: "#EFF1F9",
            borderRadius: "8px",
            marginTop: "20px !important",
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>
          <Button
            variant="contained"
            style={{ marginTop: "20px" }}
            onClick={login}
          >
            Login
          </Button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
