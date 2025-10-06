import axios from "axios";
export const originURL = "http://localhost:8080"

export const httpClient = axios.create({
    baseURL : originURL ,
});