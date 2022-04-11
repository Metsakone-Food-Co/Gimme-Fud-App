import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/orders');
}

const create = data => {
    return httpClient.post("/orders", data);
}

const get = id => {
    return httpClient.get(`/orders/${id}`);
}

const update = data => {
    return httpClient.put('/orders', data);
}

const remove = id => {
    return httpClient.delete(`/orders/${id}`);
}

export default { getAll, create, get, update, remove };