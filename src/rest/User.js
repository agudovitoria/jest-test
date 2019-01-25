const axios = require('axios');

const BASE_URL = 'http://127.0.0.1:3000/api/user';
const HEADERS = { 'Content-Type': 'application/json' };

const GET_PARAMS = () => ({
  method: 'GET',
  headers: HEADERS
});

const POST_PARAMS = data => ({
  method: 'POST',
  body: JSON.stringify(data),
  headers: HEADERS
});

const PUT_PARAMS = data => ({
  method: 'PUT',
  body: JSON.stringify(data),
  headers: HEADERS
});

const DELETE_PARAMS = () => ({
  method: 'DELETE',
  headers: HEADERS
});

class User {
  static getAll() {
    return axios.get(BASE_URL, GET_PARAMS());
  }

  static getOne(id) {
    return axios.get(`${BASE_URL}/${id}`, GET_PARAMS());
  }

  static create(data) {
    return axios.post(BASE_URL, POST_PARAMS(data));
  }

  static update(data) {
    return axios.put(BASE_URL, PUT_PARAMS(data));
  }

  static delete(id) {
    return axios.delete(`${BASE_URL}/${id}`, DELETE_PARAMS());
  }
}

module.exports = User;