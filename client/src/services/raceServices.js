import http from '../http-common.js'
class RaceDataService {
  getAll() {
    return http.get("/findall");
  }
  get(id) {
    return http.get(`/race/${id}`);
  }
  create(data) {
    return http.post("/create", data);
  }
  update(id, data) {
    return http.put(`/${id}`, data);
  }
  delete(id) {
    return http.delete(`/${id}`);
  }
  deleteAll() {
    return http.delete(`/deleteall`);
  }
}
export default new RaceDataService();