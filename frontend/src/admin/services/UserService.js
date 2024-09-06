import axios from "axios";

const URL = 'http://localhost:8080/auth' 

export const loginApi = (user) => axios.post(`${URL}/login`,user)