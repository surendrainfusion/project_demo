import axios from "axios";

const API_URL = "http://localhost:8000/api/";

class AuthService {
   //Register
   register(user) {
    // console.log("register user::", user);
    return axios.post(`${API_URL}register`, {
      name: user.name,
      mobileNo : user.mobileNo,
      email: user.email,
      password: user.password,
      profile: user.profile
    });
  }

  //Login
  async login(user) {
    const response = await axios.post(`${API_URL}login`, {
      email: user.email,
      password: user.password,
    });
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    // console.log("response.data", response.data);
    return response.data;
  }

  //logout
  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
