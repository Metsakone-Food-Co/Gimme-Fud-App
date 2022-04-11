import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/restaurantowners');
}

const create = data => {
    return httpClient.post("/restaurantowners", data);
}
export default { getAll, create };