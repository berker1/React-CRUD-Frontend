import axios from 'axios'

const AUTH_API_BASE_URL = "http://localhost:8080/api/v1/auth";

class AuthService {

    login( userName,  password){
        return axios.post(AUTH_API_BASE_URL + "/login", "demo", "demo");
    }

    login_user(user){
        return axios.post(AUTH_API_BASE_URL, user);
    }

}

export default new AuthService()