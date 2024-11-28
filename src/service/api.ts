import axios from "axios";

export const api = axios.create({
    baseURL: 'http://172.26.112.1:3000'
})