import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'https://vest-test-task.herokuapp.com'
});
