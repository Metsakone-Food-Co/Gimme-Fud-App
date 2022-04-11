import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/courses');
}

const create = data => {
    return httpClient.post("/courses", data);
}

const get = id => {
    return httpClient.get(`/courses/${id}`);
}

const update = data => {
    return httpClient.put('/courses', data);
}

const remove = id => {
    return httpClient.delete(`/courses/${id}`);
}
export default { getAll, create, get, update, remove };