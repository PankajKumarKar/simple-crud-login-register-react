const API_URL = "http://localhost:3000/profile";
import axios from "axios";

const api = {
  async getUserById(id) {
    const response = await axios.get(`${API_URL}/${id}`);
    return response;
  },

  async updateUser(user) {
    const response = await axios.put(`${API_URL}/${user.id}`, user);
    return response;
  },

  async deleteUser(id) {
    const response = await axios.delete(`${API_URL}/${id}`);
  },
};

export default api;
