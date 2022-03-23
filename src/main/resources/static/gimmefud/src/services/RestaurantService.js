import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/restaurants');
}

const create = data => {
    return httpClient.post("/restaurants", data);
}
export default { getAll, create };


/*import axios from 'axios'
import CreateRestaurantComponent from '../components/CreateRestaurantComponent'
const RESTAURANT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/restaurants'

class RestaurantService{

    getAllRestaurants(){
        return axios.get(RESTAURANT_BASE_REST_API_URL)
    }

    createRestaurant(props){
        console.log(props)
        return axios.post(RESTAURANT_BASE_REST_API_URL, props);
    }

}

export default new RestaurantService();*/