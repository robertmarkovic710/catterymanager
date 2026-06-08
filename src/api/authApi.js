import axios from "axios";

const API_URL = "http://localhost:8081/api/auth";

export async function signin(email, password) {
    const response = await axios.post(`${API_URL}/signin`, {
        email,
        password
    });

    const user = response.data;

    const authorizationHeader = response.headers.authorization;

    if (!authorizationHeader) {
        throw new Error("Backend nije vratio Authorization header");
    }

    const token = authorizationHeader.replace("Bearer ", "");

    return {
        user,
        token
    };
}

export async function signup(firstName, lastName, email, password, countryCode, cityMunicipalityCode) {
    const response = await axios.post(`${API_URL}/signup`, {
        firstName,
        lastName,
        email,
        password,
        countryCode,
        cityMunicipalityCode
    });

    return response.data;
}

export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}