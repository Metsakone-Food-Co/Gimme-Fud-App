import httpClient from "../http-common";



const get = id => {
    return httpClient.get(`/orderrest/${id}`);
}



export default { get };