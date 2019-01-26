import axios from "axios";

export const HTTP = axios.create({
  baseURL: "https://vest-test-task.herokuapp.com/"
});


HTTP.interceptors.response.use(
  null,
  err => {
    if (err) {
      return HTTP.request(err.config);
    }
    return Promise.reject(err);
  }
);
