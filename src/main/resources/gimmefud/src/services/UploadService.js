import httpClient from "../http-common";


const create = data => {
    return httpClient.post("/upload", data);
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
export default {create, get, update, remove };