import http from "../http-common";

class ActivityDataService {
    getAll() {
        return http.get("/activities");
    }

    get(id) {
        return http.get(`/activities/${id}`);
    }

    create(data) {
        return http.post("/activities", data);
    }

    update(id, data) {
        return http.put(`/activities/${id}`, data);
    }

    delete(id) {
        return http.delete(`/activities/${id}`);
    }

    getByIdCommission(idCommission) {
        if(idCommission===-1) return this.getAll();
        else return http.get(`/activities/byIdCommission?idCommission=${idCommission}`);
    }
}

export default new ActivityDataService();