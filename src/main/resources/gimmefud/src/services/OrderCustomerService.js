import httpClient from "../http-common";



const get = id => {
    return httpClient.get(`/ordercust/${id}`);
}


export default {  get };