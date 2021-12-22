import http from '../http-common';

class manufactureDataService {
  getAll() {
    return http.get('/manufacture');
  }
}

export default new manufactureDataService();