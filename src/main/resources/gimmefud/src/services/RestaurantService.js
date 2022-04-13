import httpClient from "../http-common";


const getAll = () => {
    return httpClient.get('/restaurants');
}

const create = data => {
    return httpClient.post("/restaurants", data);
}

const get = id => {
    return httpClient.get(`/restaurants/${id}`);
}

const update = data => {
    return httpClient.put('/restaurants', data);
}

const remove = id => {
    return httpClient.delete(`/restaurants/${id}`);
}

export default { getAll, create, get, update, remove };




