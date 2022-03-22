import axios from 'axios'

const COURSES_BASE_REST_API_URL = 'http://localhost:8080/api/v1/courses'

class CoursesService{

    getAllCourses(){
        return axios.get(COURSES_BASE_REST_API_URL)
    }
}

export default new CoursesService();