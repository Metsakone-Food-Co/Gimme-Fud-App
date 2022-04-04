import httpClient from "../http-common";





const get = id => {
    return httpClient.get(`/course/${id}`);
}

export default {  get};