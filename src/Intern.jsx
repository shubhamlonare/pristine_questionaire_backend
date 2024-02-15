// import React from 'react'

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Intern() {
    const navigate = useNavigate();

    const internPage = (data) => {
        navigate('/parentData', { state: data })
    }

    return (
        <div style={{ height: "90vh", width: "98vw", display: "flex",flexDirection:"column", justifyContent: "center", alignItems: "center" }}>
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <Button onClick={() => { internPage("Admin") }} variant="outlined" sx={{ width: "200px", height: "200px" }}>
                    Admin
                </Button>
            </div>
            <div style={{ width: "70vw", display: "flex", justifyContent: "space-between" }}>
                <Button onClick={() => { internPage("Shubham") }} variant="outlined" sx={{ width: "200px", height: "200px" }}>
                    Shubham
                </Button>
                <Button onClick={() => { internPage("Saurabh") }} variant="outlined" sx={{ width: "200px", height: "200px" }}>
                    Saurabh
                </Button>
                <Button onClick={() => { internPage("Gaurav") }} variant="outlined" sx={{ width: "200px", height: "200px" }}>
                    Gaurav
                </Button>
            </div>
        </div>
    )
}
