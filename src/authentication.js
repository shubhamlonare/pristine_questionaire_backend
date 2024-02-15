let token = localStorage.getItem("token")

let headers={
    "Authorization": "Bearer " + token,
}

export default headers;