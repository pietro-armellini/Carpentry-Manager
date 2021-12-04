import http from "../http-common";

class ManufacturingDataService {
    getAll() {
        return http.get("/manufacturing");
    }
}

export default new ManufacturingDataService();