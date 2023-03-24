import axios from "axios";

const URL = "http://localhost:8000/api/v1/user"
const USER_ENDPOINTS = {
    create: "",
}

export const userServices = {
    create: (user) => {
        axios.post(
            USER_ENDPOINTS.create,
            user
        )
        .then(
            (res) => console.log(res.data)
        )
    }
}