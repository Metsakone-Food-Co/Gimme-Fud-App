import httpClient from "../http-common";

const create = data => {
    return httpClient.post("/loginowner", data);
}




export default {  create };