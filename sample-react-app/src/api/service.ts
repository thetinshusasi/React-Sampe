import axios from "axios";
const baseUrl = "http://localhost:8813/api/";
const get = (url: string) => {
    return axios.get(baseUrl + url);
}

const post = (url: string, data: any) => {
    return axios.post(baseUrl + url, data);
}
const service = {
    get: get,
    post: post
}

export default service;