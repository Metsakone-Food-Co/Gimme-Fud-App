import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/customer');
}

const create = data => {
    return httpClient.post("/customer", data);
}

const get = id => {
    return httpClient.get(`/customer/${id}`);
}

const update = data => {
    return httpClient.put('/customer', data);
}

const remove = id => {
    return httpClient.delete(`/customer/${id}`);
}
export default { getAll, create, get, update, remove };