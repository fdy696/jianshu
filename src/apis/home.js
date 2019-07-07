import request from './request';

const URL = {
  get: '/home'
};

export default {
  getAll() {
    return request(URL.get);
  }
};
