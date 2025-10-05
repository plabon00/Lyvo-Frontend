import axios from "axios";
export const URL = "http://localhost:8000"

export const httpClient = axios.create({
    baseURL : URL ,
});