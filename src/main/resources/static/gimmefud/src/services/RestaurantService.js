import axios from 'axios'

const RESTAURANT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/restaurants'

class RestaurantService{

    getAllRestaurants(){
        return axios.get(RESTAURANT_BASE_REST_API_URL)
    }
}

export default new RestaurantService();