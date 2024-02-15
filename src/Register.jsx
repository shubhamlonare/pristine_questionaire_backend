import {
  Alert,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import { useState } from "react";
import headers from "./authentication";
import { useNavigate } from "react-router-dom";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import bg from "./assets/PristineLogo.png";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);

  const Register = () => {
    if (username == "" || email == "" || password == "") {
      setError("All fields are mandatory");
    } else {
      axios
        .post(
          `http://localhost:5001/api/user/register`,
          {
            username: username,
            email: email,
            password: password,
          },
          {
            headers: headers,
          }
        )
        .then((res) => {
          console.log(res);
          setAlert(!alert);
          setTimeout(() => {
            navigate("/login");
            setAlert(!alert);
          }, [3000]);
        })
        .catch((err) => {
          setError(err.response.data.message);
          console.log(err);
        });
    }
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
      {alert ? (
        <Alert severity="success" sx={{ marginBottom: "20px" }}>
          Registered Successfully. Redirecting to Login.
        </Alert>
      ) : (
        <></>
      )}
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
        <Typography variant="h5">Register</Typography>
        <TextField
          id="outlined-basic"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineOutlinedIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          label="Username"
          variant="outlined"
          sx={{
            backgroundColor: "#EFF1F9",
            borderRadius: "8px",
            marginTop: "20px !important",
          }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined fontSize="small" />
              </InputAdornment>
            ),
          }}
          label="Email"
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
        <div style={{ textAlign: "center", marginTop: "10px", color: "red" }}>
          {error}
        </div>
        <div>
          <Button
            variant="contained"
            style={{ marginTop: "20px" }}
            onClick={Register}
          >
            Register
          </Button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
