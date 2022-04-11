import httpClient from "../http-common";



const get = id => {
    return httpClient.get(`/private/${id}`);
}



export default { get };