import axios from 'axios'

const CUSTOMER_BASE_REST_API_URL = 'http://localhost:8080/api/v1/customers'

class CustomerService{

    getAllCustomers(){
        return axios.get(CUSTOMER_BASE_REST_API_URL)
    }
}

export default new CustomerService();