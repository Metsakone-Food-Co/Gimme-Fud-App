import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/customers');
}

const create = data => {
    return httpClient.post("/customers", data);
}

const get = id => {
    return httpClient.get(`/customers/${id}`);
}

const update = data => {
    return httpClient.put('/customers', data);
}

const remove = id => {
    return httpClient.delete(`/customers/${id}`);
}

export default { getAll, create, get, update, remove };