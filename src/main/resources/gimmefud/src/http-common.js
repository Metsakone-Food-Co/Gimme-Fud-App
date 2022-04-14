import axios from "axios";

export default axios.create({
    baseURL: 'https://gimme-fud-app.herokuapp.com/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});