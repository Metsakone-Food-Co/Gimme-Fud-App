import httpClient from "../http-common";

const create = data => {
    return httpClient.post("/login", data);
}




export default {  create };