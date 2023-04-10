import axios from "axios";
import authHeader from "./authHeader.js";

const API_URL = "http://localhost:8000/api/";

class UserService {
  async getPublicContent() {
    return await axios.get(`${API_URL}getPublicContent`);
  }

  getUser() {
    return axios.get(`${API_URL}user`, { headers: authHeader() });
  }

  getModerator() {
    return axios.get(`${API_URL}mod`, { headers: authHeader() });
  }

  getAdmin() {
    return axios.get(`${API_URL}admin`, { headers: authHeader() });
  }
}

export default new UserService();
