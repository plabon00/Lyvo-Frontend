import axios from "axios";
const BackendURL = import.meta.env.VITE_BACKEND_URL ;

export const originURL = `${BackendURL}`

export const httpClient = axios.create({
    baseURL : originURL ,
});