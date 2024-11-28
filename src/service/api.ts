import axios from "axios";

export const api = axios.create({
    baseURL: 'http://172.21.144.1:3000'
})