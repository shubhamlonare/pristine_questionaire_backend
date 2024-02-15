import React, { useCallback, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

// import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
import axios from "axios";
// import Papa from 'papaparse';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { CSVLink } from "react-csv";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { FormControl, Grid, InputLabel, MenuItem } from "@mui/material";
import headers from "./authentication";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  // console.log(data);

  let token = localStorage.getItem("token");

  const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phnumber, setPhnumber] = useState("");
  const [age, setAge] = useState("");
  const [pin, setPin] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [income, setIncome] = useState("");
  const [service, setService] = useState("");
  const [profession, setProfession] = useState("");
  const [industry, setIndustry] = useState("");
  const [religion, setReligion] = useState("");
  const [language, setLanguage] = useState("");
  const [stime, setStime] = useState("");
  const [things, setThings] = useState("");
  const [practices, setPractices] = useState("");
  const [values, setValues] = useState("");
  const [typeActivity, setTypeActivity] = useState("");
  const [emotionalActivity, setEmotionalActivity] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [culturalActivity, setCulturalActivity] = useState("");
  const [challenges, setChallenges] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [wish, setWish] = useState("");
  const [advice, setAdvice] = useState("");
  const [childrennumber, setChildrennumber] = useState(0);

  const [additionallanguage, setAdditionallanguage] = useState("");

  const [open, setOpen] = React.useState(false);

  const [childInfo, setChildInfo] = useState([]);

  // const [formValues, setFormValues] = useState([]);
  const [bookInfoValues, setBookInfoValues] = useState([]);
  const [bookInfo, setBookInfo] = useState([]);

  const [activityInfo, setActivityInfo] = useState([]);
  const [activityInfoValues, setActivityInfoValues] = useState([]);

  const [error, setError] = useState("");
  const [row, setRow] = useState([]);

  const [id, setId] = useState(undefined);

  let userId = localStorage.getItem("userId");
  // let internName = localStorage.getItem("username")
  // let userRole = localStorage.getItem("userRole")

  const [internName, setInterName] = useState("");

  const [filter, setFilter] = useState(false);

  const columns = [
    {
      field: "intern",
      headerName: "Intern",
      width: 90,
      headerClassName: "super-app-theme--header",
      renderHeader: () => (
        <strong style={{ color: "white" }}>{"Intern"}</strong>
      ),
    },
    {
      field: "name",
      headerName: "Parent Name",
      width: 150,
      headerClassName: "super-app-theme--header",
      renderHeader: () => (
        <strong style={{ color: "white" }}>{"Parent Name"}</strong>
      ),
    },
    {
      field: "phone",
      headerName: "Mobile No.",
      width: 150,
      type: "string",
      headerClassName: "super-app-theme--header",
      renderHeader: () => (
        <strong style={{ color: "white" }}>{"Mobile No."}</strong>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 180,
      headerClassName: "super-app-theme--header",
      renderHeader: () => <strong style={{ color: "white" }}>{"Email"}</strong>,
    },
    {
      field: "age",
      headerName: "Age",
      type: "string",
      width: 150,
      headerClassName: "super-app-theme--header",
      renderHeader: () => <strong style={{ color: "white" }}>{"Age"}</strong>,
    },
    {
      field: "noOfChildren",
      headerName: "No. of Child",
      type: "string",
      width: 150,
      headerClassName: "super-app-theme--header",
      renderHeader: () => (
        <strong style={{ color: "white" }}>{"No. of Child"}</strong>
      ),
    },
    {
      field: "profession",
      headerName: "Profession",
      type: "string",
      width: 150,
      headerClassName: "super-app-theme--header",
      renderHeader: () => (
        <strong style={{ color: "white" }}>{"Profession"}</strong>
      ),
    },

    {
      field: "service",
      headerName: "Service",
      type: "string",
      width: 150,
      headerClassName: "super-app-theme--header",
      renderHeader: () => (
        <strong style={{ color: "white" }}>{"Service"}</strong>
      ),
    },
    {
      field: "religion",
      headerName: "Religion",
      type: "string",
      width: 150,
      headerClassName: "super-app-theme--header",
      renderHeader: () => (
        <strong style={{ color: "white" }}>{"Religion"}</strong>
      ),
    },
    {
      field: "city",
      headerName: "City",
      type: "string",
      width: 130,
      headerClassName: "super-app-theme--header",
      renderHeader: () => <strong style={{ color: "white" }}>{"City"}</strong>,
    },
    {
      field: "state",
      headerName: "State",
      type: "string",
      width: 130,
      headerClassName: "super-app-theme--header",
      renderHeader: () => <strong style={{ color: "white" }}>{"State"}</strong>,
    },
    // {
    //   field: "activityInfo",
    //   headerName: "Activity",
    //   type: "string",
    //   width: 130,
    // },
    // {
    //   field: "actions",
    //   type: "actions",
    //   headerName: "Actions",
    //   width: 160,
    //   headerClassName: 'super-app-theme--header',
    //   renderHeader: () => (
    //     <strong style={{ color: "white" }}>
    //       {'Actions'}
    //     </strong>
    //   ),
    //   cellClassName: "actions",
    //   getActions: ({ id }) => {
    //     // console.log(id)
    //     return [
    //       <GridActionsCellItem
    //         key={id}
    //         icon={<EditIcon />}
    //         label="Edit"
    //         sx={{
    //           color: "primary.main",
    //         }}
    //         onClick={() => handleClickOpen(id)}
    //       />,
    //     ];
    //   },
    // },
  ];

  const handleClickOpen = (id) => {
    console.log(id);
    setId(id);
    if (id != undefined) {
      axios
        .get(`http://localhost:5001/api/contacts/${id}`, {
          headers: headers,
        })
        .then((res) => {
          console.log(res);
          let data = res.data;
          setName(data.name);
          setEmail(data.email);
          setAge(data.age);
          setPhnumber(data.phone);
          setPin(data.pinCode);
          setCity(data.city);
          setState(data.state);
          setIncome(data.income);
          setService(data.service);
          setProfession(data.profession);
          setIndustry(data.industry);
          setReligion(data.religion);
          setLanguage(data.language);
          setChildrennumber(data.noOfChildren);
          setValues(data.values);
          setTypeActivity(data.typeActivity);
          setEmotionalActivity(data.emotionalActivity);
          setDiscipline(data.discipline);
          setCulturalActivity(data.culturalActivity);
          setChallenges(data.challenges);
          setWorkshop(data.workshop);
          setWish(data.wish);
          setStime(data.stime);
          setThings(data.things);
          setPractices(data.practices);
          setAdditionallanguage(data.additionalLanguage);
          setBookInfo(data.bookInfo);
          handleChangeBookInfo(data.bookInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setOpen(true);
  };

  const saveInfo = () => {
    if (id === undefined) {
      const postData = {
        userId: userId,
        intern: data.username,
        userRole: data.userRole,
        name: name,
        email: email,
        phone: phnumber,
        age: age,
        pinCode: pin,
        city: city,
        state: state,
        income: income,
        service: service,
        profession: profession,
        industry: industry,
        religion: religion,
        noOfChildren: childrennumber,
        language: language,
        additionalLanguage: additionallanguage,
        values: values,
        typeActivity: typeActivity,
        emotionalActivity: emotionalActivity,
        discipline: discipline,
        culturalActivity: culturalActivity,
        challenges: challenges,
        workshop: workshop,
        wish: wish,
        advice: advice,
        stime: stime,
        things: things,
        practices: practices,
        bookInfo: Object.values(bookInfoValues),
        activityInfo: Object.values(activityInfoValues),
      };
      const apiUrl = "http://localhost:5001/api/contacts";
      axios
        .post(apiUrl, postData, {
          headers: {
            Authorization: "Bearer " + data.token,
          },
        })
        .then((response) => {
          console.log("Response:", response.data);
          handleClose();
          closeConfirm();
          getRow();
        })
        .catch((error) => {
          if (error.response.status === 400) {
            setError("All Fields are mandatory!");
          }
          // console.error("Error:", error);
          // console.log(error)
        });
    } else {
      const postData = {
        // _id: id,
        userId: userId,
        intern: data.username,
        userRole: data.userRole,
        name: name,
        email: email,
        phone: phnumber,
        age: age,
        pinCode: pin,
        city: city,
        state: state,
        income: income,
        service: service,
        profession: profession,
        industry: industry,
        religion: religion,
        noOfChildren: childrennumber,
        language: language,
        additionalLanguage: additionallanguage,
        values: values,
        typeActivity: typeActivity,
        emotionalActivity: emotionalActivity,
        discipline: discipline,
        culturalActivity: culturalActivity,
        challenges: challenges,
        workshop: workshop,
        wish: wish,
        advice: advice,
        stime: stime,
        things: things,
        practices: practices,
        bookInfo: Object.values(bookInfoValues),
        activityInfo: Object.values(activityInfoValues),
      };
      const apiUrl = `http://localhost:5001/api/contacts/${id}`;
      axios
        .put(apiUrl, postData, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          console.log("Response:", response.data);
          handleClose();
          closeConfirm();
          getRow();
        })
        .catch((error) => {
          if (error.response.status === 400) {
            setError("All Fields are mandatory!");
          }
          // console.error("Error:", error);
          // console.log(error)
        });
    }
  };

  const handleClose = () => {
    setId("");
    setOpen(false);
    setName("");
    setEmail("");
    setAge("");
    setPhnumber("");
    setPin("");
    setCity("");
    setState("");
    setIncome("");
    setService("");
    setProfession("");
    setIndustry("");
    setReligion("");
    setLanguage("");
    setChildrennumber(0);
    setAdditionallanguage("");
    setValues("");
    setTypeActivity("");
    setEmotionalActivity("");
    setDiscipline("");
    setCulturalActivity("");
    setChallenges("");
    setWorkshop("");
    setWish("");
    setAdvice("");

    setStime("");
    setThings("");
    setPractices("");
    // setChildInfo([])
    setBookInfoValues([]);
    setBookInfo([]);
    setActivityInfo([]);
    setActivityInfoValues([]);
    setError("");
  };

  const handleNumberOfChildrenChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setChildrennumber(value);
  };

  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];

  //handle for child info accordion....
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   // Extract group and field names from the input name
  //   const [groupName, fieldName] = name.split('.');

  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     [groupName]: {
  //       ...prevValues[groupName],
  //       [fieldName]: value,
  //     },
  //   }));
  // }

  const handleAddBookInfo = () => {
    const abc = [...bookInfo, []];
    setBookInfo(abc);
  };

  // const handleDeleteBookInfo = (i) => {
  //   const deleteVal = [...bookInfo]
  //   deleteVal.splice(i, 1)
  //   setBookInfo(deleteVal)
  // }

  const handleChangeBookInfo = (e) => {
    const { name, value } = e.target;
    // Extract group and field names from the input name
    const [groupName, fieldName] = name.split(".");

    setBookInfoValues((prevValues) => ({
      ...prevValues,
      [groupName]: {
        ...prevValues[groupName],
        [fieldName]: value,
      },
    }));
  };

  const setPinCode = (e) => {
    console.log(pin);
    if (e.length === 6) {
      axios
        .get(`https://api.postalpincode.in/pincode/${e}`)
        .then((res) => {
          if (res.status == 200) {
            let data = res.data[0].PostOffice[0];
            setCity(data.District);
            setState(data.State);
            console.log(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const setPhoneNo = (e) => {
    if (e.length == 10) {
      axios
        .get(`http://localhost:5001/api/contacts/phoneno/${e}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            const userData = res.data[0];
            setName(userData.name);
            setEmail(userData.email);
            setId(userData._id);
            console.log("Submitted Sucessfully");
          }
        });
    }
  };

  const addActitivityInfo = () => {
    const abc = [...activityInfo, []];
    setActivityInfo(abc);
  };

  const handleChangeActivityInfo = (e) => {
    const { name, value } = e.target;
    // Extract group and field names from the input name
    const [groupName, fieldName] = name.split(".");

    setActivityInfoValues((prevValues) => ({
      ...prevValues,
      [groupName]: {
        ...prevValues[groupName],
        [fieldName]: value,
      },
    }));
  };

  const getRow = useCallback(async () => {
    if (data.userRole == "Admin") {
      axios
        .get(`http://localhost:5001/api/contacts`, {
          headers: {
            Authorization: "Bearer " + data.token,
          },
        })
        .then((res) => {
          console.log(res);
          setRow(res.data);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 401) {
            window.location.href = "/";
          }
        });
    } else {
      axios
        .get(`http://localhost:5001/api/contacts/intern/${data.username}`, {
          headers: {
            Authorization: "Bearer " + data.token,
          },
        })
        .then((res) => {
          console.log(res);
          setRow(res.data);
        })
        .catch((err) => {
          if (err.response.status == 401) {
            window.location.href = "/";
          }
        });
    }
  }, []);

  useEffect(() => {
    getRow();
  }, [getRow]);

  const exportData = (data, fileName, type) => {
    // Create a link and download the file
    const blob = new Blob([data], { type });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const downloadCsv = () => {
    axios
      .get(`http://localhost:5001/api/contacts`, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
        let newData = res.data;

        // let activityInfo = []
        // newData.forEach(element => {
        //   // console.log(...element.activityInfo)
        //   activityInfo.push(...element.activityInfo)
        // })

        // let bookInfo = []
        // newData.forEach(element => {
        //   // console.log(...element.activityInfo)
        //   bookInfo.push(...element.bookInfo)
        // })

        // const bookInfoCsvData = Papa.unparse(bookInfo)
        // exportData(bookInfoCsvData, 'bookInfo.csv', 'text/csv;charset=utf-8;');
        // const activtyCsvData = Papa.unparse(activityInfo)
        // exportData(activtyCsvData, 'activity.csv', 'text/csv;charset=utf-8;');

        // const csvData = Papa.unparse(newData);
        const csvData = JSON.stringify(Object.values(...newData));
        exportData(csvData, "data.csv", "text/csv;charset=utf-8;");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const openSearchBox = () => {
  //   setFilter(!filter);
  // };

  const closeSearchBox = () => {
    setFilter(!filter);
    setInterName("");
  };

  const search = () => {
    axios
      .get(`http://localhost:5001/api/contacts/intern/${internName}`, {
        headers: {
          Authorization: "Bearer " + data.token,
        },
      })
      .then((res) => {
        console.log(res);
        setRow(res.data);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          window.location.href = "/";
        }
      });
  };

  const reset = () => {
    getRow();
  };

  const closeConfirm = () => {
    setOpenConfirmDialog(!openConfirmDialog);
    setError("");
  };

  const openConfirm = () => {
    setOpenConfirmDialog(!openConfirmDialog);
  };

  const handleChange1 = (e) => {
    const stime = e.target.value;
    const words = stime.split(/\s+/).filter(Boolean);
    if (words.length <= 500) {
      setStime(stime);
    }
  };
  const handleChange2 = (e) => {
    const things = e.target.value;
    const words = things.split(/\s+/).filter(Boolean);
    if (words.length <= 500) {
      setThings(things);
    }
  };
  const handleChange3 = (e) => {
    const practices = e.target.value;
    const words = practices.split(/\s+/).filter(Boolean);
    if (words.length <= 500) {
      setPractices(practices);
    }
  };
  const handleChange4 = (e) => {
    const values = e.target.value;
    const words = values.split(/\s+/).filter(Boolean);
    if (words.length <= 500) {
      setValues(values);
    }
  };
  const handleChange5 = (e) => {
    const typeActivity = e.target.value;
    const words = typeActivity.split(/\s+/).filter(Boolean);
    if (words.length <= 500) {
      setTypeActivity(typeActivity);
    }
  };
  const handleChange6 = (e) => {
    const emotionalActivity = e.target.value;
    const words = emotionalActivity.split(/\s+/).filter(Boolean);
    if (words.length <= 500) {
      setEmotionalActivity(emotionalActivity);
    }
  };
  const handleChange7 = (e) => {
    const discipline = e.target.value;
    const words = discipline.split(/\s+/).filter(Boolean);
    if (words.length <= 500) {
      setDiscipline(discipline);
    }
  };
  const handleChange8 = (e) => {
    const culturalActivity = e.target.value;
    const words = culturalActivity.split(/\s+/).filter(Boolean);
    if (words.length <= 500) {
      setCulturalActivity(culturalActivity);
    }
  };
  const handleChange9 = (e) => {
    const challenges = e.target.value;
    const words = challenges.split(/\s+/).filter(Boolean);
    if (words.length <= 500) {
      setChallenges(challenges);
    }
  };
  const handleChange10 = (e) => {
    const workshop = e.target.value;
    const words = workshop.split(/\s+/).filter(Boolean);
    if (words.length <= 500) {
      setWorkshop(workshop);
    }
  };
  const handleChange11 = (e) => {
    const wish = e.target.value;
    const words = wish.split(/\s+/).filter(Boolean);
    if (words.length <= 500) {
      setWish(wish);
    }
  };
  const handleChange12 = (e) => {
    const advice = e.target.value;
    const words = advice.split(/\s+/).filter(Boolean);
    if (words.length <= 500) {
      setAdvice(advice);
    }
  };

  return (
    <>
      <React.Fragment>
        {/* Dialog Box functionality */}

        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Parent & Child Form
              </Typography>
              <Typography
                sx={{ ml: 2, flex: 0.2 }}
                variant="h6"
                component="div"
              >
                Intern Name:- &nbsp;{data.username}
              </Typography>
            </Toolbar>
          </AppBar>
          <Typography
            sx={{ color: "red", fontSize: "16px", textAlign: "center" }}
          >
            {error}
          </Typography>
          <List>
            <ListItem>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <Typography
                  sx={{ fontSize: "16px", fontWeight: 900 }}
                  gutterBottom
                >
                  Parent Information:-
                </Typography>
                <div>
                  <TextField
                    required
                    id="outlined-required"
                    label="Phone No"
                    size="small"
                    value={phnumber}
                    type="number"
                    onChange={(e) => {
                      setPhnumber(e.target.value);
                      setPhoneNo(e.target.value);
                    }}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Full Name"
                    size="small"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="email"
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Age"
                    size="small"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <TextField
                    id="outlined-required"
                    label="Pin No."
                    type="number"
                    size="small"
                    value={pin}
                    required
                    onChange={(e) => {
                      setPin(e.target.value);
                      setPinCode(e.target.value);
                    }}
                  />
                  <TextField
                    id="outlined-required"
                    label="City"
                    type="text"
                    size="small"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                  <TextField
                    id="outlined-required"
                    label="State"
                    size="small"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    type="text"
                    required
                  />
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Annual Income
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={income}
                      size="small"
                      onChange={(e) => setIncome(e.target.value)}
                      label="Annual Income"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Lessthan5lakhs"}>
                        Less than 5 Lakhs
                      </MenuItem>
                      <MenuItem value={"5to10lakhs"}>5 to 10 Lakhs</MenuItem>
                      <MenuItem value={"10to20lakhs"}>10 to 20 Lakhs</MenuItem>
                      <MenuItem value={"Morethan20lakhs"}>
                        More than 20 Lakhs
                      </MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Type of Service
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={service}
                      size="small"
                      onChange={(e) => setService(e.target.value)}
                      label="Types of Service"
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Service"}>Service</MenuItem>
                      <MenuItem value={"Business"}>Business</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Profession
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={profession}
                      size="small"
                      onChange={(e) => setProfession(e.target.value)}
                      label="Profession"
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Engineer"}>Engineer</MenuItem>
                      <MenuItem value={"Doctors"}>Doctors</MenuItem>
                      <MenuItem value={"Lawyer"}>Lawyer</MenuItem>
                      <MenuItem value={"CA"}>CA</MenuItem>
                      <MenuItem value={"Artist"}>Artist</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Industry
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={industry}
                      size="small"
                      onChange={(e) => setIndustry(e.target.value)}
                      label="industry"
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Itindustry"}>IT industry</MenuItem>
                      <MenuItem value={"Automotive"}>Automotive</MenuItem>
                      <MenuItem value={"BFSI"}>BFSI</MenuItem>
                      <MenuItem value={"Manufacturing"}>Manufacturing</MenuItem>
                      <MenuItem value={"Reserach"}>Research</MenuItem>
                      <MenuItem value={"Defence"}>Defence</MenuItem>
                      <MenuItem value={"Academy"}>Academy</MenuItem>
                      <MenuItem value={"GovtServant"}>Govt Servant</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, minWidth: 200 }}
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Religion
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={religion}
                      onChange={(e) => setReligion(e.target.value)}
                      label="religion"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Hindu"}>Hindu</MenuItem>
                      <MenuItem value={"Muslim"}> Muslim</MenuItem>
                      <MenuItem value={"Christian"}>Christian</MenuItem>
                      <MenuItem value={"Sikh"}>Sikh</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="outlined-required"
                    label="No.of Children"
                    size="small"
                    value={childrennumber}
                    onChange={(e) => {
                      handleNumberOfChildrenChange(e);
                      setChildInfo(...childInfo, []);
                    }}
                    type="number"
                    required
                  />
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, minWidth: 220 }}
                    size="small"
                  >
                    <InputLabel id="demo-select-small-label">
                      Children Mother Tongue
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      label="religion"
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Hindi"}>Hindi</MenuItem>
                      <MenuItem value={"Bengali"}>Bengali</MenuItem>
                      <MenuItem value={"Marathi"}>Marathi</MenuItem>
                      <MenuItem value={"Telugu"}>Telugu</MenuItem>
                      <MenuItem value={"Tamil"}>Tamil</MenuItem>
                      <MenuItem value={"Gujrati"}>Gujrati</MenuItem>
                      <MenuItem value={"Urdu"}>Urdu</MenuItem>
                      <MenuItem value={"Kannada"}>Kannada</MenuItem>
                      <MenuItem value={"Oriya"}>Oriya</MenuItem>
                      <MenuItem value={"Malyalam"}>Malyalam</MenuItem>
                      <MenuItem value={"Punjabi"}>Punjabi</MenuItem>
                      <MenuItem value={"Assami"}>Assami</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl
                    variant="filled"
                    sx={{ m: 1, minWidth: 300 }}
                    size="small"
                  >
                    <InputLabel id="demo-select-small-label">
                      Secondary language used at home
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={additionallanguage}
                      onChange={(e) => setAdditionallanguage(e.target.value)}
                      label="additionallanguage"
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Hindi"}>Hindi</MenuItem>
                      <MenuItem value={"Bengali"}>Bengali</MenuItem>
                      <MenuItem value={"Marathi"}>Marathi</MenuItem>
                      <MenuItem value={"Telugu"}>Telugu</MenuItem>
                      <MenuItem value={"Tamil"}>Tamil</MenuItem>
                      <MenuItem value={"Gujrati"}>Gujrati</MenuItem>
                      <MenuItem value={"Urdu"}>Urdu</MenuItem>
                      <MenuItem value={"Kannada"}>Kannada</MenuItem>
                      <MenuItem value={"Oriya"}>Oriya</MenuItem>
                      <MenuItem value={"Malyalam"}>Malyalam</MenuItem>
                      <MenuItem value={"Punjabi"}>Punjabi</MenuItem>
                      <MenuItem value={"Assami"}>Assami</MenuItem>
                    </Select>
                  </FormControl>
                  {/* <TextField
                    id="outlined-required"
                    label="Secondary Language Used at home"
                    value={additionallanguage}
                    size="small"
                    onChange={(e) => setAdditionallanguage(e.target.value)}
                    sx={{ minWidth: 300 }}
                  ></TextField> */}
                  <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "16px", fontWeight: 900 }}
                    gutterBottom
                  >
                    Children Information:-
                  </Typography>

                  {/* {
                    Array.from({ length: childrennumber }, (_, index) => (
                      <>
                        <Accordion key={index}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography variant="h6">Child {index + 1}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TextField
                              type="text"
                              name={`${index + 1}.name`}
                              onChange={handleChange}
                            />

                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 200 }}
                            >
                              <InputLabel id="demo-simple-select-standard-label">
                                Gender
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                name={`${index + 1}.gender`}
                                onChange={
                                  handleChange
                                }
                                label="gender"
                                required
                              >

                                <MenuItem value={"Boy"}>Boy</MenuItem>
                                <MenuItem value={"Girl"}>Girl</MenuItem>
                              </Select>
                            </FormControl>

                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 200 }}
                            >
                              <InputLabel id="demo-simple-select-standard-label">
                                Age
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                name={`${index + 1}.age`}
                                onChange={
                                  handleChange
                                }
                                label="Age"
                                required
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={"4"}>4 yrs</MenuItem>
                                <MenuItem value={"5"}>5 yrs</MenuItem>
                                <MenuItem value={"6"}>6 yrs</MenuItem>
                                <MenuItem value={"7"}>7 yrs</MenuItem>
                                <MenuItem value={"8"}>8 yrs</MenuItem>
                                <MenuItem value={"9"}>9 yrs</MenuItem>
                                <MenuItem value={"10"}>10 yrs</MenuItem>
                                <MenuItem value={"11"}>11 yrs</MenuItem>
                                <MenuItem value={"12"}>12 yrs</MenuItem>
                                <MenuItem value={"13"}>13 yrs</MenuItem>
                                <MenuItem value={"14"}>14 yrs</MenuItem>
                                <MenuItem value={"15"}>15 yrs</MenuItem>
                                <MenuItem value={"16"}>16 yrs</MenuItem>
                              </Select>
                            </FormControl>
                            <FormControl
                              variant="filled"
                              sx={{ m: 1, minWidth: 200 }}
                            >
                              <InputLabel id="demo-simple-select-standard-label">
                                Academic Standard
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={standard}
                                name={`${index + 1}.academicStandard`}
                                onChange={
                                  handleChange
                                }
                                label="Academicstandard"
                                required
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={"1st"}>1st</MenuItem>
                                <MenuItem value={"2nd"}>2nd</MenuItem>
                                <MenuItem value={"3rd"}>3rd</MenuItem>
                                <MenuItem value={"4th"}>4th</MenuItem>
                                <MenuItem value={"5th"}>5th</MenuItem>
                                <MenuItem value={"6th"}>6th</MenuItem>
                                <MenuItem value={"7th"}>7th</MenuItem>
                                <MenuItem value={"8th"}>8th</MenuItem>
                                <MenuItem value={"9th"}>9th</MenuItem>
                                <MenuItem value={"10th"}>10th</MenuItem>
                              </Select>
                            </FormControl>
                          </AccordionDetails>
                        </Accordion>
                      </>
                    ))} */}

                  <div style={{ display: "flex", marginTop: "20px" }}>
                    <Typography sx={{ fontSize: "14px" }} gutterBottom>
                      Which books would you recommend for kids to read at
                      various age?(Non-Academic)
                    </Typography>
                  </div>

                  <div>
                    <TextField
                      required
                      id="outlined-required"
                      label="Book Name"
                      size="small"
                      name={`${0 + 1}.bookname`}
                      onChange={handleChangeBookInfo}
                      sx={{ width: "300px !important" }}
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Author Name"
                      size="small"
                      // value={data}
                      name={`${0 + 1}.author`}
                      sx={{ width: "300px !important" }}
                      onChange={handleChangeBookInfo}
                    />
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Book Language
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        name={`${0 + 1}.language`}
                        size="small"
                        // value={data}
                        onChange={handleChangeBookInfo}
                        label="Academic board"
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"English"}>English</MenuItem>
                        <MenuItem value={"Marathi"}>Marathi</MenuItem>
                        <MenuItem value={"Tamil"}>Tamil</MenuItem>
                        <MenuItem value={"Telgu"}>Telgu</MenuItem>
                        <MenuItem value={"Hindi"}>Hindi</MenuItem>
                        <MenuItem value={"Kannada"}>Kannada</MenuItem>
                        <MenuItem value={"Oriya"}>Oriya</MenuItem>
                        <MenuItem value={"Gujrati"}>Gujrati</MenuItem>
                        <MenuItem value={"Marwari"}>Marwari</MenuItem>
                        <MenuItem value={"Urdu"}>Urdu</MenuItem>
                        <MenuItem value={"Haryanvi"}>Haryanvi</MenuItem>
                        <MenuItem value={"Malyalam"}>Malyalam</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Prefferd Age
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        name={`${0 + 1}.age`}
                        size="small"
                        // value={data}
                        onChange={handleChangeBookInfo}
                        label="Preferred Age"
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"lessthan6yrs"}>
                          less than 6yrs
                        </MenuItem>
                        <MenuItem value={"6yrs"}>6 yrs</MenuItem>
                        <MenuItem value={"7yrs"}>7 yrs</MenuItem>
                        <MenuItem value={"8yrs"}>8 yrs</MenuItem>
                        <MenuItem value={"9yrs"}>9 yrs</MenuItem>
                        <MenuItem value={"10yrs"}>10 yrs</MenuItem>
                        <MenuItem value={"11yrs"}>11 yrs</MenuItem>
                        <MenuItem value={"12yrs"}>12 yrs</MenuItem>
                        <MenuItem value={"13yrs"}>13 yrs</MenuItem>
                        <MenuItem value={"14yrs"}>14 yrs</MenuItem>
                        <MenuItem value={"15yrs"}>15 yrs</MenuItem>
                        <MenuItem value={"16yrs"}>16 yrs</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div>
                    <TextField
                      required
                      id="outlined-required"
                      label="Book Name"
                      size="small"
                      name={`${1 + 1}.bookname`}
                      onChange={handleChangeBookInfo}
                      sx={{ width: "300px !important" }}
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Author Name"
                      size="small"
                      // value={data}
                      name={`${1 + 1}.author`}
                      onChange={handleChangeBookInfo}
                      sx={{ width: "300px !important" }}
                    />
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Book Language
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        name={`${1 + 1}.language`}
                        size="small"
                        // value={data}
                        onChange={handleChangeBookInfo}
                        label="Academic board"
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"English"}>English</MenuItem>
                        <MenuItem value={"Marathi"}>Marathi</MenuItem>
                        <MenuItem value={"Tamil"}>Tamil</MenuItem>
                        <MenuItem value={"Telgu"}>Telgu</MenuItem>
                        <MenuItem value={"Hindi"}>Hindi</MenuItem>
                        <MenuItem value={"Kannada"}>Kannada</MenuItem>
                        <MenuItem value={"Oriya"}>Oriya</MenuItem>
                        <MenuItem value={"Gujrati"}>Gujrati</MenuItem>
                        <MenuItem value={"Marwari"}>Marwari</MenuItem>
                        <MenuItem value={"Urdu"}>Urdu</MenuItem>
                        <MenuItem value={"Haryanvi"}>Haryanvi</MenuItem>
                        <MenuItem value={"Malyalam"}>Malyalam</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Preferred Age
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        name={`${1 + 1}.age`}
                        size="small"
                        // value={data}
                        onChange={handleChangeBookInfo}
                        label="Preferred Age"
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"lessthan6yrs"}>
                          less than 6yrs
                        </MenuItem>
                        <MenuItem value={"6yrs"}>6 yrs</MenuItem>
                        <MenuItem value={"7yrs"}>7 yrs</MenuItem>
                        <MenuItem value={"8yrs"}>8 yrs</MenuItem>
                        <MenuItem value={"9yrs"}>9 yrs</MenuItem>
                        <MenuItem value={"10yrs"}>10 yrs</MenuItem>
                        <MenuItem value={"11yrs"}>11 yrs</MenuItem>
                        <MenuItem value={"12yrs"}>12 yrs</MenuItem>
                        <MenuItem value={"13yrs"}>13 yrs</MenuItem>
                        <MenuItem value={"14yrs"}>14 yrs</MenuItem>
                        <MenuItem value={"15yrs"}>15 yrs</MenuItem>
                        <MenuItem value={"16yrs"}>16 yrs</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  {bookInfo.map((data, i) => (
                    <>
                      <div>
                        <TextField
                          required
                          id="outlined-required"
                          label="Book Name"
                          size="small"
                          name={`${i + 3}.bookname`}
                          sx={{ width: "300px !important" }}
                          onChange={handleChangeBookInfo}
                        />
                        <TextField
                          required
                          id="outlined-required"
                          label="Author Name"
                          size="small"
                          // value={data}
                          name={`${i + 3}.author`}
                          sx={{ width: "300px !important" }}
                          onChange={handleChangeBookInfo}
                        />
                        <FormControl
                          variant="filled"
                          sx={{ m: 1, minWidth: 200 }}
                        >
                          <InputLabel id="demo-simple-select-standard-label">
                            Book Language
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            name={`${i + 3}.language`}
                            size="small"
                            // value={data}
                            onChange={handleChangeBookInfo}
                            label="Academic board"
                            required
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"English"}>English</MenuItem>
                            <MenuItem value={"Marathi"}>Marathi</MenuItem>
                            <MenuItem value={"Tamil"}>Tamil</MenuItem>
                            <MenuItem value={"Telgu"}>Telgu</MenuItem>
                            <MenuItem value={"Hindi"}>Hindi</MenuItem>
                            <MenuItem value={"Kannada"}>Kannada</MenuItem>
                            <MenuItem value={"Oriya"}>Oriya</MenuItem>
                            <MenuItem value={"Gujrati"}>Gujrati</MenuItem>
                            <MenuItem value={"Marwari"}>Marwari</MenuItem>
                            <MenuItem value={"Urdu"}>Urdu</MenuItem>
                            <MenuItem value={"Haryanvi"}>Haryanvi</MenuItem>
                            <MenuItem value={"Malyalam"}>Malyalam</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl
                          variant="filled"
                          sx={{ m: 1, minWidth: 200 }}
                        >
                          <InputLabel id="demo-simple-select-standard-label">
                            Prefferd Age
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            name={`${i + 3}.age`}
                            size="small"
                            // value={data}
                            onChange={handleChangeBookInfo}
                            label="Preferred Age"
                            required
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"lessthan6yrs"}>
                              less than 6yrs
                            </MenuItem>
                            <MenuItem value={"6yrs"}>6 yrs</MenuItem>
                            <MenuItem value={"7yrs"}>7 yrs</MenuItem>
                            <MenuItem value={"8yrs"}>8 yrs</MenuItem>
                            <MenuItem value={"9yrs"}>9 yrs</MenuItem>
                            <MenuItem value={"10yrs"}>10 yrs</MenuItem>
                            <MenuItem value={"11yrs"}>11 yrs</MenuItem>
                            <MenuItem value={"12yrs"}>12 yrs</MenuItem>
                            <MenuItem value={"13yrs"}>13 yrs</MenuItem>
                            <MenuItem value={"14yrs"}>14 yrs</MenuItem>
                            <MenuItem value={"15yrs"}>15 yrs</MenuItem>
                            <MenuItem value={"16yrs"}>16 yrs</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </>
                  ))}
                  <div
                    style={{
                      width: "71%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{ ml: 2 }}
                      onClick={handleAddBookInfo}
                    >
                      +
                    </Button>
                  </div>

                  {/* <div>
                    <table>
                      <thead>
                        <tr>
                          <th>Sr. no</th>
                          <th>Book Name</th>
                          <th>Author Name</th>
                          <th>Language</th>
                          <th>Preferred Age</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activityDropdown.map((row) => (
                          <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>
                              <input type="text" name={row.bookname} onChange={(e) => handleTextChange(row.id, e.target.value)} />
                            </td>
                            <td><input type="text" name={row.author} onChange={(e) => handleTextChange(row.id, e.target.value)} /></td>
                            <td><input type="text" name={row.language} onChange={(e) => handleTextChange(row.id, e.target.value)} /></td>
                            <td><input type="number" name={row.age} onChange={(e) => handleTextChange(row.id, e.target.value)} /></td>       
                          </tr>))}
                      </tbody>
                    </table>
                    <Button onClick={addRow}>Add Row</Button>
                  </div> */}
                </div>
              </Box>
            </ListItem>
          </List>
          <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>

          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "90%",
              marginLeft: "15px",
            }}
          >
            <Typography gutterBottom sx={{ fontSize: "17px", mt: 2 }}>
              What are the top 5 foundational values you would like to instil in
              early childhood and how do you incorporate them in daily life?
            </Typography>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <TextField
              type="text"
              multiline
              rows={3}
              value={values}
              onChange={handleChange4}
              sx={{
                width: "500",
                maxWidth: "100%",
                minWidth: "1373px",
                marginBottom: "8px",
              }}
              inputProps={{ maxLength: 500, spellCheck: true }}
            ></TextField>
          </div>
          <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "90%",
              marginLeft: "15px",
            }}
          >
            <Typography gutterBottom sx={{ fontSize: "17px", mt: 2 }}>
              What types of activities do you currently engage in with your
              child to promote cognitive
              development(analytical,reasoning,...etc)
            </Typography>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <TextField
              type="text"
              multiline
              rows={3}
              value={typeActivity}
              onChange={handleChange5}
              sx={{
                width: "500",
                maxWidth: "100%",
                minWidth: "1373px",
                marginBottom: "8px",
              }}
              id="fullwidth"
              inputProps={{ maxLength: 500, spellCheck: true }}
            ></TextField>
          </div>
          <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "90%",
              marginLeft: "15px",
            }}
          >
            <Typography gutterBottom sx={{ fontSize: "17px", mt: 2 }}>
              What activities would you recommend to foster emotional connection
              with your child ?
            </Typography>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <TextField
              type="text"
              multiline
              rows={3}
              value={emotionalActivity}
              onChange={handleChange6}
              sx={{
                width: "500",
                maxWidth: "100%",
                minWidth: "1373px",
                marginBottom: "8px",
              }}
              id="fullwidth"
              inputProps={{ maxLength: 500, spellCheck: true }}
            ></TextField>
          </div>
          <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "90%",
              marginLeft: "15px",
            }}
          >
            <Typography gutterBottom sx={{ fontSize: "17px", mt: 2 }}>
              How do you handle discipline and establish non-negotiables with
              your child?
            </Typography>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <TextField
              type="text"
              multiline
              rows={3}
              value={discipline}
              onChange={handleChange7}
              sx={{
                width: "500",
                maxWidth: "100%",
                minWidth: "1373px",
                marginBottom: "8px",
              }}
              id="fullwidth"
              inputProps={{ maxLength: 500, spellCheck: true }}
            ></TextField>
          </div>
          <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "90%",
              marginLeft: "15px",
            }}
          >
            <Typography gutterBottom sx={{ fontSize: "17px", mt: 2 }}>
              How much quality time/undivided attention should be given to your
              child? And are you able to give such dedicated time to your child?
            </Typography>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <TextField
              type="text"
              multiline
              rows={3}
              value={stime}
              onChange={handleChange1}
              sx={{
                width: "500",
                maxWidth: "100%",
                minWidth: "1373px",
                marginBottom: "8px",
              }}
              id="fullwidth"
              inputProps={{ maxLength: 500, spellCheck: true }}
            ></TextField>
          </div>
          <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "90%",
              marginLeft: "15px",
            }}
          >
            <Typography gutterBottom sx={{ fontSize: "17px", mt: 2 }}>
              Are there any specific cultural practices that you believe
              contribute positively to your childs development ?
            </Typography>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <TextField
              type="text"
              multiline
              rows={3}
              value={culturalActivity}
              onChange={handleChange8}
              sx={{
                width: "500",
                maxWidth: "100%",
                minWidth: "1373px",
                marginBottom: "8px",
              }}
              id="fullwidth"
              inputProps={{ maxLength: 500, spellCheck: true }}
            ></TextField>
          </div>
          <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "90%",
              marginLeft: "15px",
            }}
          >
            <Typography gutterBottom sx={{ fontSize: "17px", mt: 2 }}>
              Can you share a best practices in parenting,strategies where you
              were succesful in your opinion ?
            </Typography>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <TextField
              type="text"
              multiline
              rows={3}
              value={practices}
              onChange={handleChange3}
              sx={{
                width: "500",
                maxWidth: "100%",
                minWidth: "1373px",
                marginBottom: "8px",
              }}
              id="fullwidth"
              inputProps={{ maxLength: 500, spellCheck: true }}
            ></TextField>
          </div>
          <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "90%",
              marginLeft: "15px",
            }}
          >
            <Typography gutterBottom sx={{ fontSize: "17px", mt: 2 }}>
              What challenges do you face in maintaining a work-life balance
              while raising your child?
            </Typography>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <TextField
              type="text"
              multiline
              rows={3}
              value={challenges}
              onChange={handleChange9}
              sx={{ width: "500", minWidth: "1373px", marginBottom: "8px" }}
              inputProps={{ maxLength: 500, spellCheck: true }}
            ></TextField>
          </div>
          <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "90%",
              marginLeft: "15px",
            }}
          >
            <Typography gutterBottom sx={{ fontSize: "17px", mt: 2 }}>
              Looking back what things you could have done differently in your
              parenting journey?
            </Typography>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <TextField
              type="text"
              multiline
              rows={3}
              value={things}
              onChange={handleChange2}
              sx={{
                width: "500",
                maxWidth: "100%",
                minWidth: "1373px",
                marginBottom: "8px",
              }}
              id="fullwidth"
              inputProps={{ maxLength: 500, spellCheck: true }}
            ></TextField>
          </div>
          <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "90%",
              marginLeft: "15px",
            }}
          >
            <Typography gutterBottom sx={{ fontSize: "17px", mt: 2 }}>
              Have you sought proactive professional parenting
              guidance(workshops or counselling)?
            </Typography>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <TextField
              type="text"
              multiline
              rows={3}
              value={workshop}
              onChange={handleChange10}
              sx={{
                width: "500",
                maxWidth: "100%",
                minWidth: "1373px",
                marginBottom: "8px",
              }}
              id="fullwidth"
              inputProps={{ maxLength: 500, spellCheck: true }}
            ></TextField>
          </div>
          <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "90%",
              marginLeft: "15px",
            }}
          >
            <Typography gutterBottom sx={{ fontSize: "17px", mt: 2 }}>
              What do you wish you had known or had access to as a parent that
              could have made your parenting journey smoother?
            </Typography>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <TextField
              type="text"
              multiline
              rows={3}
              value={wish}
              onChange={handleChange11}
              sx={{
                width: "500",
                maxWidth: "100%",
                minWidth: "1373px",
                marginBottom: "8px",
              }}
              // id="fullwidth"
              inputProps={{ maxLength: 500, spellCheck: true }}
            ></TextField>
          </div>
          <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "90%",
              marginLeft: "15px",
            }}
          >
            <Typography gutterBottom sx={{ fontSize: "17px", mt: 2 }}>
              If you could offer one piece of advice to new or future
              parents,what would it be ?
            </Typography>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <TextField
              type="text"
              multiline
              rows={3}
              value={advice}
              onChange={handleChange12}
              sx={{
                width: "500",
                maxWidth: "100%",
                minWidth: "1373px",
                marginBottom: "8px",
              }}
              id="fullwidth"
              inputProps={{ maxLength: 500, spellCheck: true }}
            ></TextField>
          </div>
          <Divider style={{ borderTop: "1.5px solid #000" }}></Divider>

          <Grid container sx={{ mt: 4, ml: 2, width: "98vw", mb: 2 }}>
            <Grid
              item
              xs={12}
              md={0.5}
              sx={{ border: "1px solid rgb(196 196 196)" }}
            >
              <Typography v gutterBottom sx={{ mt: 2, fontSize: "14px" }}>
                Sr
                <br />
                No.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={0.5}
              sx={{ border: "1px solid rgb(196 196 196)" }}
            >
              <Typography v gutterBottom sx={{ mt: 2, fontSize: "14px" }}>
                Preferred <br /> Age
                <br />
                (In years)
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{ border: "1px solid rgb(196 196 196)" }}
            >
              <Typography v gutterBottom sx={{ mt: 2, fontSize: "14px" }}>
                What activity would you like to give to your child on daily,
                weekly or monthly basis and even one time activities?
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{ border: "1px solid rgb(196 196 196)" }}
            >
              <Typography v gutterBottom sx={{ mt: 2, fontSize: "14px" }}>
                What qualities do you expect from that activity to improve or
                add in your child?
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{ border: "1px solid rgb(196 196 196)" }}
            >
              <Typography v gutterBottom sx={{ mt: 2, fontSize: "14px" }}>
                How often would you want them to do that activity? (Daily,
                Weekly, Monthly, Qtrly, Yearly, Once)
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{ border: "1px solid rgb(196 196 196)" }}
            >
              <Typography gutterBottom sx={{ mt: 2, fontSize: "14px" }}>
                How much time / duration you expect them to take to finish the
                activity? ( in minutes)
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={1}
            ></Grid>

            <>
              <Grid item xs={12} md={0.5} sx={{}}>
                <TextField
                  disabled={true}
                  fullWidth
                  sx={{ width: "100%" }}
                  id="fullWidth"
                  value={0 + 1}
                  name={`${0 + 1}.serialNo`}
                  onChange={handleChangeActivityInfo}
                />
              </Grid>
              <Grid item xs={12} md={0.5} sx={{}}>
                <TextField
                  fullWidth
                  sx={{ width: "100%" }}
                  id="fullWidth"
                  type="number"
                  name={`${0 + 1}.prefferedAge`}
                  onChange={handleChangeActivityInfo}
                />
              </Grid>
              <Grid item xs={12} md={3} sx={{}}>
                <TextField
                  fullWidth
                  sx={{ width: "100%" }}
                  id="fullWidth"
                  name={`${0 + 1}.activityName`}
                  onChange={handleChangeActivityInfo}
                />
              </Grid>
              <Grid item xs={12} md={3} sx={{}}>
                <TextField
                  fullWidth
                  sx={{ width: "100%" }}
                  id="fullWidth"
                  name={`${0 + 1}.qualities`}
                  onChange={handleChangeActivityInfo}
                />
              </Grid>
              <Grid item xs={12} md={2} sx={{}}>
                <TextField
                  fullWidth
                  sx={{ width: "100%" }}
                  id="fullWidth"
                  name={`${0 + 1}.activityTimeWeekly`}
                  onChange={handleChangeActivityInfo}
                />
              </Grid>
              <Grid item xs={12} md={2} sx={{}}>
                <TextField
                  fullWidth
                  sx={{ width: "100%" }}
                  id="fullWidth"
                  name={`${0 + 1}.activityDuration`}
                  onChange={handleChangeActivityInfo}
                />
              </Grid>
              <Grid item md={1}></Grid>
            </>
            <>
              <Grid item xs={12} md={0.5} sx={{}}>
                <TextField
                  disabled={true}
                  fullWidth
                  sx={{ width: "100%" }}
                  id="fullWidth"
                  value={1 + 1}
                  name={`${1 + 1}.serialNo`}
                  onChange={handleChangeActivityInfo}
                />
              </Grid>
              <Grid item xs={12} md={0.5} sx={{}}>
                <TextField
                  fullWidth
                  sx={{ width: "100%" }}
                  id="fullWidth"
                  type="number"
                  name={`${1 + 1}.prefferedAge`}
                  onChange={handleChangeActivityInfo}
                />
              </Grid>
              <Grid item xs={12} md={3} sx={{}}>
                <TextField
                  fullWidth
                  sx={{ width: "100%" }}
                  id="fullWidth"
                  name={`${1 + 1}.activityName`}
                  onChange={handleChangeActivityInfo}
                />
              </Grid>
              <Grid item xs={12} md={3} sx={{}}>
                <TextField
                  fullWidth
                  sx={{ width: "100%" }}
                  id="fullWidth"
                  name={`${1 + 1}.qualities`}
                  onChange={handleChangeActivityInfo}
                />
              </Grid>
              <Grid item xs={12} md={2} sx={{}}>
                <TextField
                  fullWidth
                  sx={{ width: "100%" }}
                  id="fullWidth"
                  name={`${1 + 1}.activityTimeWeekly`}
                  onChange={handleChangeActivityInfo}
                />
              </Grid>
              <Grid item xs={12} md={2} sx={{}}>
                <TextField
                  fullWidth
                  sx={{ width: "100%" }}
                  id="fullWidth"
                  name={`${1 + 1}.activityDuration`}
                  onChange={handleChangeActivityInfo}
                />
              </Grid>
              <Grid item md={1}></Grid>
            </>

            {activityInfo.map((data, i) => (
              <>
                <Grid item xs={12} md={0.5} sx={{}}>
                  <TextField
                    disabled={true}
                    fullWidth
                    sx={{ width: "100%" }}
                    id="fullWidth"
                    value={i + 3}
                    name={`${i + 3}.serialNo`}
                    onChange={handleChangeActivityInfo}
                  />
                </Grid>
                <Grid item xs={12} md={0.5} sx={{}}>
                  <TextField
                    fullWidth
                    sx={{ width: "100%" }}
                    id="fullWidth"
                    type="number"
                    name={`${i + 3}.prefferedAge`}
                    onChange={handleChangeActivityInfo}
                  />
                </Grid>
                <Grid item xs={12} md={3} sx={{}}>
                  <TextField
                    fullWidth
                    sx={{ width: "100%" }}
                    id="fullWidth"
                    name={`${i + 3}.activityName`}
                    onChange={handleChangeActivityInfo}
                  />
                </Grid>
                <Grid item xs={12} md={3} sx={{}}>
                  <TextField
                    fullWidth
                    sx={{ width: "100%" }}
                    id="fullWidth"
                    name={`${i + 3}.qualities`}
                    onChange={handleChangeActivityInfo}
                  />
                </Grid>
                <Grid item xs={12} md={2} sx={{}}>
                  <TextField
                    fullWidth
                    sx={{ width: "100%" }}
                    id="fullWidth"
                    name={`${i + 3}.activityTimeWeekly`}
                    onChange={handleChangeActivityInfo}
                  />
                </Grid>
                <Grid item xs={12} md={2} sx={{}}>
                  <TextField
                    fullWidth
                    sx={{ width: "100%" }}
                    id="fullWidth"
                    name={`${i + 3}.activityDuration`}
                    onChange={handleChangeActivityInfo}
                  />
                </Grid>
                <Grid item md={1}></Grid>
              </>
            ))}
          </Grid>
          <div style={{ display: "flex", justifyContent: "end", width: "90%" }}>
            <Button onClick={addActitivityInfo} variant="outlined">
              +
            </Button>
          </div>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              marginRight: "30px",
            }}
          >
            <Button autoFocus variant="contained" onClick={openConfirm}>
              Save
            </Button>
          </div>
        </Dialog>

        <Dialog
          open={openConfirmDialog}
          onClose={closeConfirm}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div style={{ margin: "20px" }}>
            <Typography>Are you sure you want to do Final Submit?</Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Button variant="contained" onClick={closeConfirm}>
                Review
              </Button>
              <Button variant="contained" onClick={saveInfo} autoFocus>
                Final Submit
              </Button>
            </div>
            <div
              style={{
                marginTop: "5px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: "red", fontSize: "12px" }}>
                {error}
              </Typography>
            </div>
          </div>
        </Dialog>
      </React.Fragment>

      <div style={{ width: "99vw", marginTop: "20px" }}>
        <div style={{ display: "flex", justifyContent: "end" }}>
          {data.userRole === "Admin" ? (
            <>
              {/* <Button
                variant="outlined"
                size="small"
                sx={{ color: "grey" }}
                onClick={openSearchBox}
              >
                Search
              </Button> */}
              <Button onClick={downloadCsv}>Download CSV</Button>
            </>
          ) : (
            <></>
          )}
          <Button
            variant="outlined"
            onClick={() => handleClickOpen(undefined)}
            sx={{ ml: 2 }}
            // sx={{ float: "right" }}
          >
            Create
          </Button>
          <Button
            variant="outlined"
            sx={{ ml: 2 }}
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Logout
          </Button>
        </div>
        {filter ? (
          <Box
            sx={{
              height: 100,
              p: 2,
              width: "94.7vw",
              ml: 2,
              mt: 2,
              border: "1px solid rgba(224, 224, 224, 1)",
            }}
          >
            <Box sx={{ minWidth: 120, mt: 1 }}>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label" sx={{ fontSize: "12px !important" }}>All</InputLabel> */}
                <Select
                  size="small"
                  value={internName}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  onChange={(e) => {
                    setInterName(e.target.value);
                  }}
                >
                  {row.map((data) => (
                    // console.log(data)

                    <MenuItem key={data._id} value={data.intern}>
                      {data.intern}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <div>
                <Button variant="outlined" onClick={closeSearchBox}>
                  Close
                </Button>
                <Button variant="outlined" onClick={reset} sx={{ ml: 2 }}>
                  Reset
                </Button>
              </div>
              <Button variant="outlined" onClick={search}>
                Search
              </Button>
            </div>
          </Box>
        ) : (
          <></>
        )}

        <Box
          sx={{
            height: 500,
            p: 2,
            mt: 5,
            "& .super-app-theme--header": {
              backgroundColor: "#87CEFA",
            },
          }}
        >
          <DataGrid
            rows={row}
            columns={columns}
            getRowId={(row) => row._id}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            sx={{ width: "1oo%" }}
          />
        </Box>
      </div>
    </>
  );
}

export default App;
