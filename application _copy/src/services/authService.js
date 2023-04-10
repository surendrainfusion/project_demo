import axios from "axios";

const API_URL = "http://localhost:8000/api/";

class AuthService {
  //Register
  register(user) {
    return axios.post(`${API_URL}user/add`, user);
  }

  //Login
  async login(user) {
    const response = await axios.post(`${API_URL}login`, user);
    if (response.data) {
      const data = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        authorization: response.data.authorization,
        success : response.data.success
      };
      localStorage.setItem("user", JSON.stringify(data));
    }
    return response.data;
  }

  //logout
  logout() {
    localStorage.removeItem("user");
  }
}
export default new AuthService();
