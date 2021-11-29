import http from "../http-common";

class TutorialDataService {
    getAll() {
        return http.get("/activities");
    }

    get(id) {
        return http.get(`/activities/${id}`);
    }

    create(data) {
        return http.post("/activities", data);
    }

    //no longer used
    update(id, data) {
        return http.put(`/activities/${id}`, data);
    }

    delete(id) {
        return http.delete(`/activities/${id}`);
    }

    //no longer used
    deleteAll() {
        return http.delete(`/activities`);
    }

    //convert in search activity by idCommission
    findByTitle(idCommission) {
        return http.get(`/activities?idCommission=${idCommission}`);
    }
}

export default new TutorialDataService();