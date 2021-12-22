import http from '../http-common';

class CommissionDataService {
  getAll() {
    return http.get('/commissions');
  }
}

export default new CommissionDataService();